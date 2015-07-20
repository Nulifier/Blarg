"use strict";

var models		= require(__base + "/models");
var adminView	= require(__base + "/routes/views/admin");
var fakeRouter	= require("./fakeRouter");

module.exports = function() {
	describe("Admin", function() {
		var routes;
		var req = {
			method: "get",
			url: "/admin/posts",
			query: {},
			params: {},
			body: {}
		};
		var res = {};

		before(function() {
			return resetDb();
		});

		before(function() {
			routes = {};
			adminView(fakeRouter(routes));
		});

		describe("POST /posts/:id", function() {
			var postId = 1;
			var oldPost;

			before("Get user before modification", function() {

				return models.Post.findById(postId)
				.then(function(post) {
					oldPost = post;
				});
			});

			before("Make request", function(done) {
				req.params.id = postId;
				req.body.title = "Different title";
				req.body.state = "draft";
				req.body.content = "<p>A Post</p>";

				res.redirect = sinon.spy(function() {
					done();
				});

				routes["/admin/posts/:id"].post[0](req, res, done);
			});

			it("should redirect on success", function() {
				res.redirect.should.be.calledOnce;
			});

			it("should update the post", function() {
				// Get the new post
				return models.Post.findById(postId)
				.then(function(newPost) {
					newPost.title.should.equal(req.body.title);
					newPost.state.should.equal(req.body.state);
					newPost.content.should.equal(req.body.content);
				});
			});
		});
	});
};
