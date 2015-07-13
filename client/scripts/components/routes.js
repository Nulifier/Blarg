let React		= require("react");				// eslint-disable-line no-unused-vars
let Router		= require("react-router");
let Route		= Router.Route;
let Redirect	= Router.Redirect;

// Components
let AdminPanel	= require("./admin-panel");
let PostList	= require("./post-list");
let PostView	= require("./post-view");

module.exports = (
	<Route handler={AdminPanel}>
		<Redirect from="/admin" to="/admin/posts" />
		<Route name="posts" path="/admin/posts" handler={PostList} />
		<Route name="postsById" path="/admin/posts/:id" handler={PostView} />
	</Route>
);
