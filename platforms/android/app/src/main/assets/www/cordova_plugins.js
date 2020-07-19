cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-fcm-ng.FCMPlugin",
      "file": "plugins/cordova-plugin-fcm-ng/www/FCMPlugin.js",
      "pluginId": "cordova-plugin-fcm-ng",
      "clobbers": [
        "FCMPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-fcm-ng": "7.0.1",
    "cordova-support-google-services": "1.4.1"
  };
});