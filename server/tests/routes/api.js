"use strict";

var _			= require("lodash");
var log4js		= require("log4js");
log4js.setGlobalLogLevel("OFF");
var comments	= require(__base + "/routes/api/comments");

// This is a fake router that just returns the handlers in an object
function router(routes) {
	function routerFunc(methodName) {
		return function(path, handler) {
			if (!_.isPlainObject(routes[path])) {
				routes[path] = {};
			}
			if (!_.isArray(routes[path][methodName])) {
				routes[path][methodName] = [];
			}
			routes[path][methodName].push(handler);
		};
	}
	return {
		get: routerFunc("get")
	};
}

module.exports = function() {
	describe("comments", function() {
		var routes;
		var req;
		var res;
		// var next;

		before(function(done) {
			resetDb().then(function() {done(); });
		});

		before(function() {
			// Get all the routes by making a fake router object
			routes = {};
			comments(router(routes));
		});

		beforeEach(function() {
			req = {
				method: "get",
				url: "/api/comments",
				query: {}
			};
			res = {
				json: sinon.spy()
			};
			// next = sinon.spy();
		});

		it("should respond", function(done) {
			res.json = sinon.spy(function() {
				res.json.should.be.calledOnce;
				done();
			});

			routes["/api/comments"].get[0](req, res, done);
		});
	});
};
