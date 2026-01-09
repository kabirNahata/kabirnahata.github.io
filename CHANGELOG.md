# Changelog

## Complete Redesign - January 2025

### 🎨 Design Transformation
**From**: Basic portfolio with blue links and minimal styling  
**To**: Calm, typography-first learning journal with cohesive visual identity

- Introduced soft color palette (sage green #7A9B8E + terracotta #D4877B)
- Typography-first design with Georgia serif headings, system sans body text
- 65ch max-width for optimal reading experience
- Generous whitespace and breathing room throughout
- Mobile-first responsive design with breakpoints at 768px and 480px

### 📄 New Pages Created

1. **Homepage (`index.html`)** - Complete rewrite
   - Hero section with mission statement
   - Journey narrative explaining the self-directed path
   - Four learning pillars (depth over breadth, building as learning, reflection, struggling)
   - Course reflections with honest takeaways and struggles
   - "What I'm struggling with" excerpt
   - Recent journal entries section

2. **Now Page (`now.html`)** - NEW
   - Current learning focus (data structures & algorithms)
   - Side studies (web fundamentals, Linux, Git internals)
   - Active projects with progress updates
   - Current reading list
   - 3-month goals
   - Mental reflections on learning tensions
   - What I'm NOT doing (intentional nos)

3. **Projects Page (`projects.html`)** - NEW
   - Learning timeline approach (not just accomplishments)
   - Each project includes "What I learned" and "What I'd do differently"
   - Reflection boxes for honest struggles
   - "Upcoming projects" section for future ideas
   - Growth-focused copy throughout

4. **Struggling Page (`struggling.html`)** - NEW
   - Technical struggles (pointers, tutorial-to-production gap, ML math, code quality)
   - Mental/emotional struggles (imposter syndrome, loneliness, motivation)
   - Structural struggles (explaining choices, future uncertainty)
   - Honest, vulnerable, relatable content

5. **Blog System (`blog/`)** - NEW
   - Blog index page with calm intro
   - Reorganized existing blog post with new styling
   - Markdown source storage in `blog/posts/`
   - Template for new posts

### 🛠️ Technical Infrastructure

1. **Global Stylesheet (`styles.css`)** - NEW
   - CSS custom properties for theming
   - Comprehensive component library (cards, pillars, reflections, navigation)
   - Accessibility features (focus states, reduced motion support)
   - Print styles
   - Responsive breakpoints

2. **Blog Generator (`build-blog.js`)** - NEW
   - Node.js script to convert markdown to HTML
   - Simple markdown parser (headings, bold, italic, links, lists)
   - Automatic metadata extraction (title, date, excerpt)
   - Template rendering with consistent navigation
   - Usage: `node build-blog.js`

3. **Project Configuration**
   - `package.json` with build scripts
   - `.gitignore` for node_modules and editor files
   - `QUICKSTART.md` for maintenance guide
   - `README.md` with philosophy and structure
   - Blog post template (`blog/posts/template.md`)

### 🗑️ Removed Files
- `first-blog.html` (moved to `blog/why-im-skipping-plus-two.html`)
- `first-blog.md` (moved to `blog/posts/why-im-skipping-plus-two.md`)

### ✨ Content Philosophy Shift

**Before**: Portfolio site with achievements and links  
**After**: Learning journal with process, struggles, and growth

Key themes:
- Learning > credentials
- Reflection > hype
- Honesty > polish
- Process > outcomes
- Growth journal, not résumé

### 📐 Design System

**Typography**
- Headings: Georgia, serif (400 weight)
- Body: System font stack (-apple-system, BlinkMacSystemFont, Segoe UI...)
- Size: 1.125rem base (18px), 1.7 line-height

**Colors**
- Primary: #7A9B8E (muted sage green)
- Accent: #D4877B (warm terracotta)
- Text: #2C3E38 (deep forest)
- Text muted: #6B7C76 (soft gray-green)
- Background: #FEFCF8 (warm white)
- Background alt: #F5F3EE (slightly darker)
- Border: #E5E1D8 (subtle beige)

**Spacing Scale**
- XS: 0.5rem
- SM: 1rem
- MD: 1.5rem
- LG: 2.5rem
- XL: 4rem

**Layout**
- Content width: 65ch (optimal reading)
- Wide width: 80ch (navigation and wide sections)

### 🎯 User Experience Improvements

1. **Navigation**
   - Consistent nav bar across all pages
   - Active state indication
   - Logo/name as home link
   - Clear visual hierarchy

2. **Content Structure**
   - Section labels for context
   - Card-based layouts for scanability
   - Reflection boxes for meta-commentary
   - Back links on all subpages

3. **Accessibility**
   - Semantic HTML throughout
   - Focus states on interactive elements
   - Reduced motion media query support
   - Print stylesheet

### 🚀 Ready for Production

- ✅ All 5 core pages built and styled
- ✅ Blog system with markdown workflow
- ✅ Consistent navigation and branding
- ✅ Mobile-responsive on all pages
- ✅ GitHub Pages ready (no build step required)
- ✅ Documentation for maintenance
- ✅ Sample content and templates

### 📝 Maintenance Plan

- **Monthly**: Update `/now` page with current focus
- **Bi-weekly**: Write journal entry (1 technical, 1 reflective per month)
- **As needed**: Add to `/struggling` when hitting challenges
- **Ongoing**: Update projects as building and learning

---

## Philosophy

This redesign transforms a basic portfolio into a **living learning journal**—a space that prioritizes:
- Honest reflection over performative achievement
- Process documentation over outcome showcasing
- Vulnerability over polish
- Growth over credentials

The site says: *"This person isn't rushing. They're building real understanding."*
