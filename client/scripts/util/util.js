let throttle	= require("lodash.throttle");

let util = {
	ready: function ready(fn) {
		// Check if the page is already loaded
		if (document.readyState !== "loading") {
			fn();
		}
		else {
			document.addEventListener("DOMContentLoaded", fn);
		}
	},

	hasClass: function hasClass(el, className) {
		if (el.classList) {
			return el.classList.contains(className);
		}
		else {
			return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
		}
	},

	addClass: function addClass(el, className) {
		if (el.classList) {
			el.classList.add(className);
		}
		else {
			el.className += " " + className;
		}
	},

	removeClass: function removeClass(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		}
		else {
			el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		}
	},

	matches: function matches(el, selector) {
		return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
	},

	closest: function closest(el, selector) {
		// Iterate up the DOM tree, starting with this node
		for (let node = el; node && node !== document; node = node.parentNode) {
			// Check if the current node matches our selector
			if (util.matches(node, selector)) {
				return node;
			}
		}
	},

	arrayForEach: function arrayForEach(arr, fn) {
		Array.prototype.forEach.call(arr, fn);
	},

	throttle: throttle
};

module.exports = util;
