"use strict";

var obsidian	= require("obsidian");

module.exports = function(router) {
	router.get("/posts", function(req, res, next) {
		obsidian.model("Post").findAll({
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
		obsidian.model("Post").findById(req.params.id)
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
