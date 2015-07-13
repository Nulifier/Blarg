"use strict";

var models		= require(__base + "/models");

module.exports = function(router) {
	router.get("/posts", function(req, res, next) {
		models.Post.findAll({
			where: {
				state: "published"
			}
		}).then(function(posts) {
			res.render("posts", {
				posts: posts
			});
		}).catch(function(err) {
			return next(err);
		});
	});

	router.get("/posts/:id", function(req, res, next) {
		models.Post.findById(req.params.id)
		.then(function(post) {
			res.render("post", {
				post: post
			});
		})
		.catch(function(err) {
			return next(err);
		});
	});
};
