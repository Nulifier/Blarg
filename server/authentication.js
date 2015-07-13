"use strict";

var passport		= require("passport");
var LocalStrategy	= require("passport-local");
var models			= require(__base + "/models");
var logger			= require(__base + "/log")("auth");
var Promise			= require("bluebird");

module.exports = function(app) {
	// Setup strategies
	logger.trace("Setting up strategies");
	passport.use(new LocalStrategy(
		function(username, password, done) {
			logger.info("Attempting login for user: " + username);
			var userPromise = models.User.findOne({
				username: username
			});

			var passwordPromise = userPromise.then(function(user) {
				// Check to see if they had the right username
				if (!user) {
					return done(null, false, {message: "Incorrect username."});
				}

				// Check to see if the password is correct
				return user.comparePassword(password);
			});

			Promise.join(userPromise, passwordPromise, function(user, validPassword) {
				if (!validPassword) {
					return done(null, false, {message: "Incorrect password."});
				}

				// The user exists and the password is valid
				return done(null, user);
			}).catch(function(err) {
				return done(err);
			});
		}
	));

	// Setup user serialization
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function(id, done) {
		models.User.findById(id).then(function(user) {
			done(null, user);
		}).catch(function(err) {
			done(err);
		});
	});

	// Setup middleware
	app.use(passport.initialize());
	app.use(passport.session());
};
