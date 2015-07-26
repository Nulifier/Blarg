"use strict";

/* eslint no-process-env:0 */

var dbConfig = {
	development: {
		dialect: "sqlite",
		storage: __base + "/db.dev.sqlite"
	},
	test: {
		dialect: "sqlite",
		logging: false
	},
	production: {
		dialect: "sqlite",
		storage: __base + "/db.prod.sqlite",
		logging: false
	}
};

module.exports = {
	port: process.env.PORT || 3000,
	cookieSecret: "GpARVxCNzce5Qd9GNSCO",
	database: dbConfig[process.env.NODE_ENV || "development"]
};
