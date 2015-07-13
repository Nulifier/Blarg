let Reflux					= require("reflux");
let Actions					= require("../actions");
let CollectionStoreMixin	= require("../util/CollectionStoreMixin");

var PostsStore = Reflux.createStore({
	mixins: [CollectionStoreMixin],
	listenables: Actions,
	onLoadPostsCompleted: function(posts) {
		this.setState(posts);
	}
});

window.PostsStore = PostsStore;

module.exports = PostsStore;
