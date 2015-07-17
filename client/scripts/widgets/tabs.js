let util	= require("../util/util.js");

module.exports = function(tabContainerEl) {
	let tabLabels = tabContainerEl.querySelectorAll(".tab-labels li");
	let tabs = tabContainerEl.querySelectorAll(".tab");

	util.arrayForEach(tabLabels, function(label, index) {
		label.addEventListener("click", function(e) {
			let activeLabel = e.target;

			// Check if this tab is already active
			if (!util.hasClass(activeLabel, "active")) {
				// Deactive the previously active tabs and labels
				let inactive = tabContainerEl.querySelectorAll(".tab-labels li.active, .tab.active");
				util.arrayForEach(inactive, function(el) {
					util.removeClass(el, "active");
				});

				// Activate the newly active label
				util.addClass(activeLabel, "active");

				// Active the tab at the correct index, if there are enough tabs
				if (tabs.length > index) {
					util.addClass(tabs[index], "active");
				}
			}
		});
	});
};
