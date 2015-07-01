"use strict";

module.exports = function(route) {
	route.get(function(req, res) {
		res.render("index");
	});
};
