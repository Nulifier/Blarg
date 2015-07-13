"use strict";

var path	= require("path");
var config	= require("./config");

module.exports = {
	main: {
		nonull: true,
		expand: true,
		src: "./node_modules/font-awesome/fonts/*",
		dest: "./server/public/fonts/",
		flatten: true
	}
};
