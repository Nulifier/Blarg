"use strict";

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: DataTypes.STRING,
		firstNamae: DataTypes.STRING,
		lastName: DataTypes.STRING
	});

	return User;
};
