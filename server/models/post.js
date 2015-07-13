"use strict";

module.exports = function(sequelize, DataTypes) {
	var Post = sequelize.define("Post", {
		title: DataTypes.STRING,
		state: DataTypes.ENUM("draft", "published", "archived"),
		publishedDate: DataTypes.DATE,
		content: DataTypes.TEXT
	}, {
		classMethods: {
			associate: function(models) {
				Post.belongsTo(models.User, {
					as: "author"
				});
				Post.hasMany(models.Comment, {
					foreignKey: "postId"
				});
			}
		}
	});

	return Post;
};
