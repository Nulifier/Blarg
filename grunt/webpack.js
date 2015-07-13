"use strict";

var glob	= require("glob");
var _		= require("lodash");
var webpack	= require("webpack");
var path	= require("path");
var config	= require("./config");

// Find all the entry points
var srcEntryPoints = glob.sync("*.js", {
	cwd: config.clientScriptsDir
});

var entryPoints = {};
_.forEach(srcEntryPoints, function(entryPoint) {
	var chunkName = entryPoint.substr(0, entryPoint.lastIndexOf(".js"));
	entryPoints[chunkName] = path.join(config.clientScriptsDir, entryPoint);
});

module.exports = {
	dev: {
		entry: entryPoints,
		output: {
			path: config.clientBuildScripts,
			filename: "[name].js",
			sourceMap: "[name].js.map",
			publicPath: "/" + config.scriptDirPostfix + "/",
			pathinfo: true
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: "commons",
				filename: "[name].js"
			}),
			new webpack.ProvidePlugin({
				fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
			}),
			function() {
				this.plugin("done", function(stats) {
					console.log(stats.toJson);
					require("fs").writeFileSync(	// eslint-disable-line no-sync
						path.join(__dirname, "../logs/", "webpack-stats.json"),
						JSON.stringify(stats.toJson()));
				});
			}
		],
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: "babel?cacheDirectory"
				}
			]
		},
		resolve: {
			alias: {
				underscore: "lodash"
			}
		},
		devtool: "source-map",
		cache: true
	},
	prod: {
		entry: entryPoints,
		output: {
			path: config.clientBuildScripts,
			filename: "[name].min.js",
			sourceMap: "[name].min.js.map",
			publicPath: "/" + config.scriptDirPostfix + "/"
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: "commons",
				filename: "[name].min.js"
			}),
			new webpack.ProvidePlugin({
				fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
			}),
			new webpack.optimize.UglifyJsPlugin()
		],
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: "babel"
				}
			]
		},
		resolve: {
			alias: {
				underscore: "lodash"
			}
		},
		devtool: "source-map"
	}
};
