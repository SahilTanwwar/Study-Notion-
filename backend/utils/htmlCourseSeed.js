// HTML Course Seeding Script
// Run this after creating an instructor account

const htmlCourseContent = {
    courseName: "Complete HTML Mastery",
    courseDescription: "Learn HTML from basics to advanced. Master semantic HTML, forms, accessibility, and modern web standards. This comprehensive course covers everything you need to know to become an expert in HTML.",
    whatYouWillLearn: "• Understand HTML fundamentals and document structure\n• Create semantic and accessible HTML\n• Work with forms and input validation\n• Implement advanced HTML5 features\n• Best practices and performance optimization\n• Real-world projects and practical examples",
    price: 499,
    tag: ["Web Development", "Frontend", "HTML", "Beginner-Friendly"],
    instructions: [
        "Complete each lesson sequentially",
        "Practice the code examples in your editor",
        "Build projects to reinforce learning",
        "Ask questions in the community forum",
        "Review previous lessons if needed"
    ],
    thumbnail: "https://via.placeholder.com/300x200?text=HTML+Course",
    
    sections: [
        {
            sectionName: "📚 Module 1: HTML Fundamentals",
            subSections: [
                {
                    title: "1.1 Introduction to HTML",
                    timeDuration: "15 min",
                    description: `
# Introduction to HTML

## What is HTML?
HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure and content of web pages.

### Key Points:
- **HTML** = Structure
- **CSS** = Styling  
- **JavaScript** = Interactivity

## History
- Created by **Tim Berners-Lee** in 1989
- Current version: **HTML5**
- Constantly evolving with new features

## Why Learn HTML?
1. Foundation of web development
2. Essential for front-end developers
3. Required for all web pages
4. Easy to learn, powerful when combined with CSS & JavaScript

## What can you build?
- Websites
- Web applications
- Progressive Web Apps (PWA)
- Email templates
- Documentation sites

## Getting Started
You only need:
- A text editor (VS Code, Sublime Text, etc.)
- A web browser
- Your enthusiasm to learn!

**Next:** We'll set up your development environment and create your first HTML page!
                    `,
                    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
                },
                {
                    title: "1.2 Setting Up Your Environment",
                    timeDuration: "12 min",
                    description: `
# Setting Up Your Development Environment

## Step 1: Choose a Code Editor

### Recommended: Visual Studio Code (Free)
1. Download from: https://code.visualstudio.com/
2. Install on your computer
3. Launch VS Code

### Other Options:
- Sublime Text
- Atom
- WebStorm (Paid)
- Notepad++ (Windows)

## Step 2: Install Useful Extensions (for VS Code)

1. **Live Server** - Preview changes in real-time
   - Search "Live Server" in Extensions
   - Install by Ritwick Dey

2. **Prettier** - Code formatter
   - Search "Prettier" in Extensions

3. **HTML Snippets** - Quick HTML generation
   - Search "HTML Snippets" in Extensions

## Step 3: Create Your First Project Folder

\`\`\`bash
mkdir MyWebsite
cd MyWebsite
\`\`\`

## Step 4: Create Your First HTML File

1. Open VS Code
2. Open the MyWebsite folder
3. Right-click → New File
4. Name it: \`index.html\`

## Step 5: Launch Live Server

1. Right-click on \`index.html\`
2. Select "Open with Live Server"
3. Browser opens with your file!

**That's it!** You're ready to start writing HTML.
                    `,
                    videoUrl: "https://www.youtube.com/embed/qZv-rNrqKGs"
                },
                {
                    title: "1.3 HTML Document Structure",
                    timeDuration: "18 min",
                    description: `
# HTML Document Structure

## Basic HTML Template

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

## Breaking It Down

### 1. DOCTYPE Declaration
\`\`\`html
<!DOCTYPE html>
\`\`\`
- Tells browser this is an HTML5 document
- Must be first line
- Not an HTML tag

### 2. HTML Root Element
\`\`\`html
<html lang="en">
\`\`\`
- Root element of document
- \`lang\` attribute specifies language
- Contains \`<head>\` and \`<body>\`

### 3. Head Section
\`\`\`html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
\`\`\`

**Meta Tags:**
- \`charset\` - Character encoding (UTF-8)
- \`viewport\` - Mobile responsiveness
- \`description\` - SEO
- \`keywords\` - SEO

**Other Head Elements:**
- \`<title>\` - Page title (browser tab)
- \`<link>\` - External stylesheets
- \`<script>\` - External JavaScript
- \`<style>\` - Internal CSS

### 4. Body Section
\`\`\`html
<body>
    <!-- All visible content goes here -->
    <h1>Welcome!</h1>
    <p>This is content users see</p>
</body>
\`\`\`

## Complete Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page!</p>
</body>
</html>
\`\`\`

**Next:** Learn about HTML tags and elements!
                    `,
                    videoUrl: "https://www.youtube.com/embed/qz0aGYrrlMU"
                },
                {
                    title: "1.4 Common HTML Tags",
                    timeDuration: "20 min",
                    description: `
# Common HTML Tags

## Headings

\`\`\`html
<h1>Main Heading</h1>      <!-- Largest, use only once per page -->
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>    <!-- Smallest -->
\`\`\`

## Paragraphs & Text

\`\`\`html
<p>This is a paragraph of text.</p>
<br>                        <!-- Line break -->
<hr>                        <!-- Horizontal rule -->
<strong>Bold text</strong>  <!-- Important -->
<em>Italic text</em>        <!-- Emphasis -->
<b>Bold (visual)</b>
<i>Italic (visual)</i>
<small>Small text</small>
<mark>Highlighted text</mark>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>        <!-- H₂O -->
<sup>Superscript</sup>      <!-- x² -->
\`\`\`

## Lists

### Unordered List (Bullets)
\`\`\`html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
\`\`\`

### Ordered List (Numbers)
\`\`\`html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
\`\`\`

### Description List
\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
\`\`\`

## Links

\`\`\`html
<a href="https://www.example.com">Click here</a>
<a href="about.html">About page</a>
<a href="mailto:email@example.com">Email me</a>
<a href="#section1">Jump to section</a>
<a href="file.pdf" download>Download PDF</a>
\`\`\`

## Images

\`\`\`html
<img src="image.jpg" alt="Description of image" width="300" height="200">
<img src="logo.png" alt="Company logo">
\`\`\`

## Divs & Spans

\`\`\`html
<div>Block container - full width</div>
<span>Inline container</span>
\`\`\`

## Practical Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Common Tags</title>
</head>
<body>
    <h1>My Blog</h1>
    <p>Welcome to my blog about <strong>web development</strong>.</p>
    
    <h2>Latest Post</h2>
    <p>Posted on <em>January 15, 2024</em></p>
    
    <h3>Topics Covered:</h3>
    <ul>
        <li>HTML Basics</li>
        <li>CSS Styling</li>
        <li>JavaScript</li>
    </ul>
    
    <hr>
    
    <p>Learn more at <a href="https://www.example.com">Example.com</a></p>
</body>
</html>
\`\`\`

**Next:** Let's explore semantic HTML for better structure!
                    `,
                    videoUrl: "https://www.youtube.com/embed/YQbeUj9xQEk"
                }
            ]
        },
        {
            sectionName: "🏗️ Module 2: Semantic HTML",
            subSections: [
                {
                    title: "2.1 What is Semantic HTML?",
                    timeDuration: "16 min",
                    description: `
# What is Semantic HTML?

## Definition
**Semantic HTML** means using HTML elements that clearly describe their meaning to both the browser and developer.

### Semantic vs Non-Semantic

**Non-Semantic:**
\`\`\`html
<div>
    <div>My Blog</div>
    <div>
        <div>Post Title</div>
        <div>Post Content</div>
    </div>
</div>
\`\`\`

**Semantic:**
\`\`\`html
<article>
    <header>My Blog</header>
    <section>
        <h2>Post Title</h2>
        <p>Post Content</p>
    </section>
</article>
\`\`\`

## Benefits of Semantic HTML

1. **Better SEO** - Search engines understand structure
2. **Accessibility** - Screen readers work better
3. **Readability** - Code is easier to understand
4. **Maintainability** - Easier to modify later
5. **Mobile Friendly** - Better responsive design

## Common Semantic Elements

### Header
\`\`\`html
<header>
    <nav>Navigation menu</nav>
</header>
\`\`\`

### Navigation
\`\`\`html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>
\`\`\`

### Main Content
\`\`\`html
<main>
    <!-- Primary page content -->
</main>
\`\`\`

### Article
\`\`\`html
<article>
    <h2>Blog Post Title</h2>
    <p>Post content here...</p>
</article>
\`\`\`

### Section
\`\`\`html
<section>
    <h2>Section Title</h2>
    <p>Section content</p>
</section>
\`\`\`

### Aside (Sidebar)
\`\`\`html
<aside>
    <h3>Related Links</h3>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
</aside>
\`\`\`

### Footer
\`\`\`html
<footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
\`\`\`

## Page Structure Template

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav><!-- Navigation --></nav>
    </header>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Content...</p>
        </article>
        
        <aside>
            <!-- Sidebar -->
        </aside>
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
\`\`\`

**Next:** Let's learn about more semantic elements!
                    `,
                    videoUrl: "https://www.youtube.com/embed/DL4WrYw1Skw"
                },
                {
                    title: "2.2 Semantic Page Layout",
                    timeDuration: "22 min",
                    description: `
# Semantic Page Layout

## Typical Website Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- HEADER SECTION -->
    <header>
        <div class="container">
            <h1>MyWebsite</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- MAIN CONTENT -->
    <main>
        <section id="hero">
            <h2>Welcome to My Website</h2>
            <p>Your journey to web development starts here</p>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <article>
                <h3>Our Mission</h3>
                <p>To provide quality web development education...</p>
            </article>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <article>
                <h3>Web Design</h3>
                <p>Beautiful and responsive designs</p>
            </article>
            <article>
                <h3>Web Development</h3>
                <p>Full-stack development solutions</p>
            </article>
        </section>
    </main>

    <!-- SIDEBAR -->
    <aside>
        <h3>Latest Updates</h3>
        <ul>
            <li>New course launched</li>
            <li>Blog post published</li>
        </ul>
    </aside>

    <!-- FOOTER -->
    <footer>
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#terms">Terms</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>
\`\`\`

## Real-World Example: Blog Post

\`\`\`html
<article>
    <header>
        <h1>Learning HTML5: A Beginner's Guide</h1>
        <p class="meta">
            By <strong>John Doe</strong> on 
            <time datetime="2024-01-15">January 15, 2024</time>
        </p>
    </header>

    <section class="content">
        <h2>Introduction</h2>
        <p>HTML5 is the latest version of HTML...</p>

        <h2>Key Features</h2>
        <ul>
            <li>New semantic elements</li>
            <li>Improved accessibility</li>
            <li>Better mobile support</li>
        </ul>
    </section>

    <section class="related">
        <h3>Related Posts</h3>
        <ul>
            <li><a href="#">CSS Basics</a></li>
            <li><a href="#">JavaScript Fundamentals</a></li>
        </ul>
    </section>

    <footer>
        <p>Tags: <strong>HTML</strong>, <strong>Web Development</strong></p>
    </footer>
</article>
\`\`\`

## Semantic Elements Cheat Sheet

| Element | Purpose |
|---------|---------|
| \`<header>\` | Page or section header |
| \`<nav>\` | Navigation links |
| \`<main>\` | Main page content |
| \`<article>\` | Independent content |
| \`<section>\` | Thematic grouping |
| \`<aside>\` | Sidebar or tangential |
| \`<footer>\` | Page or section footer |
| \`<time>\` | Date/time |
| \`<figure>\` | Images with captions |
| \`<figcaption>\` | Figure caption |

**Next:** Let's learn about HTML forms!
                    `,
                    videoUrl: "https://www.youtube.com/embed/lW7gzAYv5Fo"
                }
            ]
        },
        {
            sectionName: "📝 Module 3: HTML Forms",
            subSections: [
                {
                    title: "3.1 Form Basics",
                    timeDuration: "18 min",
                    description: `
# HTML Forms Basics

## What is a Form?
A form is used to collect user input. The data can be sent to a server for processing.

## Basic Form Structure

\`\`\`html
<form action="/submit" method="POST">
    <!-- Form fields go here -->
    <input type="submit" value="Submit">
</form>
\`\`\`

### Form Attributes

- **\`action\`** - URL where form data is sent
- **\`method\`** - How to send data (GET or POST)
  - \`GET\` - Data visible in URL (not secure)
  - \`POST\` - Data hidden (more secure)
- **\`enctype\`** - Format of form data
- **\`name\`** - Form name (for JavaScript)

## Input Types

### Text Input
\`\`\`html
<input type="text" name="username" placeholder="Enter username">
\`\`\`

### Email Input
\`\`\`html
<input type="email" name="email" placeholder="Enter email">
\`\`\`

### Password Input
\`\`\`html
<input type="password" name="password" placeholder="Enter password">
\`\`\`

### Number Input
\`\`\`html
<input type="number" name="age" min="0" max="120">
\`\`\`

### Checkbox
\`\`\`html
<input type="checkbox" name="subscribe"> Subscribe to newsletter
\`\`\`

### Radio Button
\`\`\`html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
\`\`\`

### Submit Button
\`\`\`html
<input type="submit" value="Submit">
<button type="submit">Submit</button>
\`\`\`

### Reset Button
\`\`\`html
<input type="reset" value="Clear Form">
\`\`\`

## Labels

\`\`\`html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
\`\`\`

## Textarea

\`\`\`html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="40"></textarea>
\`\`\`

## Select Dropdown

\`\`\`html
<label for="country">Select Country:</label>
<select id="country" name="country">
    <option value="">--Select--</option>
    <option value="usa">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="canada">Canada</option>
</select>
\`\`\`

## Complete Form Example

\`\`\`html
<form action="/register" method="POST">
    <h2>Registration Form</h2>
    
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname" required>
    
    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="lname" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="">--Select--</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
    </select>
    
    <label>
        <input type="checkbox" name="terms" required>
        I agree to terms
    </label>
    
    <input type="submit" value="Register">
    <input type="reset" value="Clear">
</form>
\`\`\`

**Next:** Let's explore advanced form elements!
                    `,
                    videoUrl: "https://www.youtube.com/embed/YwbIeMlxZAU"
                },
                {
                    title: "3.2 Advanced Form Elements",
                    timeDuration: "20 min",
                    description: `
# Advanced Form Elements

## HTML5 Input Types

### Date Input
\`\`\`html
<input type="date" name="birthdate">
\`\`\`

### Time Input
\`\`\`html
<input type="time" name="appointment">
\`\`\`

### Month Input
\`\`\`html
<input type="month" name="billing-month">
\`\`\`

### Week Input
\`\`\`html
<input type="week" name="work-week">
\`\`\`

### Datetime-Local
\`\`\`html
<input type="datetime-local" name="meeting">
\`\`\`

### Color Picker
\`\`\`html
<input type="color" name="favorite-color" value="#FF0000">
\`\`\`

### Range Slider
\`\`\`html
<input type="range" name="volume" min="0" max="100" value="50">
\`\`\`

### Search
\`\`\`html
<input type="search" name="query" placeholder="Search...">
\`\`\`

### URL
\`\`\`html
<input type="url" name="website" placeholder="https://example.com">
\`\`\`

### Telephone
\`\`\`html
<input type="tel" name="phone" placeholder="123-456-7890">
\`\`\`

### File Upload
\`\`\`html
<input type="file" name="document" accept=".pdf,.doc,.docx">
\`\`\`

### Hidden Input
\`\`\`html
<input type="hidden" name="user_id" value="12345">
\`\`\`

## Form Attributes

### Required
\`\`\`html
<input type="text" name="username" required>
\`\`\`

### Placeholder
\`\`\`html
<input type="email" placeholder="Enter your email">
\`\`\`

### Min/Max/Step
\`\`\`html
<input type="number" min="0" max="100" step="5">
\`\`\`

### Pattern (Regex)
\`\`\`html
<input type="text" pattern="[A-Za-z]{3}" title="3 letters">
\`\`\`

### Autocomplete
\`\`\`html
<input type="text" autocomplete="off">
\`\`\`

### Disabled
\`\`\`html
<input type="text" disabled>
\`\`\`

### Readonly
\`\`\`html
<input type="text" value="Cannot change" readonly>
\`\`\`

## Fieldset & Legend

\`\`\`html
<fieldset>
    <legend>Contact Information</legend>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone">
</fieldset>
\`\`\`

## Complete Advanced Form

\`\`\`html
<form action="/submit" method="POST" enctype="multipart/form-data">
    <h2>Event Registration</h2>
    
    <fieldset>
        <legend>Personal Information</legend>
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">
    </fieldset>
    
    <fieldset>
        <legend>Event Details</legend>
        <label for="event-date">Event Date:</label>
        <input type="date" id="event-date" name="date" required>
        
        <label for="event-time">Time:</label>
        <input type="time" id="event-time" name="time" required>
        
        <label for="ticket-quantity">Tickets:</label>
        <input type="number" id="ticket-quantity" name="quantity" min="1" max="10">
    </fieldset>
    
    <fieldset>
        <legend>Preferences</legend>
        <label for="dietary">Dietary Preferences:</label>
        <select id="dietary" name="dietary">
            <option>No restrictions</option>
            <option>Vegetarian</option>
            <option>Vegan</option>
        </select>
        
        <label for="color">Favorite Color:</label>
        <input type="color" id="color" name="color">
    </fieldset>
    
    <label for="file">Upload Document:</label>
    <input type="file" id="file" name="document">
    
    <label>
        <input type="checkbox" name="newsletter"> Subscribe to updates
    </label>
    
    <input type="submit" value="Register">
</form>
\`\`\`

**Next:** Learn about form validation and accessibility!
                    `,
                    videoUrl: "https://www.youtube.com/embed/BQZ4dZUuYss"
                }
            ]
        },
        {
            sectionName: "♿ Module 4: Accessibility & Best Practices",
            subSections: [
                {
                    title: "4.1 Web Accessibility Basics",
                    timeDuration: "17 min",
                    description: `
# Web Accessibility Basics

## What is Web Accessibility?
Making websites usable for everyone, including people with disabilities.

## Why It Matters
- **Legal requirement** in many countries
- **Ethical responsibility**
- **Better UX for everyone**
- **Improved SEO**
- **Larger audience**

## Common Disabilities

1. **Visual** - Blindness, low vision, color blindness
2. **Hearing** - Deafness, hard of hearing
3. **Motor** - Difficulty using mouse, keyboard
4. **Cognitive** - Dyslexia, ADHD

## Accessible HTML Practices

### 1. Use Semantic HTML
\`\`\`html
<!-- Good -->
<header>
    <h1>Page Title</h1>
</header>

<!-- Bad -->
<div class="header">
    <div class="title">Page Title</div>
</div>
\`\`\`

### 2. Use Alt Text for Images
\`\`\`html
<!-- Good -->
<img src="dog.jpg" alt="Golden retriever playing in park">

<!-- Bad -->
<img src="dog.jpg" alt="dog">
<img src="dog.jpg">  <!-- No alt -->
\`\`\`

### 3. Proper Heading Hierarchy
\`\`\`html
<!-- Good -->
<h1>Main Title</h1>
<h2>Section 1</h2>
<p>Content</p>
<h2>Section 2</h2>
<p>Content</p>

<!-- Bad -->
<h1>Main Title</h1>
<h3>Section 1</h3>  <!-- Skipped h2 -->
<h1>Section 2</h1>  <!-- Multiple h1 -->
\`\`\`

### 4. Label Form Inputs
\`\`\`html
<!-- Good -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Bad -->
<input type="text" name="username">
\`\`\`

### 5. Keyboard Navigation
- Use semantic HTML for native keyboard support
- Ensure all interactive elements are keyboard accessible

\`\`\`html
<button>Click me</button>    <!-- Keyboard accessible -->
<div>Click me</div>          <!-- NOT keyboard accessible -->
\`\`\`

### 6. Color Contrast
- Text should have sufficient contrast with background
- Don't rely on color alone to convey information

### 7. Skip Links
\`\`\`html
<body>
    <a href="#main" class="skip-link">Skip to main content</a>
    
    <header>
        <!-- Navigation -->
    </header>
    
    <main id="main">
        <!-- Main content -->
    </main>
</body>
\`\`\`

### 8. ARIA Attributes (when needed)
\`\`\`html
<div role="alert" aria-live="polite">
    Error: Username already taken
</div>

<button aria-label="Close menu" aria-expanded="false">✕</button>
\`\`\`

## Accessibility Checklist

- [ ] Semantic HTML used correctly
- [ ] Images have alt text
- [ ] Proper heading hierarchy
- [ ] Form labels present
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] Videos have captions
- [ ] Links have descriptive text

## Testing Accessibility

### Browser Extensions
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools
- Lighthouse (in Chrome DevTools)

### Screen Readers
- NVDA (Windows, Free)
- JAWS (Windows, Paid)
- VoiceOver (Mac, Built-in)

**Next:** Let's learn HTML best practices!
                    `,
                    videoUrl: "https://www.youtube.com/embed/aqM6rV5IwWM"
                },
                {
                    title: "4.2 HTML Best Practices",
                    timeDuration: "19 min",
                    description: `
# HTML Best Practices

## 1. Valid HTML

Always validate your HTML at: https://validator.w3.org/

\`\`\`html
<!-- Good -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Valid Page</title>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>

<!-- Bad - Missing DOCTYPE, unclosed tags -->
<html>
<head>
    <title>Page</title>
<body>
    <h1>Hello
</body>
\`\`\`

## 2. Use Meaningful Class and ID Names

\`\`\`html
<!-- Good -->
<div class="navigation-menu">
    <a class="nav-link" href="/">Home</a>
</div>

<!-- Bad -->
<div class="div1">
    <a class="link" href="/">Home</a>
</div>
\`\`\`

## 3. Proper Indentation

\`\`\`html
<!-- Good -->
<html>
    <head>
        <title>Page</title>
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>
        </header>
    </body>
</html>

<!-- Bad - No indentation -->
<html>
<head>
<title>Page</title>
</head>
<body>
<header>
<nav>
<ul>
<li><a href="/">Home</a></li>
</ul>
</nav>
</header>
</body>
</html>
\`\`\`

## 4. Don't Use Deprecated Elements

\`\`\`html
<!-- Avoid -->
<center>Centered text</center>
<font color="red">Red text</font>
<marquee>Scrolling text</marquee>

<!-- Use CSS instead -->
<div class="centered">Centered text</div>
<p class="red-text">Red text</p>
\`\`\`

## 5. Separate Structure from Styling

\`\`\`html
<!-- Good -->
<p class="highlight">Important text</p>
<!-- CSS: .highlight { background: yellow; } -->

<!-- Bad -->
<p><font color="yellow">Important text</font></p>
\`\`\`

## 6. Use Semantic HTML

\`\`\`html
<!-- Good -->
<article>
    <h2>Blog Post</h2>
    <p>Content</p>
</article>

<!-- Bad -->
<div class="article">
    <div class="title">Blog Post</div>
    <div>Content</div>
</div>
\`\`\`

## 7. Mobile-First Approach

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## 8. Use Descriptive Link Text

\`\`\`html
<!-- Good -->
<a href="/blog">Read our blog</a>

<!-- Bad -->
<a href="/blog">Click here</a>
<a href="/blog">Link</a>
\`\`\`

## 9. Optimize Images

\`\`\`html
<!-- Lazy loading -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Responsive images -->
<img srcset="small.jpg 480w,
             medium.jpg 800w,
             large.jpg 1200w"
     src="medium.jpg"
     alt="Description">

<!-- Picture element -->
<picture>
    <source media="(max-width: 600px)" srcset="small.jpg">
    <source media="(max-width: 1000px)" srcset="medium.jpg">
    <img src="large.jpg" alt="Description">
</picture>
\`\`\`

## 10. Use Meta Tags

\`\`\`html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <meta name="keywords" content="keyword1, keyword2">
    <meta name="author" content="Your Name">
    <meta name="theme-color" content="#1a1a1a">
</head>
\`\`\`

## HTML Best Practices Checklist

- [ ] Valid HTML (passed W3C validator)
- [ ] Semantic HTML used
- [ ] Mobile responsive
- [ ] Alt text for images
- [ ] Meaningful names for classes/IDs
- [ ] Proper indentation
- [ ] No deprecated elements
- [ ] Descriptive link text
- [ ] Good meta tags
- [ ] Fast loading time

**Congratulations!** You've completed the HTML course!
                    `,
                    videoUrl: "https://www.youtube.com/embed/jfKfPfAPH_U"
                }
            ]
        },
        {
            sectionName: "🎨 Module 5: HTML5 Advanced Features",
            subSections: [
                {
                    title: "5.1 Video & Audio Tags",
                    timeDuration: "16 min",
                    description: `
# HTML5 Video & Audio Tags

## Video Tag

### Basic Video
\`\`\`html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
\`\`\`

### Video Attributes

- **\`controls\`** - Show play/pause/volume controls
- **\`autoplay\`** - Play automatically
- **\`muted\`** - Start muted
- **\`loop\`** - Repeat video
- **\`poster\`** - Image before video plays
- **\`preload\`** - How much to preload (auto, metadata, none)
- **\`width\` / \`height\`** - Video dimensions

### Complete Video Example
\`\`\`html
<video width="640" height="360" 
       controls 
       poster="thumbnail.jpg"
       preload="auto">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support video.
</video>
\`\`\`

### Multiple Video Formats
\`\`\`html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    <source src="movie.webm" type="video/webm">
    Your browser does not support HTML5 video.
</video>
\`\`\`

## Audio Tag

### Basic Audio
\`\`\`html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
</audio>
\`\`\`

### Audio Attributes

- **\`controls\`** - Show play/pause controls
- **\`autoplay\`** - Play automatically
- **\`muted\`** - Start muted
- **\`loop\`** - Repeat audio
- **\`preload\`** - How much to preload

### Complete Audio Example
\`\`\`html
<audio controls preload="auto">
    <source src="podcast.mp3" type="audio/mpeg">
    <source src="podcast.ogg" type="audio/ogg">
    Your browser does not support audio.
</audio>
\`\`\`

## Practical Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Media Gallery</title>
</head>
<body>
    <h1>Multimedia Gallery</h1>
    
    <section>
        <h2>Video Tutorial</h2>
        <video width="640" height="360" controls poster="thumb.jpg">
            <source src="tutorial.mp4" type="video/mp4">
            Your browser does not support video.
        </video>
        <p>Learn HTML5 in 10 minutes</p>
    </section>
    
    <section>
        <h2>Podcast</h2>
        <audio controls>
            <source src="episode1.mp3" type="audio/mpeg">
            Your browser does not support audio.
        </audio>
        <p>Episode 1: Getting Started with Web Dev</p>
    </section>
</body>
</html>
\`\`\`

**Next:** Let's explore Canvas and SVG!
                    `,
                    videoUrl: "https://www.youtube.com/embed/hEYbWnwAkIM"
                },
                {
                    title: "5.2 Canvas & SVG Introduction",
                    timeDuration: "18 min",
                    description: `
# Canvas & SVG in HTML5

## Canvas Basics

### What is Canvas?
A container for graphics drawn with JavaScript.

### Basic Canvas
\`\`\`html
<canvas id="myCanvas" width="400" height="300"></canvas>

<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Draw a rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 150, 100);
    
    // Draw a circle
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(200, 150, 50, 0, 2 * Math.PI);
    ctx.fill();
</script>
\`\`\`

### Canvas Use Cases
- Games
- Animations
- Visualizations
- Image editing
- Charting

## SVG Basics

### What is SVG?
Scalable Vector Graphics - XML-based format for vectors.

### Basic SVG
\`\`\`html
<svg width="400" height="300">
    <!-- Rectangle -->
    <rect x="10" y="10" width="150" height="100" fill="blue"/>
    
    <!-- Circle -->
    <circle cx="250" cy="150" r="50" fill="red"/>
    
    <!-- Line -->
    <line x1="10" y1="10" x2="100" y2="100" stroke="black" stroke-width="2"/>
    
    <!-- Text -->
    <text x="50" y="50" font-size="20" fill="black">Hello SVG</text>
</svg>
\`\`\`

### SVG Shapes

**Rectangle**
\`\`\`html
<rect x="10" y="10" width="100" height="50" fill="blue"/>
\`\`\`

**Circle**
\`\`\`html
<circle cx="50" cy="50" r="40" fill="red"/>
\`\`\`

**Ellipse**
\`\`\`html
<ellipse cx="100" cy="50" rx="80" ry="40" fill="green"/>
\`\`\`

**Line**
\`\`\`html
<line x1="0" y1="0" x2="100" y2="100" stroke="black" stroke-width="2"/>
\`\`\`

**Polygon**
\`\`\`html
<polygon points="50,10 90,90 10,90" fill="purple"/>
\`\`\`

**Polyline**
\`\`\`html
<polyline points="0,0 50,50 100,0" fill="none" stroke="black" stroke-width="2"/>
\`\`\`

**Path**
\`\`\`html
<path d="M10 10 L 90 90 L 90 10 Z" fill="orange"/>
\`\`\`

## Canvas vs SVG

| Canvas | SVG |
|--------|-----|
| Raster (pixels) | Vector (mathematical) |
| Good for games | Good for logos/icons |
| Rendered at fixed size | Scales perfectly |
| Requires JavaScript | Can be used in HTML |
| Good performance | Better for animations |

## Practical Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Canvas & SVG</title>
</head>
<body>
    <h1>Canvas Example</h1>
    <canvas id="canvas" width="400" height="300"></canvas>
    
    <h1>SVG Example</h1>
    <svg width="400" height="300">
        <rect x="10" y="10" width="100" height="100" fill="lightblue"/>
        <circle cx="250" cy="50" r="40" fill="coral"/>
        <polygon points="200,200 250,250 150,250" fill="lightgreen"/>
    </svg>
    
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Draw gradient
        const gradient = ctx.createLinearGradient(0, 0, 400, 300);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'blue');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 400, 300);
        
        // Draw text
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('Canvas Drawing', 50, 50);
    </script>
</body>
</html>
\`\`\`

**Next:** Learn about Data Attributes and APIs!
                    `,
                    videoUrl: "https://www.youtube.com/embed/4Se0_w-Y2sQ"
                },
                {
                    title: "5.3 Data Attributes & APIs",
                    timeDuration: "15 min",
                    description: `
# Data Attributes & Web APIs

## Data Attributes (data-*)

### Purpose
Store custom data on HTML elements for JavaScript to use.

### Basic Usage
\`\`\`html
<div data-user-id="12345" data-role="admin">
    User Profile
</div>

<script>
    const div = document.querySelector('div');
    console.log(div.dataset.userId);  // 12345
    console.log(div.dataset.role);     // admin
</script>
\`\`\`

### Common Use Cases

**Product Data**
\`\`\`html
<div class="product" 
     data-id="101" 
     data-price="29.99" 
     data-category="electronics">
    Laptop
</div>
\`\`\`

**Configuration**
\`\`\`html
<button data-action="delete" data-confirm="true" data-item-id="5">
    Delete
</button>
\`\`\`

**Metadata**
\`\`\`html
<article data-author="John" 
         data-date="2024-01-15"
         data-reading-time="5">
    Article content...
</article>
\`\`\`

## Geolocation API

\`\`\`html
<button onclick="getLocation()">Get My Location</button>
<p id="location"></p>

<script>
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                document.getElementById('location').innerHTML = 
                    \`Latitude: \${lat}, Longitude: \${lng}\`;
            });
        } else {
            alert('Geolocation not supported');
        }
    }
</script>
\`\`\`

## Local Storage API

\`\`\`html
<input type="text" id="username" placeholder="Enter name">
<button onclick="saveName()">Save</button>
<button onclick="loadName()">Load</button>

<script>
    function saveName() {
        const name = document.getElementById('username').value;
        localStorage.setItem('username', name);
        alert('Saved!');
    }
    
    function loadName() {
        const name = localStorage.getItem('username');
        document.getElementById('username').value = name || '';
    }
</script>
\`\`\`

## Session Storage API

Similar to Local Storage, but cleared when tab closes:

\`\`\`html
<script>
    // Store temporary data
    sessionStorage.setItem('tempData', 'value');
    
    // Retrieve data
    const data = sessionStorage.getItem('tempData');
    
    // Remove data
    sessionStorage.removeItem('tempData');
    
    // Clear all
    sessionStorage.clear();
</script>
\`\`\`

## Complete Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>APIs Example</title>
    <style>
        .card {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Web APIs Demo</h1>
    
    <h2>Product with Data Attributes</h2>
    <div class="card" 
         data-product-id="101"
         data-price="49.99"
         data-stock="15">
        <h3>Smartphone</h3>
        <p>Price: \$<span class="price"></span></p>
        <p>In Stock: <span class="stock"></span></p>
        <button onclick="buyProduct(this)">Buy Now</button>
    </div>
    
    <h2>User Preferences</h2>
    <label>
        Theme:
        <select id="theme" onchange="saveTheme()">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
    
    <script>
        // Load and display product data
        function displayProducts() {
            const products = document.querySelectorAll('.card');
            products.forEach(product => {
                const price = product.dataset.price;
                const stock = product.dataset.stock;
                product.querySelector('.price').textContent = price;
                product.querySelector('.stock').textContent = stock;
            });
        }
        
        // Buy product
        function buyProduct(button) {
            const card = button.parentElement;
            const productId = card.dataset.productId;
            alert('Product ' + productId + ' added to cart!');
        }
        
        // Save theme preference
        function saveTheme() {
            const theme = document.getElementById('theme').value;
            localStorage.setItem('theme', theme);
            applyTheme(theme);
        }
        
        // Apply saved theme
        function applyTheme(theme) {
            if (theme === 'dark') {
                document.body.style.backgroundColor = '#333';
                document.body.style.color = '#fff';
            } else {
                document.body.style.backgroundColor = '#fff';
                document.body.style.color = '#000';
            }
        }
        
        // Initialize
        displayProducts();
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.getElementById('theme').value = savedTheme;
        applyTheme(savedTheme);
    </script>
</body>
</html>
\`\`\`

**Congratulations!** You've mastered HTML! 🎉
                    `,
                    videoUrl: "https://www.youtube.com/embed/sStkKEfs5TM"
                }
            ]
        }
    ]
};

module.exports = htmlCourseContent;
