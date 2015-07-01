"use strict";

var path		= require("path");
var Sequelize	= require("sequelize");
var config		= require(__base + "/config").database;
var glob		= require("glob");
var logger		= require(__base + "/log")("models");

// Create database connection
var sequelize = new Sequelize(config.database, config.username, config.password, config);

// Create the db object
var db = {};

// Include all models in this folder
glob("*.js", {
	cwd: __dirname,
	ignore: "index.js"
}, function(err, files) {
	if (err) {
		logger.error("Error loading models: " + err.message);
	}

	files.forEach(function(file) {
		var model = sequelize.import(path.join(__dirname, file));
		logger.trace("Adding model: " + model.name);
		db[model.name] = model;
	});
});

// Run the associate callbacks for each model to build associations after the models are created
Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
