# KHOI | Eleventy Blog

## Aims

A blog that still runs without javascript. Hence, no bundlers.

## Features

- Static Site Gen - Eleventy

- Tailwind CSS

- Create excerpts using the `<!-- excerpt -->`

- Custom ReadTime filter

* Tags page to view posts related to tag

  - Use of a `tagList` collection defined in `.eleventy.js`
  - `/tags` - show all available tags (excluding all and posts) as buttons (`tags.md`)
  - `/tags/tag-name` - shows all posts related to that tag (`tagList.md`)

* Sitemap and Robots.txt

  - Change site url in `_data/site.json`

* Shortcode to handle images
  - Add image under `src/assets/img/posts` and use the asset_img short code
  - `{% asset_img 'filename' 'alt_text' %}` eg. `{% asset_img 'mailbox.jpg' 'mailbox' %}`

- Draft posts using the `published` frontmatter

* Posts pagination in `index.html`
  - change the `size` frontmatter variable

- ESLint

* Bash script to create new post (based on YYYY and MM)

```bash
$ ./create new blog post
Created new post at src/posts/2021/01/new-blog-post.md
```

## Running locally

Create your blogpost under `src/posts`. I like to have mine sorted by YY/MM.

Navigate to localhost:8080 after starting the server.

```
pnpm start
```

## Deployment

Build Command: `pnpm build`

Output folder: `_site`
