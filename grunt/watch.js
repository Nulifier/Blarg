"use strict";

module.exports = {
	grunt: {
		files: ["Gruntfile.js", "grunt/*.js"],
		options: {
			reload: true
		}
	},
	less: {
		files: ["server/public/**/*.less"],
		tasks: ["less"]
	},
	eslint: {
		files: [
			"server/**/*.js",
			"*.js",
			"grunt/*.js",
			"**/.eslintrc"
		],
		tasks: ["newer:eslint"]
	}
};
