"use strict";

var path		= require("path");
var config		= require("./config");

module.exports = {
	options: {
		paths: [
			path.join(config.clientStylesDir, "inc"),
			path.join(__dirname, "../node_modules")
		]
	},
	dev: {
		files: [
			{
				expand: true,
				src: [config.clientStylesDir + "/*.less"],
				dest: config.clientBuildStyles,
				ext: ".css",
				flatten: true
			}
		]
	},
	prod: {
		options: {
			plugins: [
				new (require("less-plugin-clean-css"))({})
			]
		},
		files: [
			{
				expand: true,
				src: [config.clientStylesDir + "/*.less"],
				dest: config.clientBuildStyles,
				ext: ".min.css",
				flatten: true
			}
		]
	}
};
