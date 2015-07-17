"use strict";

var log4js	= require("log4js");
var fs		= require("fs");

// Make sure the directory exists before writing
if (!fs.existsSync("logs")) {
	fs.mkdirSync("logs");
}

log4js.configure({
	appenders: [
		{type: "console"},
		{type: "file", filename: "logs/main.log"}
	]
});

module.exports = log4js.getLogger;
