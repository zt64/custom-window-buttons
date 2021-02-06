const { Plugin } = require('powercord/entities');
const { React, getModule, getModuleByDisplayName } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

const Settings = require('./components/Settings');
const Buttons = require('./components/Buttons');
module.exports = class CustomWindowButtons extends Plugin {
  constructor () {
    super();

    this.classes = { ...getModule([ 'iconWrapper', 'clickable' ], false) };
    this.HeaderBarContainer = getModuleByDisplayName('HeaderBarContainer', false);
    this.CloseIconWithKeybind = getModule(m => m.default?.displayName === 'CloseIconWithKeybind', false);
  }

  startPlugin () {
    this.loadStylesheet('style.css');

    powercord.api.settings.registerSettings('custom-window-buttons', {
      category: this.entityID,
      label: 'No Linux Frame',
      render: Settings
    });

    inject('cwb-header', this.HeaderBarContainer.prototype, 'renderLoggedIn', (_, res) => {
      if (!res.props.toolbar) {
        res.props.toolbar = React.createElement(React.Fragment, { children: [] });
      }

      res.props.toolbar.props.children.push(React.createElement(Buttons));

      return res;
    });

    inject('cwb-settings', this.CloseIconWithKeybind, 'default', (_, res) => {
      if (!res.props.buttons) {
        res.props.children.buttons = React.createElement(React.Fragment, {
          className: 'cwb-settings-buttons',
          children: []
        });
      }

      res.props.children.push(React.createElement(Buttons));

      return res;
    });
  }

  pluginWillUnload () {
    uninject('cwb-header');
    uninject('cwb-settings');
    powercord.api.settings.unregisterSettings('custom-window-buttons');
  }
};
