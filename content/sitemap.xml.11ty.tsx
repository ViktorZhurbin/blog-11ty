import { getHtmlDateString } from "../utils/dateTime";
import { getBaseUrl } from "../utils/urls";

export const data = {
	permalink: "/sitemap.xml",
	layout: false,
	eleventyExcludeFromCollections: true,
};

export default function (data) {
	const { collections, metadata } = data;
	const allPages = collections.all || [];

	const validPages = allPages.filter((page) => page.data.permalink !== false);

	const urlEntries = validPages
		.map((page) => {
			const absoluteUrl = getBaseUrl(page.url, metadata.url);
			const lastmod = getHtmlDateString(page.date);

			return `\t\t<url>
\t\t\t<loc>${absoluteUrl}</loc>
\t\t\t<lastmod>${lastmod}</lastmod>
\t\t</url>`;
		})
		.join("\n");

	return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;
}
