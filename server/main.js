"use strict";

// Allows using __base in other files to local require
global.__base = __dirname; // eslint-disable-line no-underscore-dangle

var express		= require("express");
var compression	= require("compression");
var logger		= require("./log")("application");
var log4js		= require("log4js");
var config		= require("./config");
var models		= require("./models");
var path		= require("path");

var app = express();

// Configuration
app.set("port", config.port);
app.set("view engine", "jade");
app.set("views", [
	path.join(__dirname, "/templates/views")
]);

// Middleware
app.use(log4js.connectLogger(require("./log")("requests"), {level: "auto"}));
app.use(compression());
app.use(express.static(path.join(__dirname, "public-build")));

// Setup routes
require("./routes")(app);

// Start the server
models.sequelize.sync().then(function() {
	var server = app.listen(app.get("port"), function() {
		logger.info("Server listening on port " + server.address().port);
	});
});
