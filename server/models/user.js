"use strict";

var bcrypt	= require("bcryptjs");
var Promise	= require("bluebird");

var hash = Promise.promisify(bcrypt.hash);
var compare = Promise.promisify(bcrypt.compare);

var obsidian	= require("obsidian");
var fields		= obsidian.fields;

module.exports = obsidian.defineModel({
	name: "User",
	attributes: {
		// Same attribute field as sequelize but can use precooked ones
		// Also extends with a methods object that provides underscore methods
		username: fields.String,
		email: fields.String,		// Eventually will be email
		password: fields.String,	// Eventually will be password
		firstName: fields.String,
		lastName: fields.String
	},
	classMethods: {
		associate: function(models) {
			models.User.hasMany(models.Post, {
				foreignKey: "authorId"
			});
			models.User.hasMany(models.Comment, {
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
