"use strict";

var models		= require("obsidian").models;

var safeUserAttributes = [
	"id",
	"username",
	"firstName",
	"lastName"
];

module.exports = function(router) {
	router.get("/api/users", function(req, res, next) {
		var limit = parseInt(req.query.limit);
		var offset = parseInt(req.query.offset);

		models.User.findAll({
			limit: limit,
			offset: offset,
			attributes: safeUserAttributes
		})
		.then(function(users) {
			res.json(users);
		})
		.catch(function(err) {
			return next(err);
		});
	});

	router.get("/api/users/:id", function(req, res, next) {
		var id = parseInt(req.params.id);

		if (!id) {
			throw new Error("Id must be a number");
		}

		models.User.findById(id, {attributes: safeUserAttributes})
		.then(function(user) {
			if (user) {
				res.json(user);
			}
			else {
				res.sendStatus(404);
			}
		})
		.catch(function(err) {
			return next(err);
		});
	});
};
