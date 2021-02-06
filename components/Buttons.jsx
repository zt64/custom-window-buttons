const { React, getModule, getModuleByDisplayName } = require('powercord/webpack');
const { Icon } = require('powercord/components');
const electron = require('electron');

module.exports = class Buttons extends React.PureComponent {
  constructor (props) {
    super(props);

    this.classes = { ...getModule([ 'iconWrapper', 'clickable' ], false) };
    this.HeaderBarContainer = getModuleByDisplayName('HeaderBarContainer', false);
  }

  render () {
    return [
      React.createElement(this.HeaderBarContainer.Icon, {
        onClick: () => DiscordNative.window.minimize(),
        icon: () => React.createElement(Icon, {
          className: this.classes.icon,
          name: 'Subtract'
        })
      }),
      React.createElement(this.HeaderBarContainer.Icon, {
        onClick: () => electron.ipcRenderer.invoke('POWERCORD_WINDOW_IS_MAXIMIZED') ? DiscordNative.window.maximize() : DiscordNative.window.restore(),
        icon: () => React.createElement(Icon, {
          className: this.classes.icon,
          name: 'Fullscreen'
        })
      }),
      React.createElement(this.HeaderBarContainer.Icon, {
        onClick: () => DiscordNative.window.close(),
        icon: () => React.createElement(Icon, {
          className: this.classes.icon,
          name: 'Close'
        })
      })
    ];
  }
};
