"use strict";

var glob	= require("glob");
var logger	= require(__base + "/log")("routes");
var express	= require("express");

module.exports = function(app) {
	logger.trace("Looking for routes");

	try {
		var files = glob.sync("**/*.js", {
			cwd: __dirname,
			ignore: "index.js"
		});

		// Create the router
		var router = express.Router();

		files.forEach(function(file) {
			// Get the name excluding the extension
			var routeFilename = file.substr(0, file.indexOf("."));

			// Add the route
			logger.trace("Adding route: " + routeFilename);
			var routeProvider = require("./" + routeFilename);

			// Allow the provider to add routes to our router
			routeProvider(router);
		});

		app.use(router);
	}
	catch (err) {
		logger.error("Error finding routes: " + err.stack);
	}
};
