# No Linux Frame

No Linux Frame is a plugin for the Discord modification known as Powercord. What this plugin will do is add minimize, maximize, and close buttons to the toolbar, along with making it draggable.

This plugin was designed only for linux distributions, not for Windows or and other operating system.

## Note

It is very likely with the eventual release of V3 for Powercord that this plugin will no longer work.

## Installation
Due to Powercord limitations installation isn't as simple as other plugins. 

To install this plugin you can either download it as a zip and extract to your plugins directory, or clone it with the command below.


```bash
git clone https://github.com/Litleck/no-linux-frame.git
```

For the plugin to look proper you will need to edit a file that is a part of Powercord. This file can be found in your powercord install directory at `/src/Powercord/browserWindow.js`

Open `browserWindow.js` in your preferred editor and navigate to line 44. On that line you want to type in:

```js
opts.frame = false;
```

Save the file then fully restart your Discord client. If all is done correctly the frame should be gone there should be minimize, maximize and close buttons on the toolbar.

## Contributing
Pull requests are welcome. For any bugs, please open an issue first so we can discuss.

## License
[MIT](https://choosealicense.com/licenses/mit/)
