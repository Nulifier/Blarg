"use strict";

var path		= require("path");
var glob		= require("glob");
var logger		= require(__base + "/log")("models");

module.exports = function(sequelize) {
	// Create the db object
	var db = {};

	// Include all models in this folder
	try {
		var files = glob.sync("*.js", {
			cwd: __dirname,
			ignore: "index.js"
		});

		files.forEach(function(file) {
			var model = sequelize.import(path.join(__dirname, file));

			if (!model) {
				throw new Error("Model definition file \"" + file + "\" failed to export anything");
			}

			logger.trace("Adding model: " + model.name);
			db[model.name] = model;
		});
	}
	catch (err) {
		logger.error("Error loading models: " + err.message);
	}

	// Run the associate callbacks for each model to build associations after the models are created
	Object.keys(db).forEach(function(modelName) {
		if ("associate" in db[modelName]) {
			db[modelName].associate(db);
		}
	});

	return db;
};
