export const responsiveCourseData = {
    _id: "rwd-course-001",
    courseName: "Responsive Web Design - Complete Guide",
    courseDescription: "Master responsive web design from scratch. Learn media queries, flexbox, CSS Grid, mobile-first design, and build websites that look perfect on every device.",
    instructor: {
        firstName: "Study",
        lastName: "Notion",
        _id: "instructor-001"
    },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png",
    whatYouWillLearn: "\u2022 Understand responsive design principles and mobile-first approach\n\u2022 Master CSS media queries for all screen sizes\n\u2022 Build flexible layouts with Flexbox\n\u2022 Create complex grid systems with CSS Grid\n\u2022 Implement responsive images, typography, and navigation\n\u2022 Use modern CSS units like rem, em, vw, vh\n\u2022 Build real-world responsive projects from scratch",

    courseContent: [
        {
            sectionName: "\ud83d\udcf1 Module 1: Responsive Design Fundamentals",
            lessons: [
                {
                    title: "1.1 What is Responsive Web Design?",
                    duration: "15 min",
                    content: `# What is Responsive Web Design?

## Definition
Responsive Web Design (RWD) is an approach to web design that makes web pages render well on a variety of devices and screen sizes - from mobile phones to desktop monitors.

## Why Responsive Design Matters

### The Mobile Reality
- Over 60% of web traffic comes from mobile devices
- Google uses mobile-first indexing for search rankings
- Users expect seamless experiences across all devices

### Key Principles
- Fluid grids that use relative units instead of fixed pixels
- Flexible images that scale within their containers
- Media queries that apply different styles based on device characteristics

## The Viewport Meta Tag

Every responsive page needs this in the head:
\\\`\\\`\\\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\\\`\\\`\\\`

Without this tag, mobile browsers will render the page at a desktop width and then scale it down, making text tiny and hard to read.

## Fixed vs Responsive Design

### Fixed Design (Old Way)
- Uses pixel-based widths (e.g., width: 960px)
- Looks good only on one screen size
- Requires horizontal scrolling on small screens

### Responsive Design (Modern Way)
- Uses percentage-based widths and relative units
- Adapts to any screen size automatically
- No horizontal scrolling needed

## Mobile-First vs Desktop-First

### Mobile-First Approach (Recommended)
- Start designing for the smallest screen
- Add complexity as screen size increases
- Results in cleaner, more focused code
- Better performance on mobile devices

### Desktop-First Approach
- Start with the full desktop design
- Remove features for smaller screens
- Can lead to bloated mobile experiences

## Breakpoints - Common Screen Sizes

- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Laptop: 769px - 1024px
- Desktop: 1025px - 1200px
- Large screens: 1201px and above

## Tools for Testing Responsiveness

- Browser DevTools (F12 > Toggle device toolbar)
- Chrome Device Mode
- Firefox Responsive Design Mode
- Real devices for final testing`
                },
                {
                    title: "1.2 CSS Units for Responsive Design",
                    duration: "18 min",
                    content: `# CSS Units for Responsive Design

## Absolute vs Relative Units

### Absolute Units (Avoid for responsive)
- px - pixels (fixed, doesn't scale)
- pt - points
- cm, mm, in - physical units

### Relative Units (Use for responsive)

## The rem Unit
- Relative to root element font size (usually 16px)
- 1rem = 16px by default
- Consistent and predictable

\\\`\\\`\\\`css
html {
    font-size: 16px; /* base */
}

h1 {
    font-size: 2rem; /* = 32px */
}

p {
    font-size: 1rem; /* = 16px */
    margin-bottom: 1.5rem; /* = 24px */
}
\\\`\\\`\\\`

## The em Unit
- Relative to parent element font size
- Can compound (nested elements multiply)
- Good for component-level scaling

## Viewport Units
- vw - 1% of viewport width
- vh - 1% of viewport height
- vmin - 1% of smaller dimension
- vmax - 1% of larger dimension

\\\`\\\`\\\`css
.hero {
    height: 100vh; /* full viewport height */
    width: 100vw; /* full viewport width */
}

.title {
    font-size: 5vw; /* scales with screen width */
}
\\\`\\\`\\\`

## Percentage
- Relative to parent element
- Most commonly used for widths

\\\`\\\`\\\`css
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.column {
    width: 50%; /* half of parent */
}
\\\`\\\`\\\`

## Best Practices
- Use rem for font sizes
- Use % for widths
- Use vh/vw for full-screen sections
- Use max-width to prevent content from stretching too wide
- Avoid px for layout (use it only for borders, shadows)`
                },
                {
                    title: "1.3 Media Queries",
                    duration: "20 min",
                    content: `# CSS Media Queries

## What Are Media Queries?
Media queries let you apply CSS rules only when certain conditions are met, like screen width, height, or orientation.

## Basic Syntax

\\\`\\\`\\\`css
/* Mobile first - base styles for small screens */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 20px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        width: 960px;
        padding: 30px;
    }
}
\\\`\\\`\\\`

## Common Breakpoints

\\\`\\\`\\\`css
/* Small phones */
@media (min-width: 480px) { }

/* Tablets */
@media (min-width: 768px) { }

/* Laptops */
@media (min-width: 1024px) { }

/* Desktops */
@media (min-width: 1200px) { }

/* Large screens */
@media (min-width: 1440px) { }
\\\`\\\`\\\`

## Orientation Queries

\\\`\\\`\\\`css
@media (orientation: portrait) {
    /* Styles for portrait mode */
}

@media (orientation: landscape) {
    /* Styles for landscape mode */
}
\\\`\\\`\\\`

## Combining Conditions

\\\`\\\`\\\`css
/* Between tablet and laptop */
@media (min-width: 768px) and (max-width: 1023px) {
    .sidebar {
        display: none;
    }
}
\\\`\\\`\\\`

## Mobile-First Example

\\\`\\\`\\\`css
/* Base: Mobile */
.nav { display: none; }
.hamburger { display: block; }

/* Tablet: Show nav */
@media (min-width: 768px) {
    .nav { display: flex; }
    .hamburger { display: none; }
}
\\\`\\\`\\\`

## Tips
- Always use min-width for mobile-first
- Don't create too many breakpoints
- Test on real devices, not just browser tools
- Group media queries at the end of your CSS or with their related component`
                }
            ]
        },
        {
            sectionName: "\ud83d\udcce Module 2: Flexbox for Responsive Layouts",
            lessons: [
                {
                    title: "2.1 Flexbox Fundamentals",
                    duration: "22 min",
                    content: `# Flexbox Fundamentals

## What is Flexbox?
Flexbox (Flexible Box Layout) is a CSS layout method designed for distributing space and aligning items in a container, even when their sizes are unknown.

## Enabling Flexbox

\\\`\\\`\\\`css
.container {
    display: flex;
}
\\\`\\\`\\\`

That's it! All direct children become flex items.

## Flex Direction
Controls the main axis (direction items flow):

\\\`\\\`\\\`css
.container {
    display: flex;
    flex-direction: row;          /* default: left to right */
    flex-direction: row-reverse;  /* right to left */
    flex-direction: column;       /* top to bottom */
    flex-direction: column-reverse; /* bottom to top */
}
\\\`\\\`\\\`

## Justify Content
Aligns items along the MAIN axis:

\\\`\\\`\\\`css
.container {
    display: flex;
    justify-content: flex-start;    /* items at start */
    justify-content: flex-end;      /* items at end */
    justify-content: center;        /* items centered */
    justify-content: space-between; /* equal space between */
    justify-content: space-around;  /* equal space around */
    justify-content: space-evenly;  /* truly equal spacing */
}
\\\`\\\`\\\`

## Align Items
Aligns items along the CROSS axis:

\\\`\\\`\\\`css
.container {
    display: flex;
    align-items: stretch;     /* default: fill container height */
    align-items: flex-start;  /* items at top */
    align-items: flex-end;    /* items at bottom */
    align-items: center;      /* items vertically centered */
}
\\\`\\\`\\\`

## Flex Wrap
Controls whether items wrap to new lines:

\\\`\\\`\\\`css
.container {
    display: flex;
    flex-wrap: nowrap;  /* default: all on one line */
    flex-wrap: wrap;    /* wrap to new lines */
}
\\\`\\\`\\\`

## Gap
Adds spacing between flex items:

\\\`\\\`\\\`css
.container {
    display: flex;
    gap: 20px;          /* equal gap in all directions */
    row-gap: 20px;      /* gap between rows */
    column-gap: 10px;   /* gap between columns */
}
\\\`\\\`\\\`

## Real Example: Responsive Navigation

\\\`\\\`\\\`css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }
}
\\\`\\\`\\\``
                },
                {
                    title: "2.2 Flex Item Properties",
                    duration: "18 min",
                    content: `# Flex Item Properties

## flex-grow
Controls how much an item grows relative to others:

\\\`\\\`\\\`css
.item-1 { flex-grow: 1; } /* takes 1 part */
.item-2 { flex-grow: 2; } /* takes 2 parts */
.item-3 { flex-grow: 1; } /* takes 1 part */
/* Total: 4 parts. item-2 gets 50%, others get 25% each */
\\\`\\\`\\\`

## flex-shrink
Controls how much an item shrinks when space is tight:

\\\`\\\`\\\`css
.item { flex-shrink: 0; }  /* won't shrink */
.item { flex-shrink: 1; }  /* default: shrinks equally */
.item { flex-shrink: 2; }  /* shrinks twice as much */
\\\`\\\`\\\`

## flex-basis
Sets the initial size of a flex item before growing/shrinking:

\\\`\\\`\\\`css
.item { flex-basis: 200px; }  /* start at 200px */
.item { flex-basis: 30%; }    /* start at 30% of container */
.item { flex-basis: auto; }   /* use content size */
\\\`\\\`\\\`

## The flex Shorthand
Combines grow, shrink, and basis:

\\\`\\\`\\\`css
.item {
    flex: 1;           /* grow:1, shrink:1, basis:0 */
    flex: 0 0 300px;   /* don't grow, don't shrink, 300px wide */
    flex: 1 1 auto;    /* grow and shrink equally, auto basis */
}
\\\`\\\`\\\`

## Responsive Card Layout with Flexbox

\\\`\\\`\\\`css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* grow, shrink, min 300px */
    /* Cards auto-wrap when less than 300px available */
}
\\\`\\\`\\\`

This single line creates a fully responsive card grid without any media queries!`
                }
            ]
        },
        {
            sectionName: "\ud83d\udcca Module 3: CSS Grid for Responsive Layouts",
            lessons: [
                {
                    title: "3.1 CSS Grid Basics",
                    duration: "22 min",
                    content: `# CSS Grid Basics

## What is CSS Grid?
CSS Grid is a two-dimensional layout system. While Flexbox handles one direction (row OR column), Grid handles both rows AND columns at once.

## Creating a Grid

\\\`\\\`\\\`css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px; /* 3 equal columns */
    grid-template-rows: 100px 100px;          /* 2 rows */
    gap: 20px;
}
\\\`\\\`\\\`

## The fr Unit
The fr (fraction) unit divides available space:

\\\`\\\`\\\`css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* middle is twice as wide */
    gap: 20px;
}
\\\`\\\`\\\`

## repeat() Function
Shorthand for repeated patterns:

\\\`\\\`\\\`css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);   /* 3 equal columns */
    grid-template-columns: repeat(4, 200px); /* 4 columns at 200px */
}
\\\`\\\`\\\`

## minmax() for Responsive Columns

\\\`\\\`\\\`css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
\\\`\\\`\\\`

This creates a fully responsive grid - columns auto-wrap and resize between 250px minimum and equal fraction maximum. No media queries needed!

## Grid Alignment

\\\`\\\`\\\`css
.container {
    display: grid;
    justify-items: center;  /* horizontal alignment */
    align-items: center;    /* vertical alignment */
    place-items: center;    /* both at once */
}
\\\`\\\`\\\`

## Grid Template Areas
Name your grid areas for readable layouts:

\\\`\\\`\\\`css
.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
\\\`\\\`\\\`

## Responsive Grid with Template Areas

\\\`\\\`\\\`css
/* Mobile: single column stack */
.container {
    display: grid;
    grid-template-areas:
        "header"
        "main"
        "sidebar"
        "footer";
}

/* Desktop: sidebar layout */
@media (min-width: 768px) {
    .container {
        grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer";
        grid-template-columns: 250px 1fr;
    }
}
\\\`\\\`\\\``
                },
                {
                    title: "3.2 Grid vs Flexbox - When to Use Which",
                    duration: "15 min",
                    content: `# Grid vs Flexbox - When to Use Which

## Quick Rule of Thumb

- Flexbox = ONE dimension (row OR column)
- Grid = TWO dimensions (rows AND columns)

## Use Flexbox When:
- Aligning items in a single row or column
- Building navigation bars
- Centering content
- Creating flexible card rows
- Items should distribute space in one direction

## Use Grid When:
- Creating page layouts with headers, sidebars, footers
- Building image galleries with specific placement
- You need items to align in both rows AND columns
- Creating complex, overlapping layouts
- You want named template areas

## They Work Great Together!

\\\`\\\`\\\`css
/* Grid for page layout */
.page {
    display: grid;
    grid-template-areas:
        "header"
        "main"
        "footer";
}

/* Flexbox for navigation inside header */
.header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Grid for card gallery in main */
.main .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Flexbox for card content */
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
\\\`\\\`\\\`

## Summary
- Use Grid for the overall page structure
- Use Flexbox for component-level layouts
- Combine them for the best results`
                }
            ]
        },
        {
            sectionName: "\ud83d\uddbc\ufe0f Module 4: Responsive Images & Typography",
            lessons: [
                {
                    title: "4.1 Responsive Images",
                    duration: "16 min",
                    content: `# Responsive Images

## Basic Responsive Image

\\\`\\\`\\\`css
img {
    max-width: 100%;
    height: auto;
}
\\\`\\\`\\\`

This ensures images never exceed their container width and maintain their aspect ratio.

## Object-Fit for Image Containers

\\\`\\\`\\\`css
.image-container {
    width: 100%;
    height: 300px;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;    /* fills container, may crop */
    object-fit: contain;  /* fits inside, may leave space */
    object-fit: fill;     /* stretches to fill */
}
\\\`\\\`\\\`

## The picture Element for Art Direction

\\\`\\\`\\\`html
<picture>
    <source media="(min-width: 1024px)" srcset="hero-large.jpg">
    <source media="(min-width: 768px)" srcset="hero-medium.jpg">
    <img src="hero-small.jpg" alt="Hero image">
</picture>
\\\`\\\`\\\`

Different images for different screen sizes - a cropped version for mobile, full image for desktop.

## Lazy Loading
Delay loading images until they're needed:

\\\`\\\`\\\`html
<img src="photo.jpg" alt="Description" loading="lazy">
\\\`\\\`\\\`

## Responsive Background Images

\\\`\\\`\\\`css
.hero {
    background-image: url('hero-mobile.jpg');
    background-size: cover;
    background-position: center;
}

@media (min-width: 768px) {
    .hero {
        background-image: url('hero-desktop.jpg');
    }
}
\\\`\\\`\\\``
                },
                {
                    title: "4.2 Responsive Typography",
                    duration: "14 min",
                    content: `# Responsive Typography

## The Problem
Fixed font sizes look great on desktop but too large or too small on mobile.

## Solution 1: Media Queries

\\\`\\\`\\\`css
h1 { font-size: 1.5rem; }     /* Mobile */

@media (min-width: 768px) {
    h1 { font-size: 2rem; }    /* Tablet */
}

@media (min-width: 1024px) {
    h1 { font-size: 3rem; }    /* Desktop */
}
\\\`\\\`\\\`

## Solution 2: clamp() - The Best Way

\\\`\\\`\\\`css
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
    /* minimum: 1.5rem, preferred: 4vw, maximum: 3rem */
}

p {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
}
\\\`\\\`\\\`

clamp() automatically scales between a minimum and maximum value. No media queries needed!

## Responsive Line Height

\\\`\\\`\\\`css
body {
    line-height: 1.6;  /* use unitless values */
}

h1 {
    line-height: 1.2;  /* tighter for headings */
}
\\\`\\\`\\\`

## Responsive Spacing with clamp()

\\\`\\\`\\\`css
.section {
    padding: clamp(1rem, 5vw, 4rem);
    margin-bottom: clamp(2rem, 8vw, 6rem);
}
\\\`\\\`\\\`

## A Complete Responsive Type Scale

\\\`\\\`\\\`css
:root {
    --text-xs: clamp(0.75rem, 1vw, 0.875rem);
    --text-sm: clamp(0.875rem, 1.2vw, 1rem);
    --text-base: clamp(1rem, 1.5vw, 1.125rem);
    --text-lg: clamp(1.125rem, 2vw, 1.5rem);
    --text-xl: clamp(1.5rem, 3vw, 2rem);
    --text-2xl: clamp(2rem, 4vw, 3rem);
    --text-3xl: clamp(2.5rem, 5vw, 4rem);
}

h1 { font-size: var(--text-3xl); }
h2 { font-size: var(--text-2xl); }
h3 { font-size: var(--text-xl); }
p  { font-size: var(--text-base); }
\\\`\\\`\\\``
                }
            ]
        },
        {
            sectionName: "\ud83d\udee0\ufe0f Module 5: Responsive Navigation & Components",
            lessons: [
                {
                    title: "5.1 Responsive Navigation Patterns",
                    duration: "20 min",
                    content: `# Responsive Navigation Patterns

## The Hamburger Menu Pattern

The most common mobile navigation pattern:

### HTML Structure
\\\`\\\`\\\`html
<nav class="navbar">
    <div class="logo">MySite</div>
    <button class="hamburger" id="hamburger">&#9776;</button>
    <ul class="nav-links" id="navLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
\\\`\\\`\\\`

### CSS
\\\`\\\`\\\`css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #333;
}

.nav-links {
    display: none;
    list-style: none;
}

.nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #333;
}

.hamburger {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

@media (min-width: 768px) {
    .nav-links {
        display: flex;
        gap: 2rem;
    }
    .hamburger {
        display: none;
    }
}
\\\`\\\`\\\`

### JavaScript
\\\`\\\`\\\`javascript
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
\\\`\\\`\\\`

## Other Navigation Patterns

### Bottom Navigation (Mobile Apps)
- Fixed at the bottom of screen
- 3-5 icon buttons
- Good for app-like experiences

### Off-Canvas Menu
- Slides in from the side
- Full height panel
- Good for complex navigation with subcategories

## Best Practices
- Keep mobile navigation simple (max 5-7 items)
- Make touch targets at least 44px x 44px
- Use clear, recognizable icons
- Always provide a way to close the menu`
                },
                {
                    title: "5.2 Building a Complete Responsive Page",
                    duration: "25 min",
                    content: `# Building a Complete Responsive Page

## The Full Example

Here's how to put everything together to build a complete responsive webpage:

### HTML Structure
\\\`\\\`\\\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Page</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="logo">Brand</div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="main">
        <section class="hero">
            <h1>Welcome to Our Site</h1>
            <p>Building responsive websites made easy</p>
        </section>

        <section class="cards">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
        </section>
    </main>

    <footer class="footer">
        <p>Footer content</p>
    </footer>
</body>
</html>
\\\`\\\`\\\`

### Responsive CSS
\\\`\\\`\\\`css
/* Reset & Base */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui, sans-serif; }

/* Mobile-First Styles */
.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: #1a1a2e;
    color: white;
}

.hero {
    padding: clamp(2rem, 8vw, 6rem) clamp(1rem, 5vw, 4rem);
    text-align: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.hero h1 {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
}

.cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: clamp(1rem, 5vw, 4rem);
}

.card {
    background: #f4f4f4;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
}

/* Tablet */
@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
    }

    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .cards {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1200px;
        margin: 0 auto;
    }
}
\\\`\\\`\\\`

## Key Takeaways
- Start with mobile styles as your base
- Use relative units (rem, %, vw) instead of px
- Use clamp() for fluid typography and spacing
- Use CSS Grid with auto-fit/minmax for card layouts
- Add media queries to enhance layout at larger screens
- Test on real devices whenever possible

Congratulations! You now have the skills to build fully responsive websites!`
                }
            ]
        }
    ]
};
