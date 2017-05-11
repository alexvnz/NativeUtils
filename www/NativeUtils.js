var exec = require("cordova/exec");

var NativeUtils = {
	getGPSState: function(success, failure, config) {

		var dialog = (config && config.dialog) || false;

		console.log("CONFIG:" + JSON.stringify(config));

		exec(
			success || function() {},
			failure || function() {},
			'NativeUtils',
			'getGPSState',
			[dialog]
			);
	}
}

module.exports = NativeUtils;