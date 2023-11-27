const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginTOC = require("eleventy-plugin-nesting-toc");

module.exports = function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginTOC, { tags: ["h1", "h2", "h3"] });

	// To enable merging of tags
	eleventyConfig.setDataDeepMerge(true);

	// Copy these static files to _site folder
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/manifest.json");

	// To create excerpts
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_alias: "post_excerpt",
		excerpt_separator: "<!-- excerpt -->",
	});

	// To create a filter to determine duration of post
	eleventyConfig.addFilter("readTime", (value) => {
		const content = value;
		const textOnly = content.replace(/(<([^>]+)>)/gi, "");
		const readingSpeedPerMin = 450;
		return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin));
	});

	// Enable us to iterate over all the tags, excluding posts and all
	eleventyConfig.addCollection("tagList", (collection) => {
		const tagsSet = new Set();
		collection.getAll().forEach((item) => {
			if (!item.data.tags) return;
			item.data.tags
				.filter((tag) => !["posts", "all"].includes(tag))
				.forEach((tag) => tagsSet.add(tag));
		});
		return Array.from(tagsSet).sort();
	});

	const md = markdownIt({ html: true, linkify: true, typographer: true });
	md.use(markdownItAnchor, {
		level: [1, 2],
		permalink: markdownItAnchor.permalink.headerLink({
			safariReaderFix: true,
			class: "header-anchor",
		}),
	});
	eleventyConfig.setLibrary("md", md);

	// asset_img shortcode
	eleventyConfig.addLiquidShortcode("asset_img", (filename, alt) => {
		return `<img loading="lazy" width="580" height="300" class="w-full object-cover rounded-lg my-4" src="/assets/images/posts/${filename}" alt="${alt}" />`;
	});

	// newtab_link shortcode
	eleventyConfig.addLiquidShortcode("newtab_link", (href, text) => {
		return `<a href="${href}" target="_blank">${text}</a>`;
	});

	return {
		dir: {
			input: "src",
		},
	};
};
