import slugify from "@sindresorhus/slugify";
import { DateTime } from "luxon";
import React from "react";
import { getPreviousCollectionItem, getNextCollectionItem } from "../../utils/getCollectionItem";

export const data = {
  layout: "layouts/base.njk"
};

export default function(data) {
  const { title, page, tags, content, collections } = data;

  // Filter tag list (equivalent to filterTagList filter)
  const filteredTags = tags?.filter(tag => ["all", "posts"].indexOf(tag) === -1) ?? [];

  // Get previous/next posts
  const posts = collections?.posts || [];
  const previousPost = getPreviousCollectionItem(posts, page);
  const nextPost = getNextCollectionItem(posts, page);

  return (
    <>
      <link rel="stylesheet" href="/css/prism-vsc-dark-plus.css" />
      <link rel="stylesheet" href="/css/prism-diff.css" />

      <h1>{title}</h1>

      <ul className="post-metadata">
        <li>
          <time dateTime={DateTime.fromJSDate(page.date, { zone: "utc" }).toFormat('yyyy-LL-dd')}>
            {DateTime.fromJSDate(page.date, { zone: page.zone || "utc" }).toFormat("dd LLLL yyyy")}
          </time>
        </li>
        {filteredTags.map((tag, index) => (
          <li key={tag}>
            <a href={`/tags/${slugify(tag || title)}`} className="post-tag">
              {tag}
            </a>
            {index < filteredTags.length - 1 && ', '}
          </li>
        ))}
      </ul>

      <div dangerouslySetInnerHTML={{ __html: content }} />

      {(nextPost || previousPost) && (
        <ul className="links-nextprev">
          {previousPost && (
            <li className="links-nextprev-prev">
              ← Previous<br />
              <a href={previousPost.url}>{previousPost.data.title}</a>
            </li>
          )}
          {nextPost && (
            <li className="links-nextprev-next">
              Next →<br />
              <a href={nextPost.url}>{nextPost.data.title}</a>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
