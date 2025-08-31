import React from "react";
import { PostsList } from "../_includes/PostsList";

export const data = {
	pagination: {
		data: "collections",
		size: 1,
		alias: "tag",
		filter: ["all", "posts"],
	},
	eleventyExcludeFromCollections: true,
	eleventyComputed: {
		title: (data) => `Tagged '${data.tag}'`,
		permalink: function (data) {
			return `/tags/${this.slugify(data.tag)}/`;
		},
	},
};

export default function (data) {
	const { tag, collections, url } = data;
	const postsList = collections[tag];

	return (
		<>
			<h1>Tagged "{tag}"</h1>

			<PostsList posts={postsList} url={url} />

			<p>
				See <a href="/tags/">all tags</a>.
			</p>
		</>
	);
}
