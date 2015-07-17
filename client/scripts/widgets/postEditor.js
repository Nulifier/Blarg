let util			= require("../util/util.js");
let beautifyHTML	= require("js-beautify").html;
let MediumEditor	= require("medium-editor");

module.exports = function(codeEditorEl, designEditorEl) {
	let editor = new MediumEditor("#design-editor", {});

	let designChangeHandler = util.throttle(function handleDesignChange() {
		codeEditorEl.value = beautifyHTML(editor.value(), {
			wrap_line_length: 0
		});
	}, 1000);

	editor.subscribe("editableInput", function(event, editable) {
		codeEditorEl.value = editable.innerHTML;
	});
};
