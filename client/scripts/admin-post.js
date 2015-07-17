let util			= require("./util/util.js");
let postEditor		= require("./widgets/postEditor");
let tabWidget		= require("./widgets/tabs");

util.ready(function() {
	// Setup the tabs
	tabWidget(document.querySelector(".tab-container"));

	// Setup the editor
	postEditor("#code-editor", "#design-editor");
});
