// HTML Course Data (Hardcoded)
export const htmlCourseData = {
    _id: "html-course-001",
    courseName: "HTML - Basic to Advanced",
    courseDescription: "Learn HTML from basics to advanced. Master semantic HTML, forms, accessibility, and modern web standards.",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    customLink: "/html-course",
    ratingAndReviews: [1, 2, 3, 4, 5],
    instructor: {
        firstName: "Study",
        lastName: "Notion",
        _id: "instructor-001"
    },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    price: 499,
    ratingAndReviews: [],
    whatYouWillLearn: "• Understand HTML fundamentals and document structure\n• Create semantic and accessible HTML\n• Work with forms and input validation\n• Implement advanced HTML5 features\n• Best practices and performance optimization",
    
    courseContent: [
        {
            sectionName: "📚 Module 1: HTML Fundamentals",
            lessons: [
                {
                    title: "1.1 Introduction to HTML",
                    duration: "15 min",
                    content: `# Introduction to HTML: Understanding the Web Foundation

HTML stands for HyperText Markup Language. It's the standard format for creating web pages that billions of people use every single day.

## What is HTML Really?

HTML is NOT a programming language - it's a markup language. What's the difference? A markup language describes what content is and what it means. A programming language tells a computer what to DO with information.

Think of it this way:
- HTML = "This is a heading, this is a paragraph, this is an image"
- JavaScript = "Do this calculation, make this decision, repeat this action"

HTML describes the STRUCTURE and CONTENT of web pages. It tells the browser: "Display this text as a heading," "Show this image," "Make this a clickable link."

## The Three Technologies of Web Development

All websites you visit use three core technologies that work together:

### 1. HTML = The Structure (The Blueprint)
HTML is like the blueprint of a house. It defines the layout and structure. It says "Here's the main content area, here's the sidebar, here's the footer." Without HTML, there's nothing for a browser to display.

### 2. CSS = The Appearance (The Interior Design)
CSS controls HOW things look. It handles colors, fonts, spacing, animations. CSS makes websites beautiful. But CSS without HTML has nothing to style - it would be like trying to decorate a house that doesn't exist yet.

### 3. JavaScript = The Interactivity (The Electrical Wiring)
JavaScript adds functionality. When you click a button and something happens, that's JavaScript. When you submit a form, when animations play, when a page updates without refreshing - that's JavaScript. It's the "brains" of websites.

Together: HTML provides the content, CSS makes it look beautiful, and JavaScript makes it interactive.

## Why Learn HTML? Four Powerful Career Reasons

### Reason 1: Excellent Career Opportunities
Frontend developers earn between 80,000 and 150,000 dollars per year, sometimes more. The job market is extremely competitive - companies need skilled developers and are willing to pay well. Remote work is common, giving you flexibility.

### Reason 2: It's the Foundation
Every website starts with HTML. Even modern frameworks like React and Vue ultimately produce HTML. Developers who truly understand HTML become better developers because they understand the web fundamentally. It's like learning the alphabet before writing poetry.

### Reason 3: It's Everywhere
HTML isn't just for websites. It powers:
- Emails (every email template ever)
- Mobile apps (through frameworks)
- Desktop applications (Electron apps like VS Code)
- Progressive Web Apps (apps that work in browsers)
- Every website on the internet

Learning HTML opens doors to many different types of development.

### Reason 4: It's Easy to Learn
HTML has only about 100-150 common tags. You can learn them quickly. You see results immediately - write some HTML, open it in a browser, BAM, you see your work. That immediate feedback makes learning enjoyable and motivating.

## Real-World Examples You Use Daily

Google.com has search forms (HTML), YouTube has video players (HTML), Twitter shows tweets (HTML), Amazon displays products (HTML), Facebook shows posts (HTML). Every website you've ever visited was built with HTML.

The companies behind these sites employ thousands of developers who write HTML. Being able to write good HTML is valuable everywhere.

## Common Misconceptions About HTML

### False: "HTML is a programming language"
True: HTML is markup. It describes things, doesn't control logic. It has no if/then statements, no loops, no functions. Programming languages do these things. HTML just labels content.

### False: "You can make complete websites with just HTML"
True: HTML alone looks plain and boring. You need CSS for styling and JavaScript for interactivity. A website needs all three to be complete and useful.

### False: "HTML is old/outdated/dying"
True: HTML5 (modern HTML) is actively maintained and improved. New features are added regularly. The web standards committee adds new capabilities constantly.

### False: "You must learn HTML perfectly before touching CSS or JavaScript"
True: You can learn them together. In fact, many developers recommend it. You learn the basics of all three and deepen your skills as you progress.

## Your Learning Journey

This course has five modules taking you from beginner to advanced:

Module 1: Fundamentals (right now!) - What is HTML, how to set up, basic structure
Module 2: Semantic HTML - Using meaningful tags, better structure
Module 3: Forms - Getting user input, validation
Module 4: Accessibility - Making websites usable by everyone
Module 5: Advanced Features - Videos, graphics, modern APIs

Each builds on the previous. By the end, you'll be able to write professional HTML.

## What Happens After This Course

You'll be able to:
- Write clean, semantic HTML that search engines love
- Create forms that actually work
- Make websites accessible to disabled users (legally required in many countries)
- Use HTML5 features like video, audio, canvas
- Pass technical interviews for web development jobs
- Work on real projects with companies

## The Power and Impact

When you learn HTML well, you gain the ability to communicate with billions of web browsers. You can build websites that millions of people interact with. That's real power and impact.

Developers who understand HTML deeply tend to write better code overall. They make smarter decisions about structure and design.

The web is built on HTML. By learning it, you're learning the fundamental language of the internet.

## Let's Get Started

In the next lesson, you'll set up your development environment. Then you'll create your first HTML file and see it in a browser. You're just a few lessons away from creating real web pages!

Are you ready? Let's build something amazing together!`
                },
                {
                    title: "1.2 Setting Up Your Environment",
                    duration: "12 min",
                    content: `# Setting Up Your Development Environment

## Step 1: Choose a Code Editor
- **Visual Studio Code** (Recommended - Free)
- Download from: https://code.visualstudio.com/
- Install on your computer

## Step 2: Install Extensions
- Live Server - Real-time preview
- Prettier - Code formatter
- HTML Snippets - Quick HTML generation

## Step 3: Create Your First Project
\`\`\`bash
mkdir MyWebsite
cd MyWebsite
\`\`\`

## Step 4: Create index.html
1. Open VS Code
2. Create new file
3. Save as: index.html
4. Right-click → Open with Live Server`
                },
                {
                    title: "1.3 HTML Document Structure",
                    duration: "18 min",
                    content: `# HTML Document Structure

## Basic Template
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
\`\`\`

## Key Elements
- **DOCTYPE** - Tells browser this is HTML5
- **Head** - Metadata and settings
- **Body** - Visible content`
                },
                {
                    title: "1.4 Common HTML Tags",
                    duration: "20 min",
                    content: `# Common HTML Tags

## Headings
- \`<h1>\` to \`<h6>\` - Heading levels (h1 only once per page)

## Text Elements
- \`<p>\` - Paragraph
- \`<strong>\` - Important text
- \`<em>\` - Emphasized text
- \`<br>\` - Line break
- \`<hr>\` - Horizontal line

## Lists
- \`<ul>\` - Unordered list
- \`<ol>\` - Ordered list
- \`<li>\` - List item

## Links and Images
- \`<a href="">\` - Link
- \`<img src="" alt="">\` - Image`
                }
            ]
        },
        {
            sectionName: "🏗️ Module 2: Semantic HTML",
            lessons: [
                {
                    title: "2.1 What is Semantic HTML?",
                    duration: "16 min",
                    content: `# What is Semantic HTML?

## Definition
Semantic HTML means using HTML elements that clearly describe their meaning.

## Benefits
1. **Better SEO** - Search engines understand structure
2. **Accessibility** - Screen readers work better
3. **Code Quality** - Easier to read and maintain
4. **Mobile Friendly** - Better responsive design

## Semantic Elements
- \`<header>\` - Page header
- \`<nav>\` - Navigation
- \`<main>\` - Main content
- \`<article>\` - Independent content
- \`<section>\` - Thematic section
- \`<aside>\` - Sidebar
- \`<footer>\` - Page footer`
                },
                {
                    title: "2.2 Semantic Page Layout",
                    duration: "22 min",
                    content: `# Semantic Page Layout

## Typical Structure
\`\`\`html
<header>
    <h1>Website Title</h1>
    <nav>Navigation</nav>
</header>

<main>
    <article>Content</article>
    <aside>Sidebar</aside>
</main>

<footer>Footer</footer>
\`\`\`

## Benefits
- Better SEO rankings
- Improved accessibility
- Cleaner, more readable code
- Mobile responsive`
                }
            ]
        },
        {
            sectionName: "📝 Module 3: HTML Forms",
            lessons: [
                {
                    title: "3.1 Form Basics",
                    duration: "18 min",
                    content: `# HTML Forms Basics

## Form Structure
\`\`\`html
<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <input type="submit" value="Submit">
</form>
\`\`\`

## Input Types
- text, email, password
- number, checkbox, radio
- submit, reset buttons

## Important: Always use labels!`
                },
                {
                    title: "3.2 Advanced Form Elements",
                    duration: "20 min",
                    content: `# Advanced Form Elements

## HTML5 Input Types
- \`date\` - Date picker
- \`time\` - Time picker
- \`color\` - Color picker
- \`range\` - Slider
- \`file\` - File upload
- \`url\`, \`tel\`, \`search\`

## Form Attributes
- \`required\` - Field required
- \`placeholder\` - Hint text
- \`min/max\` - Value limits
- \`disabled\` - Disable field
- \`readonly\` - Read-only field`
                }
            ]
        },
        {
            sectionName: "♿ Module 4: Accessibility & Best Practices",
            lessons: [
                {
                    title: "4.1 Web Accessibility Basics",
                    duration: "17 min",
                    content: `# Web Accessibility Basics

## What is Accessibility?
Making websites usable for everyone, including people with disabilities.

## Best Practices
1. Use semantic HTML
2. Add alt text to images
3. Proper heading hierarchy
4. Label form inputs
5. Keyboard navigation support
6. Good color contrast
7. Test with screen readers

## Screen Readers
- NVDA (Windows, Free)
- VoiceOver (Mac, Built-in)`
                },
                {
                    title: "4.2 HTML Best Practices",
                    duration: "19 min",
                    content: `# HTML Best Practices

## Do's ✅
- Use semantic HTML
- Validate your HTML
- Use meaningful class names
- Proper code indentation
- Mobile-first approach
- Descriptive link text
- Alt text for images

## Don'ts ❌
- Don't use deprecated elements
- Don't skip indentation
- Don't use multiple h1 tags
- Don't forget alt text
- Don't use vague link text

## Validate at: https://validator.w3.org/`
                }
            ]
        },
        {
            sectionName: "🎨 Module 5: HTML5 Advanced Features",
            lessons: [
                {
                    title: "5.1 Video & Audio Tags",
                    duration: "16 min",
                    content: `# HTML5 Video & Audio Tags

## Video Tag
\`\`\`html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support video.
</video>
\`\`\`

## Video Attributes
- controls, autoplay, muted
- loop, poster

## Audio Tag
\`\`\`html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
\`\`\``
                },
                {
                    title: "5.2 Canvas & SVG Introduction",
                    duration: "18 min",
                    content: `# Canvas & SVG in HTML5

## Canvas - Graphics Container
- Drawn with JavaScript
- Used for games, animations
- Pixel-based (raster)

## SVG - Vector Graphics
- XML-based format
- Perfect for logos, icons
- Scales without quality loss

## Canvas vs SVG
- Canvas: Games, animations
- SVG: Logos, icons, diagrams`
                },
                {
                    title: "5.3 Data Attributes & APIs",
                    duration: "15 min",
                    content: `# Data Attributes & Web APIs

## Data Attributes
Store custom data on HTML elements:
\`\`\`html
<div data-user-id="123" data-role="admin">
    User Profile
</div>
\`\`\`

## Web APIs
- Geolocation - Get location
- Local Storage - Store data
- Fetch API - Get server data
- Session Storage - Temp storage

## Example: Local Storage
\`\`\`html
<button onclick="saveName()">Save</button>
<script>
    function saveName() {
        localStorage.setItem('name', 'John');
    }
</script>
\`\`\``
                }
            ]
        }
    ]
};
