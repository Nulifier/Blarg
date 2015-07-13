require("./util/setup");
let React			= require("react");
let Router			= require("react-router");
let Routes			= require("./components/routes");
let Actions			= require("./actions");

Actions.load();

Router.run(Routes, Router.HistoryLocation, (Root) => {
	React.render(<Root />, document.getElementById("panel"));
});

window.React = React;
