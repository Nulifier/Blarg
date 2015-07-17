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
			content: "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>\n<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>\n<p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One</p>",
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
