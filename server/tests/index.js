"use strict";

var log4js		= require("log4js");
log4js.setGlobalLogLevel("OFF");
var obsidian	= require("obsidian");
var testData	= require(__base + "/testData");

global.resetDb = function resetDb() {
	return obsidian.sequelize.truncate()
		.then(testData);
};

describe("Server", function() {
	before(function(done) {
		// Initialize obsidian
		obsidian.init({
			database: {
				dialect: "sqlite",
				logging: false
			},
			models: require(__base + "/models")
		});

		obsidian.sequelize.sync({force: true})
		.then(function() {done(); })
		.catch(function(err) {
			console.log(err.stack);
			done();
		});
	});

	describe("Routes", function() {
		describe("APIs", require("./routes/api"));
		describe("Views", require("./routes/views"));
	});

	describe("Models", require("./models"));
});
