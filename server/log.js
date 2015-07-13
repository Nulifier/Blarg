"use strict";

var log4js = require("log4js");

log4js.configure({
	appenders: [
		{type: "console"},
		{type: "file", filename: "logs/main.log"}
	]
});

module.exports = log4js.getLogger;
