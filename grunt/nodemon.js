"use strict";

module.exports = {
	dev: {
		script: "server/main.js",
		options: {
			env: {
				PORT: 3000,
				NODE_ENV: "development"
			},
			watch: [
				"server/",
				"Gruntfile.js",
				"grunt/nodemon.js"
			],
			ignore: [
				"server/public/",
				"server/public-build/"
			]
		}
	}
};
