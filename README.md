[![Humans of GitStart][repo_logo_img]][repo_url]

# ⚡️ Get Started in 5 Minutes

1. Make sure all the dependencies are installed (use you fav package manager)

```sh
# Install dependencies
$ npm install
```

2. Run your dev server:

```sh
# Start the site
$ npm start
```
---

# 🖋️ Editing Content

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:
`docs/gitstart.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://v2.docusaurus.io/docs)

## Editing an existing blog post

Edit blog posts by navigating to `blog` and editing the corresponding post:
`blog/gitstart.md`

```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, click
[here](https://v2.docusaurus.io/docs/blog)

---

# 📑 Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/gitstart.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

Note: Ensure the file name and the id value do not include non-url safe
characters i.e. '\*'.

2. Refer to that doc's ID in an existing sidebar in `sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click
[here](https://v2.docusaurus.io/docs/)

---

## 🚚 Configuration

1. Everything is managed via `docusaurus.config.ts`
2. Index are managed via `_category_.json` in each folder


<!-- Main -->

[repo_url]: https://github.com/Murcul/humans-of-gitstart
[repo_logo_img]: https://humansof.gitstart.com/img/gs-ogimage-readme.png
