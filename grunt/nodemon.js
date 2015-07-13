"use strict";

var config		= require("./config");

module.exports = {
	dev: {
		script: config.serverMain,
		options: {
			env: {
				PORT: config.serverPort,
				NODE_ENV: config.serverEnv,
			},
			watch: [
				__filename,
				config.serverDir,
				"!" + config.serverDir + "/tests"
			],
			ignore: [
				config.clientBuildDir
			]
		}
	}
};
