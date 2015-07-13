"use strict";

module.exports = {
	User: [
		{
			id: 1,
			username: "nulifier",
			email: "nulifier@gmail.com",
			password: "$2a$10$Dyb6JPM8J8hmKmoTEiYzAuzLPrVTUWnIrF94yUbEluhmY55Xsb4Qu",
			firstName: "Jeffrey",
			lastName: "Steward"
		}
	],
	Post: [
		{
			id: 1,
			title: "The First Post",
			state: "published",
			publishedDate: new Date(2015, 6, 1),
			content: "This is a published post and this is the content",
			authorId: 1
		},
		{
			id: 2,
			title: "A really boring post",
			state: "published",
			publishedDate: new Date(2015, 6, 2),
			content: "This is a really boring post and should have probably never been published"
		},
		{
			id: 3,
			title: "The third post",
			state: "published",
			publishedDate: new Date(2015, 6, 2),
			content: "This is a really boring post and should have probably never been published"
		},
		{
			id: 4,
			title: "The fourth post",
			state: "published",
			publishedDate: new Date(2015, 6, 2),
			content: "This is a really boring post and should have probably never been published"
		},
		{
			id: 5,
			title: "The fifth post",
			state: "published",
			publishedDate: new Date(2015, 6, 2),
			content: "This is a really boring post and should have probably never been published"
		},
		{
			id: 6,
			title: "The sixth post",
			state: "published",
			publishedDate: new Date(2015, 6, 2),
			content: "This is a really boring post and should have probably never been published"
		}
	],
	Comment: [
		{
			id: 1,
			content: "This post really sucks",
			authorId: 1,
			postId: 2
		}
	]
};
