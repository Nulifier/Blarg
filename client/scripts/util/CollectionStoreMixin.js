let _		= require("lodash");

module.exports = {
	init: function() {
		if (!_.isFunction(this.getInitialState)) {
			this.getInitialState = function() {
				return [];
			};
		}

		this.state = this.getInitialState();
	},
	getById: function(id) {
		return this.state.find(item => item.id === id);
	}
};
