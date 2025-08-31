import React from "react";

export const data = {
	layout: "layouts/base.njk",
};

export default function (data) {
	const { content } = data;

	return (
		<>
			<div>
				<ol>
					<li>Edit <code>_data/metadata.js</code> with your blog's information.</li>
					<li>(Optional) Edit <code>eleventy.config.js</code> with your <a href="https://www.11ty.dev/docs/config/">configuration preferences</a>.</li>
					<li>Delete this message from <code>_includes/layouts/home.njk</code>.</li>
				</ol>
				<p><em>This is an <a href="https://www.11ty.dev/">Eleventy project</a> created from the <a href="https://github.com/11ty/eleventy-base-blog"><code>eleventy-base-blog</code> repo</a>.</em></p>
			</div>

			<div dangerouslySetInnerHTML={{ __html: content }} />
		</>
	);
}
