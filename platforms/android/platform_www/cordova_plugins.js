cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-thermalprint.Thermalprint",
      "file": "plugins/cordova-plugin-thermalprint/www/printer.js",
      "pluginId": "cordova-plugin-thermalprint",
      "clobbers": [
        "Thermalprint"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-thermalprint": "1.3.8"
  };
});