class UsersApi {
	static findAll() {
		return fetch("/api/users")
			.then(res => res.json());
	}

	static findById(id) {
		return fetch(`/api/users/${id}`)
			.then(res => res.json());
	}
}

module.exports = UsersApi;
