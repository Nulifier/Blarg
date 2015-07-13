let React		= require("react");
let Reflux		= require("reflux");
let PostsStore	= require("../stores/posts");
let _			= require("lodash");

let PostView = React.createClass({
	displayName: "PostView",
	mixins: [
		Reflux.connect(PostsStore, "posts")
	],
	render: function() {
		let post = _.find(this.state.posts, (post) => post.id === parseInt(this.props.params.id));
		console.log(this.props);
		console.log(this.state);
		console.log(post);
		if (post) {
			return (
				<div>
					<h2>{post.title}</h2>
					<div>{post.content}</div>
				</div>
			);
		}
		else {
			return (
				<p>Invalid post.</p>
			);
		}
	}
});

module.exports = PostView;
