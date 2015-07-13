"use strict";

var logger		= require(__base + "/log")("index");

module.exports = function(router) {
	router.get("/", function(req, res) {
		logger.info("Index visited by: " + req.user);
		res.render("index", {user: req.user});
	});
};
