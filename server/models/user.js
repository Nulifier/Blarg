"use strict";

var bcrypt	= require("bcryptjs");
var Promise	= require("bluebird");

var hash = Promise.promisify(bcrypt.hash);
var compare = Promise.promisify(bcrypt.compare);

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: {type: DataTypes.STRING, unique: true},
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				User.hasMany(models.Post, {
					foreignKey: "authorId"
				});
				User.hasMany(models.Comment, {
					foreignKey: "authorId"
				});
			}
		},
		instanceMethods: {
			storePassword: function(password) {
				// Make sure there is a password to hash in the user
				if (typeof password !== "string") {
					throw new Error("Password must be a string");
				}

				return hash(password, 10);
			},
			comparePassword: function(password) {
				return compare(password, this.password);
			}
		}
	});

	return User;
};
