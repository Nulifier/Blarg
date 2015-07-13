let Reflux		= require("reflux");
let PostsApi	= require("../api/posts");
let UsersApi	= require("../api/users");

let Actions = Reflux.createActions({
	load: {},			// Called when the app is loaded

	// Post Actions
	loadPosts: {asyncResult: true},
	addPost: {},
	savePost: {asyncResult: true},
	removePost: {asyncResult: true},

	// User Actions
	loadUsers: {asyncResult: true}
});

Actions.load.listen(Actions.loadPosts);
Actions.load.listen(Actions.loadUsers);

Actions.loadPosts.listenAndPromise(PostsApi.findAll);
Actions.loadUsers.listenAndPromise(UsersApi.findAll);

module.exports = Actions;
