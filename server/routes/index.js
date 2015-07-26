"use strict";

var path		= require("path");
var obsidian	= require("obsidian");

module.exports = function(app) {
	obsidian.log.info("Loading routes");

	var router = obsidian.express.Router();

	obsidian.requireDir(__dirname, ".", function(fullPath) {
		// Skip this file
		if (fullPath !== __filename) {
			obsidian.log.debug("Adding route: %s", path.basename(fullPath, ".js"));
			require(fullPath)(router);
		}
	});

	app.use(router);
};
