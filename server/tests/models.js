"use strict";

var obsidian	= require("obsidian");

module.exports = function() {
	before(function() {
		return resetDb();
	});

	describe("User", function() {
		it("should get some users", function() {
			return obsidian.model("User").findAll()
			.then(function(users) {
				users.should.not.be.empty;
			});
		});

		it("should have certain fields", function() {
			return obsidian.model("User").findAll()
			.then(function(users) {
				users.should.not.be.empty;
				var user = users[0];

				user.should.have.property("username")
					.that.is.a("string");
				user.should.have.property("email")
					.that.is.a("string");
				user.should.have.property("password")
					.that.is.a("string");
				user.should.have.property("firstName")
					.that.is.a("string");
				user.should.have.property("lastName")
					.that.is.a("string");
			});
		});

		describe("storePassword", function() {
			it("should return a hash", function() {
				return obsidian.model("User").findAll()
				.then(function(users) {
					users.should.not.be.empty;
					var user = users[0];

					var password = "Th1sisapa$$w0rd";
					return user.storePassword(password);
				})
				.then(function(hash) {
					hash.should.be.a("string");
				});
			});
		});
	});
};
