var path	= require("path");
var config	= require("./config");

module.exports = {
	test: {
		src: [config.serverDir + "/tests/**/*.js"],
		options: {
			reporter: "spec",
			require: [
				function() {
					process.env.NODE_ENV = "test";
				},
				function() {sinon = require("sinon");},
				function() {__base = config.serverDir},
				function() {
					var chai = require("chai");
					var sinonChai = require("sinon-chai");
					should = chai.should();
					chai.use(sinonChai);
				}
			]
		}
	}
};
