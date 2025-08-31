import React from "react";
import { PostsList } from "../_includes/PostsList";

export const data = {
	layout: "layouts/home.11ty.tsx",
	eleventyNavigation: {
		key: "Home",
		order: 1,
	},
	numberOfLatestPostsToShow: 3,
};

export default function (data) {
	const { collections, numberOfLatestPostsToShow } = data;
	const posts = collections?.posts || [];

	const postsCount = posts.length;
	const latestPostsCount = Math.min(postsCount, numberOfLatestPostsToShow);
	const postsList = posts.slice(-numberOfLatestPostsToShow);
	const morePosts = postsCount - numberOfLatestPostsToShow;

	return (
		<>
			<h1>
				Latest {latestPostsCount} Post{latestPostsCount !== 1 ? "s" : ""}
			</h1>

			<PostsList posts={postsList} postsCount={postsCount} />

			{morePosts > 0 && (
				<p>
					{morePosts} more post{morePosts !== 1 ? "s" : ""} can be found in{" "}
					<a href="/blog/">the archive</a>.
				</p>
			)}
		</>
	);
}
