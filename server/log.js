"use strict";

var log4js = require("log4js");

log4js.configure({
	appenders: [
		{type: "console"},
		{type: "file", filename: "logs/main.log"}
	]
});

log4js.setGlobalLogLevel("ALL");

module.exports = log4js.getLogger;
