"use strict";

/* eslint no-process-env:0 */

var devEnv = process.env.NODE_ENV === "development";

module.exports = {
	port: process.env.PORT || 3000,
	cookieSecret: "GpARVxCNzce5Qd9GNSCO",
	database: {
		dialect: "sqlite",
		storage: __base + "/db.devel.sqlite",
		logging: devEnv ? null : false
	}
};
