"use strict";

// Allows using __base in other files to local require
global.__base = __dirname; // eslint-disable-line no-underscore-dangle

var log4js		= require("log4js");
log4js.setGlobalLogLevel("ALL");

var express		= require("express");
var compression	= require("compression");
var session		= require("express-session");
var bodyParser	= require("body-parser");
var logger		= require("./log")("application");
var config		= require("./config");
var models		= require("./models");
var path		= require("path");
var querystring	= require("querystring");
var moment		= require("moment");

var app = express();

// Configuration
app.set("port", config.port);
app.set("view engine", "jade");
app.set("views", [
	path.join(__dirname, "/templates/views")
]);
if (app.get("env") === "development") {
	app.set("json spaces", 2);
}

// Middleware
app.use(log4js.connectLogger(require("./log")("requests"), {level: "auto"}));
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Setup sessions
// TODO: Switch to a better session store
app.use(session({
	cookie: {secure: false},
	secret: config.cookieSecret,
	resave: false,				// TODO: Actually check if the store we use implements the touch method
	saveUninitialized: false
}));

// Setup authentication
require("./authentication")(app);

// Add some values for the templates to use
app.locals.moment = moment;
app.locals.querystring = querystring;
app.use(function(req, res, next) {
	res.locals.user = req.user;
	next();
});

// Setup routes
require("./routes")(app);

// Setup error handlers
app.use(function(err, req, res, next) {	// eslint-disable-line no-unused-vars
	logger.error("Error: " + err.stack);
	res.status(err.status || 501);
	res.render("error", {
		message: err.message,
		error: app.get("env") === "development" ? err : {}
	});
});

// Handle 404 not found
app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// Sync the database models
logger.info("Syncing database");
models.sequelize.sync({force: true}).then(function() {
	// Load test data if this is a development system
	if (app.get("env") === "development") {
		require("./testData")();
	}

	// Start the server
	var server = app.listen(app.get("port"), function() {
		logger.info("Server listening on port " + server.address().port);
	});
});
