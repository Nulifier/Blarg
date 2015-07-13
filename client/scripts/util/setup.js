let Reflux		= require("reflux");

Reflux.StoreMethods.setState = function(state) {
	this.state = state;
	this.triggerAsync(this.state);
};
