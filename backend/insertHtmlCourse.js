// Direct MongoDB Insertion - HTML Course Seed
// Run this if the regular script fails due to connection issues

const mongoose = require('mongoose');
require('dotenv').config();

const Course = require('./models/course');
const Section = require('./models/section');
const SubSection = require('./models/subSection');
const Category = require('./models/category');
const User = require('./models/user');

// Course content (simplified version)
const htmlCourseData = {
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
    
    modules: [
        {
            sectionName: "📚 Module 1: HTML Fundamentals",
            lessons: [
                {
                    title: "1.1 Introduction to HTML",
                    duration: "15 min",
                    content: "# Introduction to HTML\n\nHTML (HyperText Markup Language) is the standard markup language used to create web pages.\n\n## What is HTML?\n- **HTML** = Structure\n- **CSS** = Styling\n- **JavaScript** = Interactivity\n\n## Why Learn HTML?\n1. Foundation of web development\n2. Essential for front-end developers\n3. Required for all web pages\n4. Easy to learn, powerful when combined with CSS & JavaScript\n\n## Getting Started\nYou only need:\n- A text editor (VS Code, Sublime Text, etc.)\n- A web browser\n- Your enthusiasm to learn!"
                },
                {
                    title: "1.2 Setting Up Your Environment",
                    duration: "12 min",
                    content: "# Setting Up Your Development Environment\n\n## Step 1: Choose a Code Editor\n- **Visual Studio Code** (Recommended - Free)\n- Sublime Text\n- Atom\n- WebStorm (Paid)\n\n## Step 2: Install Extensions\n- Live Server\n- Prettier\n- HTML Snippets\n\n## Step 3: Create Your First File\n1. Create folder: `MyWebsite`\n2. Create file: `index.html`\n3. Write HTML code\n4. Open with Live Server\n\nThat's it! You're ready to start!"
                },
                {
                    title: "1.3 HTML Document Structure",
                    duration: "18 min",
                    content: "# HTML Document Structure\n\n## Basic HTML Template\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Page Title</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>\n```\n\n## Key Elements\n- **DOCTYPE** - Tells browser this is HTML5\n- **Head** - Metadata and settings\n- **Body** - Visible content\n- **Meta tags** - For SEO and mobile\n\nEvery HTML document should have this structure!"
                },
                {
                    title: "1.4 Common HTML Tags",
                    duration: "20 min",
                    content: "# Common HTML Tags\n\n## Headings\n- `<h1>` to `<h6>` - Heading levels\n- Use h1 only once per page\n\n## Text Elements\n- `<p>` - Paragraph\n- `<strong>` - Important text\n- `<em>` - Emphasized text\n- `<br>` - Line break\n- `<hr>` - Horizontal line\n\n## Lists\n- `<ul>` - Unordered list\n- `<ol>` - Ordered list\n- `<li>` - List item\n\n## Links and Images\n- `<a href=\"\">` - Link\n- `<img src=\"\" alt=\"\">` - Image\n\n## Containers\n- `<div>` - Block container\n- `<span>` - Inline container"
                }
            ]
        },
        {
            sectionName: "🏗️ Module 2: Semantic HTML",
            lessons: [
                {
                    title: "2.1 What is Semantic HTML?",
                    duration: "16 min",
                    content: "# What is Semantic HTML?\n\n## Definition\nSemantic HTML means using HTML elements that clearly describe their meaning.\n\n## Benefits\n1. **Better SEO** - Search engines understand structure\n2. **Accessibility** - Screen readers work better\n3. **Readability** - Code is easier to understand\n4. **Maintainability** - Easier to modify\n5. **Mobile Friendly** - Better responsive design\n\n## Common Semantic Elements\n- `<header>` - Page header\n- `<nav>` - Navigation\n- `<main>` - Main content\n- `<article>` - Independent content\n- `<section>` - Thematic section\n- `<aside>` - Sidebar\n- `<footer>` - Page footer\n\nUse these instead of generic `<div>` tags!"
                },
                {
                    title: "2.2 Semantic Page Layout",
                    duration: "22 min",
                    content: "# Semantic Page Layout\n\n## Typical Structure\n\n```html\n<header>\n    <h1>Website Title</h1>\n    <nav>Navigation Menu</nav>\n</header>\n\n<main>\n    <article>Main Content</article>\n    <aside>Sidebar</aside>\n</main>\n\n<footer>\n    Footer content\n</footer>\n```\n\n## Real-World Example: Blog\n```html\n<article>\n    <header>\n        <h1>Blog Post Title</h1>\n        <time>January 15, 2024</time>\n    </header>\n    <section>Content</section>\n    <footer>Tags and metadata</footer>\n</article>\n```\n\nSemantic HTML makes websites better for everyone!"
                }
            ]
        },
        {
            sectionName: "📝 Module 3: HTML Forms",
            lessons: [
                {
                    title: "3.1 Form Basics",
                    duration: "18 min",
                    content: "# HTML Forms Basics\n\n## Form Structure\n```html\n<form action=\"/submit\" method=\"POST\">\n    <!-- Form fields -->\n    <input type=\"submit\" value=\"Submit\">\n</form>\n```\n\n## Input Types\n- `text` - Text input\n- `email` - Email input\n- `password` - Password\n- `number` - Number input\n- `checkbox` - Multiple choice\n- `radio` - Single choice\n- `submit` - Submit button\n\n## Labels\n```html\n<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\">\n```\n\n## Important: Always use labels for accessibility!"
                },
                {
                    title: "3.2 Advanced Form Elements",
                    duration: "20 min",
                    content: "# Advanced Form Elements\n\n## HTML5 Input Types\n- `date` - Date picker\n- `time` - Time picker\n- `color` - Color picker\n- `range` - Slider\n- `file` - File upload\n- `url` - URL input\n- `tel` - Telephone\n- `search` - Search box\n\n## Form Attributes\n- `required` - Field required\n- `placeholder` - Hint text\n- `min/max` - Min/max values\n- `pattern` - Regex validation\n- `autocomplete` - Auto-fill\n- `disabled` - Disable field\n- `readonly` - Read-only field\n\n## Grouping with Fieldset\n```html\n<fieldset>\n    <legend>Contact Info</legend>\n    <!-- Form fields -->\n</fieldset>\n```"
                }
            ]
        },
        {
            sectionName: "♿ Module 4: Accessibility & Best Practices",
            lessons: [
                {
                    title: "4.1 Web Accessibility Basics",
                    duration: "17 min",
                    content: "# Web Accessibility Basics\n\n## What is Accessibility?\nMaking websites usable for everyone, including people with disabilities.\n\n## Why It Matters\n- **Legal requirement** - WCAG standards\n- **Ethical responsibility**\n- **Better UX for everyone**\n- **Improved SEO**\n- **Larger audience**\n\n## Accessibility Best Practices\n1. Use semantic HTML\n2. Add alt text to images\n3. Proper heading hierarchy\n4. Label form inputs\n5. Keyboard navigation\n6. Good color contrast\n7. Test with screen readers\n\n## Screen Readers\n- NVDA (Windows, Free)\n- JAWS (Windows, Paid)\n- VoiceOver (Mac, Built-in)"
                },
                {
                    title: "4.2 HTML Best Practices",
                    duration: "19 min",
                    content: "# HTML Best Practices\n\n## Do's ✅\n- Use semantic HTML\n- Validate your HTML\n- Use meaningful class names\n- Proper indentation\n- Mobile-first approach\n- Descriptive link text\n- Alt text for images\n- Good meta tags\n\n## Don'ts ❌\n- Don't use deprecated elements\n- Don't skip indentation\n- Don't nest tags incorrectly\n- Don't forget alt text\n- Don't use multiple h1 tags\n- Don't inline CSS when possible\n- Don't use vague link text (\"Click here\")\n\n## Validation\nAlways validate HTML at: https://validator.w3.org/"
                }
            ]
        },
        {
            sectionName: "🎨 Module 5: HTML5 Advanced Features",
            lessons: [
                {
                    title: "5.1 Video & Audio Tags",
                    duration: "16 min",
                    content: "# HTML5 Video & Audio Tags\n\n## Video Tag\n```html\n<video width=\"320\" height=\"240\" controls>\n    <source src=\"movie.mp4\" type=\"video/mp4\">\n    Your browser does not support video.\n</video>\n```\n\n## Video Attributes\n- `controls` - Show controls\n- `autoplay` - Auto play\n- `muted` - Start muted\n- `loop` - Repeat\n- `poster` - Thumbnail\n\n## Audio Tag\n```html\n<audio controls>\n    <source src=\"audio.mp3\" type=\"audio/mpeg\">\n    Your browser does not support audio.\n</audio>\n```\n\n## Multiple Formats\nUse multiple sources for browser compatibility!"
                },
                {
                    title: "5.2 Canvas & SVG Introduction",
                    duration: "18 min",
                    content: "# Canvas & SVG in HTML5\n\n## Canvas\n- Container for graphics\n- Drawn with JavaScript\n- Used for games, animations\n- Raster (pixel-based)\n\n```html\n<canvas id=\"myCanvas\" width=\"400\" height=\"300\"></canvas>\n```\n\n## SVG\n- Scalable Vector Graphics\n- XML-based\n- Perfect for logos, icons\n- Scales without quality loss\n\n```html\n<svg width=\"400\" height=\"300\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"red\"/>\n    <rect x=\"10\" y=\"10\" width=\"100\" height=\"50\" fill=\"blue\"/>\n</svg>\n```\n\n## Canvas vs SVG\n- Canvas: Games, animations\n- SVG: Logos, icons, diagrams"
                },
                {
                    title: "5.3 Data Attributes & APIs",
                    duration: "15 min",
                    content: "# Data Attributes & Web APIs\n\n## Data Attributes\nStore custom data on HTML elements:\n\n```html\n<div data-user-id=\"123\" data-role=\"admin\">\n    User Profile\n</div>\n```\n\n## Web APIs\n- **Geolocation** - Get user location\n- **Local Storage** - Store data locally\n- **Session Storage** - Temporary storage\n- **Fetch API** - Get data from server\n\n## Example: Local Storage\n```html\n<button onclick=\"saveName()\">Save</button>\n<button onclick=\"loadName()\">Load</button>\n\n<script>\n    function saveName() {\n        localStorage.setItem('name', 'John');\n    }\n    function loadName() {\n        alert(localStorage.getItem('name'));\n    }\n</script>\n```"
                }
            ]
        }
    ]
};

async function insertCourse() {
    try {
        // Connect with timeout
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(process.env.DATABASE_URL, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 10000,
        });
        console.log('✅ Connected!\n');

        // Get or find category
        console.log('📁 Setting up category...');
        let category = await Category.findOne({ name: 'Web Development' });
        if (!category) {
            console.log('Creating new category...');
            category = await Category.create({ name: 'Web Development' });
        }
        console.log('✅ Category ready\n');

        // Find instructor
        console.log('👨‍🏫 Finding instructor...');
        let instructor = await User.findOne({ accountType: 'Instructor' }).limit(1);
        if (!instructor) {
            console.log('❌ No instructor found! Please create an Instructor account first.');
            process.exit(1);
        }
        console.log('✅ Instructor:', instructor.firstName, instructor.lastName, '\n');

        // Create sections and lessons
        console.log('📚 Creating course content...');
        const sectionIds = [];
        let totalLessons = 0;

        for (const module of htmlCourseData.modules) {
            console.log(`\n  Creating: ${module.sectionName}`);
            
            // Create subsections (lessons)
            const subSectionIds = [];
            for (const lesson of module.lessons) {
                const subSec = await SubSection.create({
                    title: lesson.title,
                    timeDuration: lesson.duration,
                    description: lesson.content,
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
                });
                subSectionIds.push(subSec._id);
                totalLessons++;
                console.log(`    ✅ ${lesson.title}`);
            }

            // Create section
            const section = await Section.create({
                sectionName: module.sectionName,
                subSection: subSectionIds
            });
            sectionIds.push(section._id);
        }

        // Create course
        console.log('\n🎓 Creating course...');
        const course = await Course.create({
            courseName: htmlCourseData.courseName,
            courseDescription: htmlCourseData.courseDescription,
            instructor: instructor._id,
            whatYouWillLearn: htmlCourseData.whatYouWillLearn,
            price: htmlCourseData.price,
            thumbnail: htmlCourseData.thumbnail,
            category: category._id,
            tag: htmlCourseData.tag,
            instructions: htmlCourseData.instructions,
            courseContent: sectionIds,
            status: 'Published',
            studentsEnrolled: [],
            ratingAndReviews: []
        });

        // Update category
        await Category.findByIdAndUpdate(
            category._id,
            { $push: { courses: course._id } }
        );

        console.log('\n✨ SUCCESS! Course created!');
        console.log('\n📊 Summary:');
        console.log('   Course:', htmlCourseData.courseName);
        console.log('   Modules:', sectionIds.length);
        console.log('   Lessons:', totalLessons);
        console.log('   Price: ₹' + htmlCourseData.price);
        console.log('   Status: Published');
        console.log('\n✅ HTML course is now in your catalog!');
        
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        if (error.message.includes('ECONNREFUSED')) {
            console.error('\n⚠️  MongoDB Connection Failed');
            console.error('Make sure MongoDB Atlas is accessible or MongoDB is running locally');
        }
        process.exit(1);
    }
}

insertCourse();
