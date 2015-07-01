"use strict";

var glob = require("glob");
var logger = require(__base + "/log")("routes");
var express = require("express");

module.exports = function(app) {
	logger.trace("Looking for routes");

	// Look for all routes below this directory
	glob("**/*.js", {
		cwd: __dirname,
		ignore: "index.js"
	}, function(err, files) {
		if (err) {
			logger.error("Error finding routes: " + err.message);
			return;
		}

		// Create the router
		var router = express.Router();

		files.forEach(function(file) {
			// Get the name excluding the extension
			var routeFilename = file.substr(0, file.indexOf("."));
			var routePath = "/" + routeFilename;	// Default to the route name

			// If the name starts with "views/" remove the first part
			if (routePath.indexOf("/views/") === 0) {
				routePath = routePath.substr("/views".length);
			}

			// The index route is special
			if (routePath === "/index") {
				routePath = "/";
			}

			// Add the route
			logger.trace("Adding route: " + routeFilename + ", at path: " + routePath);
			require("./" + routeFilename)(router.route(routePath));
		});

		app.use(router);
	});
};
