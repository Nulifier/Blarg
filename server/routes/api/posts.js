"use strict";

var obsidian		= require("obsidian");

module.exports = function(router) {
	router.get("/api/posts", function(req, res, next) {
		var limit = parseInt(req.query.limit);
		var offset = parseInt(req.query.offset);

		obsidian.model("Post").findAll({
			limit: limit,
			offset: offset
		})
		.then(function(posts) {
			res.json(posts);
		})
		.catch(function(err) {
			return next(err);
		});
	});

	router.get("/api/posts/:id", function(req, res, next) {
		var id = parseInt(req.params.id);

		if (!id) {
			throw new Error("Id must be a number");
		}

		obsidian.model("Post").findById(id)
		.then(function(post) {
			if (post) {
				res.json(post);
			}
			else {
				res.sendStatus(404);
			}
		})
		.catch(function(err) {
			return next(err);
		});
	});

	router.get("/api/posts/:id/comments", function(req, res, next) {
		var id = parseInt(req.params.id);

		models.Comment.findAll({
			where: {
				postId: id
			}
		})
		.then(function(comments) {
			res.json(comments);
		})
		.catch(function(err) {
			return next(err);
		});
	});
};
