"use strict";

module.exports = {
	options: {
		paths: [
			"server/public/styles/inc"
		]
	},
	dev: {
		files: [
			{
				expand: true,
				src: ["server/public/styles/*.less"],
				dest: "server/public-build/styles",
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
				src: ["server/public/styles/*.less"],
				dest: "server/public-build/styles",
				ext: ".min.css",
				flatten: true
			}
		]
	}
};
