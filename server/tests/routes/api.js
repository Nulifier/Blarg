"use strict";

var _			= require("lodash");
var comments	= require(__base + "/routes/api/comments");
var fakeRouter	= require("./fakeRouter");

module.exports = function() {
	describe("comments", function() {
		var routes;
		var req;
		var res;

		before(function() {
			return resetDb();
		});

		before(function() {
			// Get all the routes by making a fake router object
			routes = {};
			comments(fakeRouter(routes));
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
