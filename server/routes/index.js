"use strict";

var path		= require("path");
var logger		= require(__base + "/log")("routes");
var obsidian	= require("obsidian");

module.exports = function(app) {
	logger.trace("Looking for routes");

	var router = obsidian.express.Router();

	obsidian.requireDir(__dirname, ".", function(fullPath) {
		// Skip this file
		if (fullPath !== __filename) {
			logger.trace("Adding route: " + path.basename(fullPath, ".js"));
			require(fullPath)(router);
		}
	});

	app.use(router);
};
