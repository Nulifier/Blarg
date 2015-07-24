"use strict";

// Allows using __base in other files to local require
global.__base = __dirname; // eslint-disable-line no-underscore-dangle

var log4js		= require("log4js");
log4js.setGlobalLogLevel("ALL");

var logger		= require("./log")("application");
var config		= require("./config");
var path		= require("path");
var session		= require("express-session");
var moment		= require("moment");

var obsidian	= require("obsidian");

obsidian.init({
	// Connection Config
	port: config.port,

	// Engine Config
	database: config.database,
	"view engine": "jade",
	views: path.join(__dirname, "/templates/views"),

	// Middleware
	static: path.join(__dirname, "public"),
	less: path.join(__dirname, "/../client"),
	"less options": {
		dest: path.join(__dirname, "/public"),
		render: {
			paths: [
				path.join(__dirname, "../client/styles/inc"),
				path.join(__dirname, "/../node_modules")
			]
		}
	},

	// Application
	routes: require("./routes"),
	models: require("./models"),
	locals: {
		moment: moment
	}
});

var app = obsidian.get("app");

// Middleware
app.use(log4js.connectLogger(require("./log")("requests"), {level: "auto"}));

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
app.use(function(req, res, next) {
	res.locals.user = req.user;
	next();
});

// Sync the database models
logger.info("Syncing database");
obsidian.sequelize.sync({force: true}).then(function() {
	// Load test data if this is a development system
	if (obsidian.get("env") === "development") {
		require("./testData")();
	}

	// Start the server
	obsidian.start();
});
