"use strict";

var models		= require(__base + "/models");
var MarkdownIt	= require("markdown-it");
var md			= new MarkdownIt();

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
			res.locals.renderedPost = md.render(post.content);
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
