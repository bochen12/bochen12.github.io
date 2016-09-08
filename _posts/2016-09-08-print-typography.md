---
layout: post
title: Typesetting pdf with html and css
category: other
---

This is how I create pdf files from markdown using [Prince](http://www.princexml.com).

1. Convert markdown to html using kramdown, pandoc, or online. Boilerplate not necessary.
2. Create custum css-file. Here is [my template](http://www.bochen.dk/public/css/paged-media.css).
3. Run Prince:

        prince -o paged-media.css file.html
