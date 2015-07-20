"use strict";

var log4js		= require("log4js");
log4js.setGlobalLogLevel("OFF");

var models		= require(__base + "/models");
var testData	= require(__base + "/testData");

global.resetDb = function resetDb() {
	return models.sequelize.truncate()
		.then(testData);
};

describe("Server", function() {
	before(function(done) {
		models.sequelize.sync({force: true})
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
