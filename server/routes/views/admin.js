"use strict";

module.exports = function(router) {
	var adminRoute = function(req, res) {
		res.render("admin");
	};

	router.get("/admin", adminRoute);
	router.get("/admin/*", adminRoute);
};
