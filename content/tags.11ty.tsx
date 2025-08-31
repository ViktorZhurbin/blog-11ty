import React from "react";
import { sortAlphabetically } from "../utils/collections";
import { filterTagList } from "../utils/filterTagList";

export default function (data) {
	const { collections } = data;

	const filteredTags = filterTagList(Object.keys(collections));
	const sortedTags = sortAlphabetically(filteredTags);

	return (
		<>
			<h1>Tags</h1>

			<ul>
				{sortedTags.map((tag) => {
					const tagUrl = `/tags/${this.slugify(tag)}/`;
					return (
						<li key={tag}>
							<a href={tagUrl} style={{ textTransform: "capitalize" }}>
								{tag}
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}
