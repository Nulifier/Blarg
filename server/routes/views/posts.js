"use strict";

var models		= require("obsidian").models;

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
			res.locals.post = post;
			return post.getAuthor();
		})
		.then(function(author) {
			res.render("post", {
				author: author
			});
		})
		.catch(function(err) {
			return next(err);
		});
	});
};
