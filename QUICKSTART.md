# Quick Start Guide

Welcome to your new learning journal! Here's how to get started.

## Viewing the Site Locally

Since this is a static site, you can view it in several ways:

1. **Simple file browser**: Just open `index.html` in your browser
2. **Local server** (recommended for accurate testing):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## Making Your First Update

### Update the "Now" Page

This should be updated monthly with what you're currently learning:

1. Open `now.html`
2. Edit the content sections
3. Update the "Last updated" date
4. Save and refresh your browser

### Add a Struggle

When you hit a learning challenge, document it:

1. Open `struggling.html`
2. Add a new card in the appropriate section
3. Be honest and specific
4. Update the "Last updated" date

### Write a New Journal Entry

You have two options:

**Option 1: Write HTML directly (more control)**
1. Create `blog/your-post-title.html`
2. Copy the structure from `blog/why-im-skipping-plus-two.html`
3. Replace the content
4. Update navigation and metadata

**Option 2: Use the Markdown generator (easier)**
1. Create `blog/posts/your-post.md`
2. Write in markdown
3. Run `node build-blog.js`
4. The HTML will be generated in `blog/your-post.html`

Note: The markdown generator is simple and may need tweaking for complex formatting.

### Add a Project

1. Open `projects.html`
2. Copy an existing `.project` div
3. Fill in your project details
4. Focus on what you learned, not just what you built

## Deploying to GitHub Pages

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Update learning journal"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Find "Pages" in the sidebar
   - Set source to "Deploy from a branch"
   - Select `main` branch and `/` (root)
   - Click Save

3. **Visit your site**:
   - GitHub will give you a URL like: `https://yourusername.github.io`
   - It may take a few minutes to deploy

## Customization Tips

### Change Colors

Edit `styles.css` at the top (`:root` section):
```css
--primary: #7A9B8E;    /* Your main color */
--accent: #D4877B;     /* Your accent color */
```

### Adjust Content Width

In `styles.css`, change:
```css
--content-width: 65ch;  /* Make wider or narrower */
```

### Update Social Links

Find and replace your GitHub/LinkedIn URLs throughout the site.

## Content Philosophy Reminders

- **Update /now monthly** — Keep it current
- **Add to /struggling as it happens** — Don't wait until things are resolved
- **Write journal entries regularly** — Aim for 2 per month (1 technical, 1 reflective)
- **Update projects as you build** — Document learning, not just accomplishments
- **Be honest > Be impressive** — This is a learning journal, not a resume

## Maintenance Schedule

- **Weekly**: Check if anything on `/now` needs updating
- **Bi-weekly**: Write a journal entry
- **Monthly**: Update `/now` page completely
- **As needed**: Add to `/struggling`, update projects

## Common Tasks

### Fix a typo
1. Find the HTML file
2. Edit directly
3. Save and refresh browser
4. Commit and push

### Remove old blog posts
1. Delete the HTML file from `blog/`
2. Remove the listing from `blog/index.html`
3. Update homepage if it's featured there

### Change the homepage intro
1. Open `index.html`
2. Find the `.hero` section
3. Edit the text
4. Keep it authentic and reflective

## Need Help?

- Check `README.md` for full documentation
- Review existing pages to see the structure
- Remember: Imperfect and published > Perfect and unpublished

---

**Most important**: This is YOUR space. Make it reflect your learning journey authentically. No one else's opinion matters.
