"use strict";

module.exports = function(sequelize, DataTypes) {
	var Comment = sequelize.define("Comment", {
		content: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Comment.belongsTo(models.User, {
					as: "author"
				});
				Comment.belongsTo(models.Post, {
					as: "post"
				});
			}
		}
	});

	return Comment;
};
