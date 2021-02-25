---
layout: post
title: "HTML Steganography"
libraries:
  - base
  - highlight.js
---
I stumbled upon [this nice little paper](https://www.ijedr.org/papers/IJEDR1402108.pdf) about [steganography](https://en.wikipedia.org/wiki/Steganography) (the art of hiding a message inside within another message) using HTML documents.

It describes a few ways to conceal information:

1. Changing order of HTML attributes
2. Including invisible characters (e.g. null space or white space)
3. Modifying the case of letters in HTML tags
4. Adding id tags containing encoded information

My personal favorite is **#3**, editing the case of letters in HTML tags, because:

- It doesn't change the size of the HTML document
- You can't see it if you just open the DOM in your browser, you need to open the source code
- It's easy to code, and I'm lazy
- It looks like the rEtArDeD meme

The obvious limitation is that you need a HTML document big enough to contain your message.

A basic implementation would work like this:

{% include svg.html src="html_steganography.svg" %}

Here is a demo of this algorithm (if it breaks on edge cases, it just means I'm not a good developer):

<script src="/assets/js/html-steganography.js"></script>
{% include encode_decode.html %}

Does it have any real-world application ? Probably not.

Is it cool ? Yes.
