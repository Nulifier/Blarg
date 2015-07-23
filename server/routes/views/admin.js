"use strict";

var models		= require("obsidian").models;
var _			= require("lodash");
var logger		= require(__base + "/log")("routes");

module.exports = function(router) {
	router.get("/admin", function(req, res) {
		res.render("admin");
	});

	router.get("/admin/posts", function(req, res, next) {
		var validSortCols = [
			"title",
			"publishedDate"
		];

		// Parse sort query params
		var sortField = _.includes(validSortCols, req.query.sort) ? req.query.sort : null;
		var sortDirection = req.query.dir === "DESC" ? "DESC" : "ASC";

		res.locals.sortField = sortField;
		res.locals.sortDirection = sortDirection;

		models.Post.findAll({
			include: [{model: models.User, as: "author"}],
			order: sortField ? [[sortField, sortDirection]] : null
		})
		.then(function(posts) {
			res.locals.posts = posts;
			res.render("admin-posts");
		})
		.catch(function(err) {
			return next(err);
		});
	});

	router.get("/admin/posts/:id", function(req, res, next) {
		var id = parseInt(req.params.id);

		models.Post.findById(id)
		.then(function(post) {
			res.locals.post = post;
			res.render("admin-post");
		})
		.catch(function(err) {
			return next(err);
		});
	});

	router.post("/admin/posts/:id", function(req, res, next) {
		var id = parseInt(req.params.id);
		var validProperties = [
			"title",
			"state",
			"content"
		];

		var user = _.pick(req.body, validProperties);

		models.Post.update(user, {
			where: {id: id},
			fields: validProperties,
			limit: 1
		})
		.then(function(result) {
			logger.info("Number of updated posts: " + result[0]);
			res.redirect(303, "/admin/posts/" + id);
		})
		.catch(function(err) {
			return next(err);
		});
	});
};
