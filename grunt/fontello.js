var config		= require("./config");

module.exports = {
	dist: {
		options: {
			config: __dirname + "/fontello.json",
			fonts: config.clientBuildFonts,
			styles: config.clientStylesDir + "/fontello",
			force: true
		}
	}
};
