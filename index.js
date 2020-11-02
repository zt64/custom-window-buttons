const { Plugin } = require('powercord/entities');
const { React, getModule, getModuleByDisplayName } = require('powercord/webpack');
const { Icon } = require('powercord/components');
const { inject, uninject } = require('powercord/injector');
const electron = require('electron');

module.exports = class NoBar extends Plugin {
  async startPlugin () {
    const HeaderBarContainer = await getModuleByDisplayName('HeaderBarContainer');
    const classes = await getModule([ 'iconWrapper', 'clickable' ]);

    this.loadStylesheet('style.css');

    inject('no-linux-frame', HeaderBarContainer.prototype, 'renderLoggedIn', (args, res) => {
      if (!res.props.toolbar) {
        res.props.toolbar = React.createElement(React.Fragment, { children: [] });
      }

      res.props.toolbar.props.children.push(
        React.createElement(HeaderBarContainer.Icon, {
          onClick: () => DiscordNative.window.minimize(),
          icon: () => React.createElement(Icon, {
            className: classes.icon,
            name: 'Subtract' })
        }),
        React.createElement(HeaderBarContainer.Icon, {
          onClick: () => electron.ipcRenderer.invoke('POWERCORD_WINDOW_IS_MAXIMIZED') ? DiscordNative.window.maximize() : DiscordNative.window.restore(),
          icon: () => React.createElement(Icon, {
            className: classes.icon,
            name: 'Fullscreen' })
        }),
        React.createElement(HeaderBarContainer.Icon, {
          onClick: () => DiscordNative.window.close(),
          icon: () => React.createElement(Icon, {
            className: classes.icon,
            name: 'Close' })
        })
      );

      return res;
    });
  }

  pluginWillUnload () {
    uninject('no-linux-frame');
  }
};
