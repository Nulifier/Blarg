let Reflux					= require("reflux");
let Actions					= require("../actions");
let CollectionStoreMixin	= require("../util/CollectionStoreMixin");

var UsersStore = Reflux.createStore({
	mixins: [CollectionStoreMixin],
	listenables: Actions,
	onLoadUsersCompleted: function(users) {
		this.setState(users);
	}
});

window.UsersStore = UsersStore;

module.exports = UsersStore;
