# Kabir Nahata — Learning Journal

A calm, reflective personal website documenting my self-directed computer science education journey.

## Philosophy

This isn't a portfolio site or a résumé—it's a learning journal. A space to reflect, document struggles, and share progress honestly. Learning > credentials. Reflection > hype. Growth journal, not highlight reel.

## Structure

```
├── index.html              # Homepage with hero, journey, learning pillars, courses
├── now.html                # Current learning snapshot (/now page)
├── projects.html           # Growth-focused project showcase
├── struggling.html         # Honest reflections on learning challenges
├── blog/                   # Journal entries
│   ├── index.html          # Blog index
│   ├── posts/              # Markdown source files
│   │   └── *.md
│   └── *.html              # Generated HTML posts
├── styles.css              # Shared styles (typography-first, calm palette)
└── build-blog.js           # Markdown to HTML generator
```

## Design Principles

- **Typography-first**: Generous whitespace, ~65ch line width for optimal reading
- **Calm palette**: Muted sage green (#7A9B8E) + warm terracotta (#D4877B)
- **Mobile-first responsive**: Clean on all devices
- **Static HTML + CSS**: No frameworks, minimal JavaScript
- **GitHub Pages ready**: Deploy anywhere

## Writing New Blog Posts

1. Create a new markdown file in `blog/posts/`:
   ```bash
   touch blog/posts/my-new-post.md
   ```

2. Write your post in markdown:
   ```markdown
   # Post Title
   
   First paragraph will be used as excerpt...
   
   ## Subheading
   
   Content here...
   ```

3. Generate HTML from markdown:
   ```bash
   node build-blog.js
   ```

4. The HTML will be created in `blog/my-new-post.html` with full styling

## Development

No build process required for regular updates. Just edit HTML/CSS directly.

For blog posts, use the markdown workflow above.

## Deployment

This site is designed for GitHub Pages:

1. Push to GitHub
2. Enable Pages in repository settings
3. Deploy from main branch

That's it. No build step, no CI/CD needed.

## Maintenance

- Update `/now` page regularly (monthly snapshot)
- Add to `/struggling` as challenges arise (honesty over polish)
- Write journal entries consistently (aim: 2 per month)
- Update projects as you build

## Philosophy on Content

- **Learning over credentials**: Focus on what you're understanding, not collecting certificates
- **Reflection over announcement**: Write to think, not to impress
- **Honesty over perfection**: Share struggles, not just wins
- **Process over outcome**: Document the journey, messy as it is

## License

Content is personal and not licensed for reuse. Code/structure can be used as reference.

---

Built with intention, not perfection.  
Last updated: January 2025
