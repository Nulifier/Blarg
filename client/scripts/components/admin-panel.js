let React			= require("react");
let Router			= require("react-router");
let RouteHandler	= Router.RouteHandler;
let Link			= Router.Link;

let AdminPanel = React.createClass({
	displayName: "AdminPanel",
	render: function() {
		return (
			<div>
				<div className="col span_2_of_3">
					<RouteHandler />
				</div>
				<div className="col span_1_of_3">
					<ul className="sidebar-nav">
						<li className="nav-label">Content</li>
						<li><Link to="posts">Posts</Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = AdminPanel;
