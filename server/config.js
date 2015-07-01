"use strict";

/* eslint no-process-env:0 */

module.exports = {
	port: process.env.PORT || 3000,
	database: {
		dialect: "sqlite",
		storage: __base + "/db.devel.sqlite"
	}
};
