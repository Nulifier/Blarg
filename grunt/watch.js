"use strict";

var config		= require("./config");

module.exports = {
	// Watches grunt files to check for config changes
	grunt: {
		files: ["Gruntfile.js", "grunt/*.js"],
		options: {
			reload: true
		}
	},
	less: {
		files: [config.clientStylesDir + "/**/*.less"],
		tasks: ["less:dev"]
	},
	webpack: {
		files: [
			config.clientScriptsDir + "/**/*.js",
			config.clientScriptsDir + "/**/*.jsx"
		],
		tasks: ["webpack:dev"]
	},
	eslint: {
		files: [
			"**/.eslintrc",
			config.clientScriptsDir + "/**/*.js",
			config.serverDir + "/**/*.js",
			"!" + config.clientBuildDir + "/**"
		],
		tasks: ["newer:eslint"]
	}
};
