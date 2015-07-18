"use strict";

var passport	= require("passport");

module.exports = function(router) {
	router.get("/login", function(req, res) {
		res.render("login", {user: req.user});
	});

	router.post("/login", passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login"
	}));
};
