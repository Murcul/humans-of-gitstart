# What's In This Document

- [Get Started in 5 Minutes](#get-started-in-5-minutes)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)

# Get Started in 5 Minutes

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ npm install
```

2. Run your dev server:

```sh
# Start the site
$ npm start
```

# Editing Content

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.mdx`

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

`blog/post-to-be-edited.mdx`

```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, click
[here](https://v2.docusaurus.io/docs/blog)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.mdx`:

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

## Contributors

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):
