"use strict";

var _			= require("lodash");

// This is a fake router that just returns the handlers in an object
module.exports = function fakeRouter(routes) {
	function routerFunc(methodName) {
		return function(path, handler) {
			if (!_.isPlainObject(routes[path])) {
				routes[path] = {};
			}
			if (!_.isArray(routes[path][methodName])) {
				routes[path][methodName] = [];
			}
			routes[path][methodName].push(handler);
		};
	}
	return {
		get: routerFunc("get"),
		put: routerFunc("put"),
		post: routerFunc("post"),
		delete: routerFunc("delete")
	};
};
