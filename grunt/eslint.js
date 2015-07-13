"use strict";

var config		= require("./config");

module.exports = {
	dev: {
		src: [
			config.clientScriptsDir + "/**/*.js",
			config.serverDir + "/**/*.js",
			"!" + config.clientBuildDir + "/**"
		]
	}
};
