let util			= require("../util/util.js");
let beautifyHTML	= require("js-beautify").html;
let MediumEditor	= require("medium-editor");

module.exports = function(codeEditorSel, designEditorSel) {
	let codeEditorEl = document.querySelector(codeEditorSel);
	let editor = new MediumEditor(designEditorSel, {});

	editor.subscribe("editableInput", util.throttle(function(event, editable) {
		codeEditorEl.value = beautifyHTML(editable.innerHTML, {
			wrap_line_length: 0		// eslint-disable-line camelcase
		});
	}, 1000));
};
