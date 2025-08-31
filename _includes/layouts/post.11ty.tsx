import React from "react";
import { getHtmlDateString, getReadableDate } from "../../utils/dateTime";
import { filterTagList } from "../../utils/filterTagList";

export const data = {
	layout: "layouts/base.njk",
};

export default function (data) {
	const { title, page, content, collections } = data;

	const filteredTags = filterTagList(data.tags);

	const posts = collections?.posts || [];
	const previousPost = this.getPreviousCollectionItem(posts, page);
	const nextPost = this.getNextCollectionItem(posts, page);

	return (
		<>
			<link rel="stylesheet" href="/css/prism-vsc-dark-plus.css" />
			<link rel="stylesheet" href="/css/prism-diff.css" />

			<h1>{title}</h1>

			<ul>
				<li>
					<time dateTime={getHtmlDateString(page.date)}>
						{getReadableDate({
							date: page.date,
							zone: page.zone,
						})}
					</time>
				</li>
				{filteredTags.map((tag, index) => (
					<li key={tag}>
						<a href={`/tags/${this.slugify(tag || title)}`}>{tag}</a>
						{index < filteredTags.length - 1 && ", "}
					</li>
				))}
			</ul>

			<div dangerouslySetInnerHTML={{ __html: content }} />

			{(nextPost || previousPost) && (
				<ul>
					{previousPost && (
						<li>
							← Previous
							<br />
							<a href={previousPost.url}>{previousPost.data.title}</a>
						</li>
					)}
					{nextPost && (
						<li>
							Next →<br />
							<a href={nextPost.url}>{nextPost.data.title}</a>
						</li>
					)}
				</ul>
			)}
		</>
	);
}
