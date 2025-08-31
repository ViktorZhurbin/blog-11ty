import React from "react";
import { getHtmlDateString, getReadableDate } from "../utils/dateTime";

interface Post {
	url: string;
	date: Date;
	data: {
		title?: string;
	};
}

interface PostsListProps {
	posts?: Post[];
	postsCount?: number;
	url?: string;
}

export function PostsList({ posts = [], postsCount, url }: PostsListProps) {
	const reversedPosts = [...posts].reverse();
	const listIndex = (postsCount || posts.length) + 1;

	return (
		<ol
			reversed
			className="postlist"
			style={{ "--postlist-index": listIndex } as React.CSSProperties}
		>
			{reversedPosts.map((post) => (
				<li
					key={post.url}
					className={`postlist-item${
						post.url === url ? " postlist-item-active" : ""
					}`}
				>
					<a href={post.url} className="postlist-link">
						{post.data.title ? post.data.title : <code>{post.url}</code>}
					</a>
					<time
						className="postlist-date"
						dateTime={getHtmlDateString(post.date)}
					>
						{getReadableDate({ date: post.date, format: "LLLL yyyy" })}
					</time>
				</li>
			))}
		</ol>
	);
}
