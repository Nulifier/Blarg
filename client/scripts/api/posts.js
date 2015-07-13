class PostsApi {
	static findAll() {
		return fetch("/api/posts")
			.then(res => res.json());
	}
}

module.exports = PostsApi;
