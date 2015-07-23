"use strict";

var models		= require("obsidian").models;

module.exports = function(router) {
	router.get("/api/comments", function(req, res, next) {
		var limit = parseInt(req.query.limit);
		var offset = parseInt(req.query.offset);

		models.Comment.findAll({
			limit: limit,
			offset: offset
		})
		.then(function(comments) {
			res.json(comments);
		})
		.catch(function(err) {
			next(err);
		});
	});
};
