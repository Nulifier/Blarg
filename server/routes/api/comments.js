"use strict";

var obsidian	= require("obsidian");

module.exports = function(router) {
	router.get("/api/comments", function(req, res, next) {
		var limit = parseInt(req.query.limit);
		var offset = parseInt(req.query.offset);

		obsidian.model("Comment").findAll({
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
