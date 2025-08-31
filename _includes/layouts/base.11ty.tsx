import React from "react";

export default function (data) {
	const { title, description, content, metadata, collections, page, eleventy } =
		data;

	// Get navigation items using eleventyNavigation filter
	const navigationItems = this.eleventyNavigation(collections.all);

	return (
		<html lang={metadata.language}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="color-scheme" content="light dark" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.blue.min.css"
				/>

				<title>{title || metadata.title}</title>
				<meta
					name="description"
					content={description || metadata.description}
				/>
				<link
					rel="alternate"
					href="/feed/feed.xml"
					type="application/atom+xml"
					title={metadata.title}
				/>

				{/* Render the CSS bundle using inlined CSS */}
				{/* <style dangerouslySetInnerHTML={{ __html: this.getBundle("css") }} /> */}

				{/* Add the heading-anchors web component */}
				<script
					type="module"
					src="https://cdn.jsdelivr.net/npm/@zachleat/heading-anchors@1.0.3/heading-anchors.js"
				/>
			</head>
			<body>
				<a href="#main" id="skip-link" className="visually-hidden">
					Skip to main content
				</a>

				<header>
					<a href="/" className="home-link">
						{metadata.title}
					</a>

					<nav>
						<h2 className="visually-hidden">Top level navigation menu</h2>
						<ul className="nav">
							{navigationItems.map((entry) => (
								<li key={entry.url} className="nav-item">
									<a
										href={entry.url}
										{...(entry.url === page.url && { "aria-current": "page" })}
									>
										{entry.title}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</header>

				<main id="main">
					{/* @ts-expect-error: custom html element */}
					<heading-anchors>
						<div dangerouslySetInnerHTML={{ __html: content }} />
						{/* @ts-expect-error: custom html element */}
					</heading-anchors>
				</main>

				<footer>
					<p>
						<em>
							Built with{" "}
							<a href="https://www.11ty.dev/">{eleventy.generator}</a>
						</em>
					</p>
				</footer>

				{/* This page was built on currentBuildDate */}
				{/* Comment: This page `{page.url}` was built on {this.currentBuildDate()} */}
				{/* <script type="module" src={this.getBundleFileUrl("js")} /> */}
			</body>
		</html>
	);
}
