import React from "react";
import { PostsList } from "../_includes/PostsList";

export const data = {
	eleventyNavigation: {
		key: "Archive",
		order: 2,
	},
};

export default function (data) {
	const { collections } = data;

	return (
		<>
			<h1>Archive</h1>

			<PostsList posts={collections?.posts} />
		</>
	);
}
