"use strict";

var config		= require("./config");

module.exports = [
	config.clientBuildDir + "/",
	config.logsDir + "/",
	config.serverDir + "/db.devel.sqlite",
	config.clientStylesDir + "/fontello"
];
