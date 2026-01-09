#!/usr/bin/env node

/**
 * Simple Markdown to HTML Blog Generator
 * 
 * Usage: node build-blog.js
 * 
 * This script reads markdown files from blog/posts/ and generates
 * styled HTML pages in the blog/ directory using a template.
 * 
 * Minimal dependencies, easy to understand and modify.
 */

const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURATION
// ============================================

const POSTS_DIR = path.join(__dirname, 'blog', 'posts');
const BLOG_DIR = path.join(__dirname, 'blog');
const TEMPLATE_FILE = path.join(__dirname, 'blog-template.html');

// ============================================
// MARKDOWN PARSER (Simple Implementation)
// ============================================

function parseMarkdown(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    // Lists (unordered)
    html = html.replace(/^\- (.+)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Paragraphs (lines with content that aren't already tags)
    const lines = html.split('\n');
    const processedLines = lines.map(line => {
        line = line.trim();
        if (line === '') return '';
        if (line.startsWith('<')) return line;
        if (line.endsWith('</li>')) return line;
        return `<p>${line}</p>`;
    });
    
    html = processedLines.join('\n');
    
    // Clean up extra line breaks
    html = html.replace(/\n\n+/g, '\n');
    
    return html;
}

// ============================================
// METADATA EXTRACTION
// ============================================

function extractMetadata(content) {
    const lines = content.split('\n');
    const metadata = {
        title: 'Untitled Post',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        excerpt: ''
    };
    
    // Extract title from first H1
    const titleMatch = content.match(/^# (.+)$/m);
    if (titleMatch) {
        metadata.title = titleMatch[1];
    }
    
    // Extract first paragraph as excerpt
    const paragraphs = content.split('\n\n');
    for (let para of paragraphs) {
        para = para.trim();
        if (para && !para.startsWith('#')) {
            metadata.excerpt = para.substring(0, 200) + (para.length > 200 ? '...' : '');
            break;
        }
    }
    
    return metadata;
}

// ============================================
// TEMPLATE RENDERING
// ============================================

function renderTemplate(metadata, content) {
    const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${metadata.excerpt}">
    <title>${metadata.title} — Kabir Nahata</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <nav>
        <div class="container wide">
            <div class="logo">Kabir Nahata</div>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="index.html">Journal</a></li>
                <li><a href="../projects.html">Projects</a></li>
                <li><a href="../now.html">Now</a></li>
                <li><a href="../struggling.html">Struggling</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <div class="container">
            <a href="index.html" class="back-link">← Back to journal</a>
            
            <article>
                <div class="post-meta">${metadata.date}</div>
                ${content}
            </article>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>
                Built with intention, not perfection. Last updated January 2025.<br>
                <a href="../index.html">Home</a> • <a href="../now.html">See what I'm doing now</a> • <a href="../struggling.html">What I'm struggling with</a>
            </p>
        </div>
    </footer>
</body>
</html>`;
    
    return template;
}

// ============================================
// MAIN GENERATOR FUNCTION
// ============================================

function generateBlog() {
    console.log('🔨 Building blog...\n');
    
    // Check if posts directory exists
    if (!fs.existsSync(POSTS_DIR)) {
        console.error('❌ Posts directory not found:', POSTS_DIR);
        process.exit(1);
    }
    
    // Read all markdown files
    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
    
    if (files.length === 0) {
        console.log('⚠️  No markdown files found in', POSTS_DIR);
        return;
    }
    
    console.log(`Found ${files.length} markdown file(s):\n`);
    
    // Process each markdown file
    files.forEach(file => {
        const mdPath = path.join(POSTS_DIR, file);
        const htmlFilename = file.replace('.md', '.html');
        const htmlPath = path.join(BLOG_DIR, htmlFilename);
        
        console.log(`  Processing: ${file}`);
        
        // Read markdown content
        const markdown = fs.readFileSync(mdPath, 'utf8');
        
        // Extract metadata
        const metadata = extractMetadata(markdown);
        
        // Convert markdown to HTML
        const contentHtml = parseMarkdown(markdown);
        
        // Render full page
        const fullHtml = renderTemplate(metadata, contentHtml);
        
        // Write HTML file
        fs.writeFileSync(htmlPath, fullHtml);
        
        console.log(`    → Generated: blog/${htmlFilename}`);
    });
    
    console.log('\n✅ Blog generation complete!\n');
}

// ============================================
// RUN
// ============================================

if (require.main === module) {
    try {
        generateBlog();
    } catch (error) {
        console.error('❌ Error generating blog:', error.message);
        process.exit(1);
    }
}

module.exports = { generateBlog, parseMarkdown };
