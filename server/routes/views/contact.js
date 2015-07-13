"use strict";

module.exports = function(router) {
	router.get("/contact", function(req, res) {
		res.render("contact");
	});
};
