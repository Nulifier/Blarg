let React		= require("react");
let Reflux		= require("reflux");
let Link		= require("react-router").Link;
let PostsStore	= require("../stores/posts");
let UsersStore	= require("../stores/users");
let _			= require("lodash");

let PostList = React.createClass({
	displayName: "PostList",
	mixins: [
		Reflux.connect(PostsStore, "posts"),
		Reflux.connect(UsersStore, "users")
	],
	render: function() {
		let rows = this.state.posts.map(post => {
			let author = _.find(this.state.users, user => user.id === post.authorId);
			return (
				<tr key={post.id}>
					<td>{post.title}</td>
					<td>{author ? author.firstName : ""}</td>
					<td><Link to="postsById" params={{id: post.id}} title="Edit" className="fa fa-edit" /></td>
				</tr>
			);
		});

		return (
			<table>
				<thead>
					<tr>
						<td>Title</td>
						<td>Author</td>
						<td>Edit</td>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});

module.exports = PostList;
