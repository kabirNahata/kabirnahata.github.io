# Deployment Checklist

## Pre-Deployment Verification

### ✅ Files Complete
- [x] Homepage (`index.html`)
- [x] Now page (`now.html`)
- [x] Projects page (`projects.html`)
- [x] Struggling page (`struggling.html`)
- [x] Blog index (`blog/index.html`)
- [x] First blog post (`blog/why-im-skipping-plus-two.html`)
- [x] Global styles (`styles.css`)
- [x] Blog generator (`build-blog.js`)
- [x] Documentation (`README.md`, `QUICKSTART.md`, `CHANGELOG.md`)

### ✅ Content Review
- [x] All internal links use relative paths
- [x] External links open in new tabs (`target="_blank"`)
- [x] Navigation consistent across all pages
- [x] Footer present on all pages
- [x] Mobile responsive design implemented
- [x] Accessibility features included

### ✅ Branding & Copy
- [x] Personal voice and tone throughout
- [x] No placeholder text remaining
- [x] Social links updated (GitHub, LinkedIn)
- [x] Dates current and accurate
- [x] Honest and reflective content

## Deployment Steps

### 1. Local Testing
```bash
# Start local server
python3 -m http.server 8000

# Visit in browser
open http://localhost:8000

# Test navigation flow:
# - Home → Journal → Individual post → Back
# - Home → Projects
# - Home → Now
# - Home → Struggling
# - Check all footer links
# - Test on mobile viewport
```

### 2. Commit Changes
```bash
# Check what's changed
git status

# Add all files
git add .

# Commit with descriptive message
git commit -m "Complete redesign: Transform into calm learning journal

- Add Now, Projects, and Struggling pages
- Redesign homepage with journey narrative and learning pillars
- Implement typography-first design with calm color palette
- Add markdown-based blog system with static generator
- Create comprehensive documentation and guides"

# Push to GitHub
git push origin main
```

### 3. Enable GitHub Pages
1. Go to repository settings: `https://github.com/kabirNahata/kabirnahata.github.io/settings`
2. Navigate to "Pages" in the sidebar
3. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
4. Click "Save"
5. Wait 1-2 minutes for deployment
6. Visit: `https://kabirnahata.github.io`

### 4. Post-Deployment Verification
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] CSS styles are applied
- [ ] Images load (if any added)
- [ ] Blog posts are accessible
- [ ] Mobile view looks good
- [ ] No 404 errors in browser console

### 5. Share & Document
- [ ] Update LinkedIn with new website link
- [ ] Update GitHub profile README if applicable
- [ ] Consider first social media post: "Redesigned my website into a learning journal..."
- [ ] Note deployment date in `/now` page

## Troubleshooting

### CSS not loading?
- Check that `styles.css` is in the root directory
- Verify all `<link>` tags use relative paths: `href="styles.css"` or `href="../styles.css"`

### Blog posts not showing?
- Ensure HTML files are in the `blog/` directory
- Check `blog/index.html` includes the post listing
- Verify internal links in navigation

### 404 errors?
- All links should be relative, not absolute
- File names are case-sensitive on GitHub Pages
- Check for typos in href attributes

## Future Updates

### Regular Maintenance
```bash
# Pull latest
git pull origin main

# Make edits
# (edit now.html, add blog post, etc.)

# Commit and push
git add .
git commit -m "Update: [description]"
git push origin main

# GitHub Pages auto-deploys in ~1 minute
```

### Adding Blog Posts
1. Create `blog/posts/new-post.md`
2. Write content in markdown
3. Run `node build-blog.js`
4. Update `blog/index.html` with new entry
5. Optionally feature on homepage
6. Commit and push

## Emergency Rollback

If something breaks:
```bash
# View recent commits
git log --oneline -5

# Rollback to previous commit
git reset --hard [commit-hash]

# Force push (careful!)
git push --force origin main
```

## Performance Tips

- Keep images optimized (< 200KB each)
- Minimize use of custom fonts
- CSS is already minification-ready (single file)
- No JavaScript means fast load times

## SEO Checklist

- [x] Each page has unique `<title>`
- [x] Meta descriptions present
- [x] Semantic HTML throughout
- [x] Heading hierarchy logical (h1 → h2 → h3)
- [ ] Add `robots.txt` if needed
- [ ] Consider `sitemap.xml` (optional)

---

## Ready to Deploy? 🚀

If all checkboxes above are complete, you're ready to ship!

Remember: **Imperfect and published > Perfect and hidden**

The site will evolve over time. Get it live, then iterate.
