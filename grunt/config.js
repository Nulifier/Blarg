"use strict";

var path		= require("path");
var join		= path.join;

var c = {};

// Paths
c.rootDir				= join(__dirname, "..");		// The root folder of the project
c.logsDir				= join(c.rootDir, "logs");		// The folder with the logs in it

c.serverDir				= join(c.rootDir, "server");
c.serverMain			= join(c.serverDir, "main.js");
c.serverPort			= 3000;
c.serverEnv				= "development";

c.scriptDirPostfix		= "scripts";
c.cssDirPostfix			= "styles";
c.fontsDirPostfix		= "font";

c.clientDir				= join(c.rootDir, "client");
c.clientScriptsDir		= join(c.clientDir, c.scriptDirPostfix);
c.clientStylesDir		= join(c.clientDir, c.cssDirPostfix);

c.clientBuildDir		= join(c.serverDir, "public");
c.clientBuildScripts	= join(c.clientBuildDir, c.scriptDirPostfix);
c.clientBuildStyles		= join(c.clientBuildDir, c.cssDirPostfix);
c.clientBuildFonts		= join(c.clientBuildDir, c.fontsDirPostfix);

module.exports = c;
