"use strict";

var path		= require("path");
var obsidian	= require("obsidian");

module.exports = function(sequelize) {
	// Create the db object
	var db = {};

	// Include all models in this folder
	obsidian.requireDir(__dirname, ".", function(fullPath) {
		// Skip this file
		if (fullPath === __filename) {
			return;
		}

		var model = sequelize.import(fullPath);

		if (!model) {
			throw new Error("Model definition file \"" + path.basename(fullPath, ".js") + "\" failed to export anything");
		}

		obsidian.log.debug("Adding model: %s", model.name);
		db[model.name] = model;
	});

	// Run the associate callbacks for each model to build associations after the models are created
	Object.keys(db).forEach(function(modelName) {
		if ("associate" in db[modelName]) {
			db[modelName].associate(db);
		}
	});

	return db;
};
