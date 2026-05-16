// CSS Course Data (Hardcoded)
export const cssCourseData = {
    _id: "css-course-001",
    courseName: "CSS - Basic to Advanced",
    courseDescription: "Master CSS from basics to advanced. Learn selectors, layouts, animations, responsive design, and modern CSS techniques used by professional web developers.",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    customLink: "/css-course",
    ratingAndReviews: [1, 2, 3, 4, 5],
    instructor: {
        firstName: "Study",
        lastName: "Notion",
        _id: "instructor-001"
    },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    ratingAndReviews: [],
    whatYouWillLearn: "• Master CSS selectors and properties\n• Create layouts with Flexbox and CSS Grid\n• Build responsive websites\n• Create animations and transitions\n• Implement modern CSS techniques\n• Optimize performance and accessibility",
    
    courseContent: [
        {
            sectionName: "🎨 Module 1: CSS Fundamentals",
            lessons: [
                {
                    title: "1.1 Introduction to CSS",
                    duration: "18 min",
                    content: `# Introduction to CSS: The Art of Web Design

CSS stands for Cascading Style Sheets. If HTML is the structure of a building, CSS is the interior design, paint, lighting, and decoration that makes it beautiful.

## What is CSS Really?

CSS is a language that controls HOW web pages look. It describes the appearance and layout of elements on a page. Without CSS, websites would look plain—just text and images with no colors, no spacing, no design.

Think about it: Gmail has a clean white interface, Instagram has a dark aesthetic with bold colors, Netflix has a premium dark theme with red highlights. All these designs are created with CSS!

## Why CSS Matters in Your Career

### Reason 1: Design Skills Are Highly Valued
Frontend developers who understand CSS deeply earn 15-25% more than those who don't. Companies need developers who can turn designs into pixel-perfect websites. Figma designers create mockups, and CSS developers bring them to life.

### Reason 2: It's Essential for Every Website
Every modern website uses CSS. From tiny startups to Fortune 500 companies like Apple, Amazon, and Google, all use CSS. If you want to build websites professionally, CSS is non-negotiable.

### Reason 3: Job Security and Flexibility
CSS skills don't become obsolete. For over 25 years, CSS has been the standard for web styling. New features are added regularly (CSS Grid in 2017, modern features in 2023-2024), but the fundamentals remain.

### Reason 4: Creative Expression
Unlike programming languages that follow strict logic, CSS lets you be creative. The same HTML can look completely different with different CSS. You can create beautiful animations, interactive effects, and stunning visual experiences.

## The Three Pillars of Frontend Development

### HTML = Content
- What information is on the page
- The structure and semantics
- Like the skeleton of a building

### CSS = Presentation
- How the content looks
- Colors, fonts, spacing, animations
- Like the interior design and decoration

### JavaScript = Behavior
- What happens when users interact
- Dynamic changes and responses
- Like the electrical system responding to actions

## Real-World CSS Examples

**Google Search:** The clean, minimalist design uses simple CSS. Two lines of centered text, a search box, buttons. That's it. But it's perfectly styled.

**YouTube:** Thousands of videos displayed in a grid layout. That grid is created with CSS Grid or Flexbox. The hover effects, animations, and responsive design? Pure CSS (with a little JavaScript).

**Netflix:** A dark theme with bold red accent colors. Smooth transitions when hovering over content. Responsive layout that works on phones, tablets, and TVs. All powered by CSS.

**Figma:** A complex design tool with a beautiful interface. Precise layouts, smooth animations, responsive panels. Built with modern CSS.

## Common Misconceptions About CSS

### False: "CSS is just making things look pretty"
True: CSS is powerful and complex. Professional CSS requires understanding layouts, responsive design, performance optimization, accessibility, and cross-browser compatibility. It's an engineering skill, not just decoration.

### False: "You can copy CSS from the internet and it will work"
True: While you can learn from others' code, copying without understanding leads to bloated code, poor performance, and maintenance nightmares. Companies hire developers who write clean, maintainable CSS.

### False: "CSS is easy compared to JavaScript"
True: CSS has its own complexity. Media queries, specificity conflicts, browser compatibility, performance issues, and responsive design require deep understanding.

### False: "Mobile design is JavaScript's job"
True: Responsive design is primarily CSS's job. Media queries, flexible layouts, and flexible units are CSS features. JavaScript enhances interactivity but CSS creates the responsive layout.

## What This Course Teaches

Module 1: Fundamentals - Selectors, properties, how CSS works
Module 2: Selectors & Properties - Deep dive into powerful selectors and useful properties
Module 3: Layouts - Flexbox, CSS Grid, positioning
Module 4: Animations & Effects - Transitions, animations, transforms
Module 5: Responsive Design - Mobile-first design, media queries, best practices

By the end, you'll write professional CSS that:
- Works across all browsers and devices
- Performs fast and loads quick
- Is easy to maintain and update
- Follows industry best practices
- Passes accessibility requirements

## The Power of Good CSS

Bad CSS makes websites look broken and ugly. Good CSS makes websites beautiful, functional, and fast.

Professional CSS developers at companies like Google, Microsoft, and Adobe earn $120,000-$200,000+ per year. That's because well-written CSS directly impacts user experience, which directly impacts business success.

The better your CSS skills, the more valuable you become to companies.

## Let's Build Something Beautiful

Next lesson, you'll learn how CSS works and how to apply it to HTML. Then you'll learn selectors—the foundation of all CSS power. By module 3, you'll be creating professional layouts. By module 5, you'll be building fully responsive websites.

Are you ready to become a CSS expert? Let's get started!`
                },
                {
                    title: "1.2 How CSS Works",
                    duration: "16 min",
                    content: `# How CSS Works: Understanding the CSS Engine

CSS is a simple language—you select an element and apply properties to it. But understanding HOW it works unlocks advanced techniques.

## The Three Ways to Apply CSS

### 1. Inline CSS (Not Recommended)
CSS applied directly in HTML tags using the style attribute. This is the weakest approach because it's hard to maintain and reuse.

Example: Apply color directly to an element
This is fast for one element but bad for large projects.

### 2. Internal CSS (For Learning)
CSS written in a style tag inside the HTML document. Good for small projects and learning but hard to maintain as projects grow.

Example: Write CSS in a style tag in the head
All styles for this page in one place, but not reusable across pages.

### 3. External CSS (Professional Standard)
CSS written in separate .css files and linked to HTML. This is what professionals use.

Example: Create style.css and link it
Best approach because:
- Styles are reusable across all HTML pages
- Easy to maintain and update
- Browsers cache the CSS file (faster loading)
- Separates structure (HTML) from presentation (CSS)

## The CSS Cascade

CSS stands for Cascading Style Sheets. Cascade means "falling like a waterfall." When multiple styles apply to an element, CSS follows specific rules to decide which style wins.

### Specificity: The Pecking Order

Imagine three bosses giving you conflicting orders. You follow the highest-ranking boss. CSS works the same way.

Specificity ranking (highest to lowest):
1. Inline styles (style attribute)
2. IDs (unique identifiers)
3. Classes (reusable selectors)
4. Elements (HTML tags)

Example: If an element has both a class and element selector, the class wins.

### Inheritance: Passing Down Styles

Some CSS properties automatically pass from parent elements to children. For example, font-family and color pass down. But width and height don't (that would break layouts).

Think of inheritance like family traits. Eye color passes from parents to children (inheritance). But a parent's job doesn't automatically pass to children (no inheritance).

### Cascade: The Waterfall

When multiple styles are equally specific, the last one wins. Like a waterfall, styles cascade downward, with later styles overwriting earlier ones.

Example: If you define color twice, the second definition wins.

## The Box Model: Understanding Layout

Every element in CSS is a box. This box consists of:

1. Content: The actual element (text, image, etc.)
2. Padding: Space inside the box, around the content
3. Border: The line around the box
4. Margin: Space outside the box, between this box and others

Think of a postal package:
- Content = The gift inside
- Padding = Bubble wrap protecting the gift
- Border = The cardboard box
- Margin = Space between boxes on a truck

Understanding the box model is essential for layouts and spacing.

## How Browsers Render CSS

When you open a website, the browser follows these steps:

1. **Parse HTML:** Browser reads the HTML and creates a structure
2. **Load CSS:** Browser downloads and reads all CSS files
3. **Match Selectors:** Browser checks which CSS rules apply to each HTML element
4. **Calculate Styles:** Browser combines inherited styles, cascade rules, and specificity
5. **Layout:** Browser calculates positions and sizes based on CSS properties
6. **Paint:** Browser draws pixels on screen
7. **Composite:** Browser combines layers and displays the final result

Any CSS change triggers steps 4-7 again. This is why poorly written CSS can make websites slow!

## Selectors: The Heart of CSS

Selectors are the first part of a CSS rule. They tell CSS which HTML elements to style.

### Element Selectors
Select all elements of a type. Example: Select all paragraphs

Simple but applies to ALL paragraphs. Sometimes you want only some.

### Class Selectors
Select elements with a specific class. Example: Select all elements with class="featured"

Reusable—many elements can have the same class. This is how professional CSS works.

### ID Selectors
Select a single unique element. Example: Select element with id="main-header"

Very specific. Use rarely because IDs should be unique.

### Combining Selectors
Chain selectors for more control:
- Descendant: Select paragraphs inside a specific container
- Child: Select direct children only
- Siblings: Select elements at the same level

## Responsive CSS: Mobile-First Thinking

Modern CSS is about creating designs that work on phones, tablets, and desktops.

### Flexible Units
Don't use fixed pixels for everything. Use percentages, em, and rem for flexibility.

Example: Width as percentage adapts to screen size

### Media Queries
CSS rules that apply only at certain screen sizes.

Example: Different styles for phones vs. desktops

This is how websites look different on mobile vs. desktop—same HTML, different CSS.

## The CSS You'll Master

By the end of this course, you'll understand:
- How to write clean, maintainable CSS
- Advanced selectors that solve real problems
- Layouts that work on all devices
- Animations that delight users
- Performance optimization
- Accessibility compliance
- Industry best practices

These skills make you a professional CSS developer.

Next lesson: Master CSS selectors—the most powerful part of CSS!`
                },
                {
                    title: "1.3 CSS Syntax and Rules",
                    duration: "12 min",
                    content: `# CSS Syntax: The Grammar of Web Design

CSS has simple syntax. Once you understand the rules, you can write powerful styles.

## The CSS Rule Structure

Every CSS rule has three parts:

1. **Selector:** Which elements to style
2. **Property:** What aspect to change (color, size, etc.)
3. **Value:** What value to set (red, 20px, etc.)

Example structure:
selector { property: value; }

The property and value together form a declaration. Multiple declarations go inside curly braces.

## Basic Example

Select all headings and make them blue with 32px font size.

h1 { color: blue; font-size: 32px; }

Breaking it down:
- h1 = Selector (target heading elements)
- color = Property (which aspect to change)
- blue = Value (specific change)
- font-size = Another property
- 32px = Another value (px = pixels)

## Important Syntax Rules

### 1. Use Curly Braces for Declarations
All properties go inside { }

Correct: h1 { color: blue; }
Wrong: h1 color: blue

### 2. End Each Declaration with a Semicolon
Each property: value pair ends with ;

Correct: h1 { color: blue; font-size: 32px; }
Wrong: h1 { color: blue font-size: 32px }

The last semicolon is optional but always include it for consistency.

### 3. Use Lowercase for Keywords
CSS keywords should be lowercase (though technically case-insensitive)

Correct: h1 { color: blue; }
Fine: h1 { color: BLUE; }
Confusing: h1 { color: Blue; }

### 4. No Spaces in Property Names
Property names are hyphenated if multi-word, with no spaces.

Correct: font-size
Wrong: font size or fontsize

## Understanding Units in CSS

CSS uses different measurement units depending on context.

### Pixels (px)
Absolute unit. 1px = 1 dot on screen. Most precise.
Use for: Borders, small adjustments, sometimes font sizes

### Percentages (%)
Relative to parent element. Flexible and responsive.
Use for: Widths, responsive layouts

### em
Relative to element's font size. For example, 1em = current font size.
Use for: Padding, margins, responsive sizing

### rem
Relative to root (html) font size. Consistent throughout page.
Use for: Font sizes, spacing that scales together

### vh, vw
Viewport height/width. Percentage of screen size.
Use for: Full-screen sections, viewport-based sizing

## Comments in CSS

Comments explain your code. Browsers ignore them.

Format: /* Comment text */

Example:
/* This is a comment */
h1 { color: blue; } /* Make headings blue */

Use comments to explain WHY you did something, not just WHAT.

## CSS Classes and IDs

### Classes
Reusable selectors for styling multiple elements.

Use class attribute in HTML and . prefix in CSS

Multiple elements can share the same class.

### IDs
Unique selectors for single elements.

Use id attribute in HTML and # prefix in CSS

Each ID should appear only once per page.

## Grouping Selectors

Apply the same styles to multiple selectors using commas.

Example: Make all headings blue

h1, h2, h3 { color: blue; }

Instead of writing three separate rules, group them. This follows DRY principle (Don't Repeat Yourself).

## Valid CSS Values

Different properties accept different value types.

### Color Values
Keywords: red, blue, green, transparent
Hexadecimal: #FF0000 (red), #00FF00 (green)
RGB: rgb(255, 0, 0) (red)
HSL: hsl(0, 100%, 50%) (red)

All these represent the same color—red. Use whichever is convenient.

### Size Values
Absolute: px (pixels)
Relative: %, em, rem, vh, vw
Keywords: auto, inherit

### Text Values
Keywords: bold, italic, underline
Multiple values: Can specify multiple related properties

## Common CSS Properties

### Text Properties
- color: Text color
- font-size: Text size
- font-family: Font type
- font-weight: Boldness
- text-align: Left, center, right, justify

### Box Properties
- width: Element width
- height: Element height
- margin: Outside spacing
- padding: Inside spacing
- border: Outline

### Background Properties
- background-color: Fill color
- background-image: Image fill
- opacity: Transparency (0-1)

### Layout Properties
- display: How element is displayed (block, inline, flex, grid)
- position: Absolute, relative, fixed, sticky
- z-index: Layering order

## Writing Clean CSS

Best practices:
- Use meaningful class names (not class="red" but class="button-danger")
- One declaration per line (easier to read)
- Consistent indentation
- Organize by component or page section
- Use comments for complex logic
- Avoid deeply nested selectors

Example of clean CSS:

/* Navigation styles */
.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar-link {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

Each section clearly organized and readable.

## Next Steps

Now you understand CSS syntax and structure. Next lesson dives into selectors—the most powerful part of CSS that lets you target any element with precision.`
                },
                {
                    title: "1.4 Your First CSS Project",
                    duration: "14 min",
                    content: `# Creating Your First CSS Project: From Concept to Beautiful Website

Time to put theory into practice! Let's create a complete, styled website from scratch.

## Project Overview

You'll create a professional portfolio website with:
- A styled header with navigation
- A hero section with background image
- Multiple content sections
- A footer
- Fully responsive on mobile and desktop

This is a real project you can show to employers.

## Step 1: Create Project Files

Create a folder structure:
- portfolio/
  - index.html (HTML structure)
  - style.css (CSS styling)
  - images/ (folder for images)

## Step 2: Start with HTML Structure

Create index.html with semantic HTML:

Header with navigation menu
Hero section with headline and call-to-action
About section describing yourself
Portfolio section showing projects
Contact section
Footer

Use semantic HTML tags like header, nav, section, article, footer instead of generic divs.

## Step 3: Add Basic CSS Reset

All browsers have default styles. Reset them for consistency:

Reset removes default margins, padding, and sets consistent fonts.

This is standard practice in all professional projects. Now your baseline is consistent across browsers.

## Step 4: Style the Navigation

Make a professional navigation bar:

Add background color, padding for spacing, and styling for links.

Horizontal layout with proper spacing. Links change appearance on hover (interactive feedback).

## Step 5: Create Hero Section

The hero is the first thing users see:

Full width, tall section with background image
White text that stands out against the dark image
Centered headline and call-to-action button

Hero sections are used by Apple, Microsoft, Airbnb. Professional and effective.

## Step 6: Style Content Sections

Create consistent styling across sections:

Padding for breathing room
Maximum width to prevent too-wide text (hard to read)
Clear hierarchy with headings
Cards for projects or features

## Step 7: Make it Responsive

Add media queries for mobile devices:

On mobile (screens smaller than 768px):
- Stack elements vertically instead of side-by-side
- Larger touch targets for buttons
- Simplified navigation (maybe a hamburger menu)
- Adjusted font sizes for readability

Same HTML, different CSS at different screen sizes. That's responsive design.

## Step 8: Add Interactive Touches

Use CSS transitions and hover effects:

Buttons darken when you hover over them
Links change color
Smooth transitions make interactions feel smooth and professional

No JavaScript needed—pure CSS!

## Real Project Examples

Airbnb homepage:
- Hero section with large background image
- Navigation bar with search
- Cards showing listings
- Responsive to all devices

Asana project management:
- Clean navigation
- Hero section
- Feature sections with images
- Professional typography
- Fully responsive

These aren't just pretty—they're functional, accessible, and performant.

## Common Mistakes to Avoid

### Mistake 1: Hardcoding Colors
Don't scatter color values throughout CSS

Bad: Specify the same color #3498db everywhere

Good: Define colors in one place

Now if brand changes color, update once instead of everywhere.

### Mistake 2: Ignoring Mobile Design
Desktop-only thinking is outdated. Mobile-first is industry standard.

Always design for mobile first, then enhance for larger screens.

### Mistake 3: Ignoring Typography
Good typography is invisible but makes huge difference in professionalism.

- Use 2-3 fonts maximum
- Maintain good line spacing (around 1.5 for readability)
- Sufficient contrast for accessibility
- Readable font sizes (14px minimum for body text)

### Mistake 4: Inconsistent Spacing
Random padding/margins make sites look amateurish.

Use a spacing scale: 8px, 16px, 24px, 32px, etc.
Consistent spacing looks professional.

### Mistake 5: Ignored Performance
Large images, inefficient selectors slow down sites.

Optimize images before using
Use efficient selectors (avoid deep nesting)
Minify CSS for production

## Performance Considerations

### Image Optimization
- Compress images without losing quality
- Use modern formats (WebP)
- Serve appropriate sizes for different devices

### CSS Optimization
- Remove unused CSS
- Minimize specificity conflicts
- Avoid expensive properties (filters, shadows on many elements)
- Bundle and minify for production

### Browser Caching
- Browser caches CSS files
- Users don't re-download on subsequent visits
- Significantly faster repeat visits

## Testing Your Website

Test on real devices:
- Desktop (Windows, Mac)
- Tablet (iPad, Android)
- Mobile (iPhone, Android)

Use browser DevTools:
- Inspect Element to debug CSS
- Mobile Emulation to test responsive design
- DevTools shows actual rendering

Always test in multiple browsers:
- Chrome, Firefox, Safari, Edge
- Responsive design works differently on different browsers

## Your Next Projects

Ideas to practice:
- Restaurant website (hero, menu, contact)
- E-commerce product page (images, description, reviews)
- Blog (posts, categories, archives)
- Company website (about, services, testimonials)

Each project teaches new CSS techniques.

## Summary

You've now:
- Understood CSS fundamentals
- Learned syntax and selectors
- Created a responsive project
- Learned best practices
- Understood performance

Next module: Master advanced selectors that give you pinpoint control over styling!`
                }
            ]
        },
        {
            sectionName: "🎯 Module 2: Selectors & Properties",
            lessons: [
                {
                    title: "2.1 Advanced Selectors",
                    duration: "20 min",
                    content: `# Advanced Selectors: Targeting Elements with Precision

Selectors are the foundation of CSS power. Master selectors and you can style anything with precision.

## Basic Selectors Review

### Element Selector
Selects all elements of a type.

### Class Selector
Selects elements with a specific class.

### ID Selector
Selects a single element with an ID.

## Powerful Combinators

### Descendant Selector (Space)
Select elements inside another element, at any depth.

Selects all p elements inside div elements (even nested deeply).

### Child Selector (>)
Select direct children only, not all descendants.

Selects only p elements that are direct children of div (not nested deeper).

### Adjacent Sibling Selector (+)
Select element that comes immediately after another.

Selects p that comes right after h2.

### General Sibling Selector (~)
Select any sibling that comes after.

Selects any p that comes after h2 (doesn't have to be immediate).

## Attribute Selectors

Select elements based on their attributes.

### Exact Attribute Match
Select elements with specific attribute value.

Selects input with type="email"

### Partial Attribute Match
Select elements with attribute containing a value.

Selects links with "example" in the href

### Starts/Ends With
Select based on beginning or end of attribute value.

Selects links starting with "https://"
Selects files ending with ".pdf"

## Pseudo-Classes

Pseudo-classes select elements in specific states.

### :hover
Element when user hovers over it.

Button darkens when hovered.

### :focus
Element when it has focus (keyboard or click).

Input field gets blue border when focused.

### :active
Element when being clicked.

Button appears pressed while clicking.

### :visited
Links to previously visited pages.

### :first-child, :last-child
Select first or last child element.

### :nth-child(n)
Select specific child by position.

Select every 2nd element, or specific position.

### :checked
Form elements that are checked.

## Pseudo-Elements

Pseudo-elements select parts of elements.

### ::before, ::after
Add content before/after an element without modifying HTML.

Example: Add quotation marks before/after quotes, icons before links, decorative elements.

### ::first-line, ::first-letter
Style first line or first letter of text.

Example: First letter larger (like old books).

### ::selection
Text when user selects/highlights it.

Example: Custom highlight color instead of default.

## Combining Selectors

Chain selectors for specific targeting.

Example: Select paragraphs with class "featured" inside div with id "main"

Multiple classes: Select elements with BOTH class-a AND class-b

Multiple conditions create specificity.

## Specificity Deep Dive

Specificity determines which style wins when multiple rules apply.

Specificity scoring:
- Inline styles: 1000 points (highest)
- ID selector: 100 points
- Class selector: 10 points
- Element selector: 1 point (lowest)

Example specificity battles:
- Element selector (1 point) vs. class selector (10 points): Class wins
- Two class selectors (20 points) vs. one ID selector (100 points): ID wins

The rule with highest specificity wins.

Calculate specificity by counting selectors:
- h1: 1 point (one element)
- .title: 10 points (one class)
- #main .title: 110 points (one ID + one class)
- div > .featured p: 21 points (two elements + one class)

Higher number wins.

## Avoiding Specificity Wars

Bad practice: Using IDs everywhere
Creates high specificity, hard to override later.

Good practice: Use classes mostly
Keeps specificity reasonable, flexible to change.

Bad practice: Deep nesting
Creates very high specificity.

Good practice: Shallow selectors
Easier to override and maintain.

Bad practice: Using !important
Nuclear option that creates problems later.

Good practice: Proper specificity hierarchy
Let natural cascade work.

## Performance Considerations

### Efficient Selectors
Browsers read selectors right-to-left.

Inefficient: Looks at EVERY element in document
Efficient: Looks only at p inside containers

Avoid overly complex selectors. Simple is faster.

### Selector Specificity and Performance
Lower specificity = faster CSS application
High specificity = slower, harder to override

Keep specificity low (use classes mostly).

## Real-World Selector Examples

### Navigation Menu
Select links inside navigation for special styling

### Form Inputs
Select different input types for different styling

### Data Attributes
Select elements based on data attributes for JavaScript interaction

### Dynamic States
Combination of selectors for complex interactions

## Selector Playground

Experiment with selectors:
- Select elements in weird ways
- Combine multiple conditions
- Use pseudo-classes and pseudo-elements
- Understand specificity in practice

This skill is essential for advanced CSS.

Next: Properties that create visual design!`
                },
                {
                    title: "2.2 Essential CSS Properties",
                    duration: "18 min",
                    content: `# Essential CSS Properties: Building Visual Design

Once you can select elements, these properties create the design.

## Text Properties

### font-family
Sets which font displays text.

Generic fonts (serif, sans-serif, monospace) as fallback if specific fonts unavailable.

### font-size
Controls text size.

Pixels: 16px (fixed)
Em: 1.5em (relative to parent font size)
Rem: 1.5rem (relative to root font size)

Rem recommended for consistency across page.

### font-weight
Controls boldness.

400 = normal, 700 = bold
100-900 scale for fine control

### color
Text color.

Use meaningful colors that match brand.

### text-align
Aligns text.

left, center, right, justify

### line-height
Space between lines.

1.5 or 150% recommended for readability
Too tight: hard to read
Too loose: unprofessional

## Box Properties

### width, height
Element dimensions.

Fixed: 300px
Flexible: 100%, 50vw (50% of viewport width)
Auto: Browser calculates

Avoid fixed widths for responsive design.

### margin
Outside spacing, between this box and others.

margin: 20px; (all sides)
margin: 10px 20px; (vertical, horizontal)
margin: 10px 20px 30px 40px; (top, right, bottom, left)

### padding
Inside spacing, around content.

Same values as margin.

Padding inside the box, margin outside.

### border
Outline around box.

1px solid black (width, style, color)
Styles: solid, dashed, dotted, double

### border-radius
Rounded corners.

10px (all equal)
50% (perfect circle if width=height)

## Background Properties

### background-color
Fill color.

Use hex, rgb, or color names.

### background-image
Image fill instead of solid color.

URL points to image file.

### background-size
How image fills space.

cover: Image covers entire area (may crop)
contain: Entire image visible (may have space)
100% 100%: Stretch to fill

### background-position
Where image starts.

center, top, bottom, left, right combinations
Pixel positions for precision

## Display & Layout

### display
How element is rendered.

block: Full width, starts new line
inline: Only takes space needed, same line as others
inline-block: Inline but can set width/height
flex: Flexbox layout (modern)
grid: Grid layout (modern)
none: Hidden from layout

Changing display property dramatically changes layout.

### opacity
Transparency level.

0 = completely transparent
1 = completely opaque
0.5 = 50% transparent

## Positioning

### position
How element is positioned in layout.

static: Default, follows document flow
relative: Relative to its normal position
absolute: Relative to closest positioned parent
fixed: Relative to viewport, stays in place when scrolling
sticky: Stays in place when scrolling past it

### z-index
Layering order for overlapping elements.

Higher number = on top
Only works with positioned elements (position: relative/absolute/fixed)

## Transform Properties

### transform
Modify element appearance without affecting layout.

rotate: Spin element
scale: Grow or shrink
translateX, translateY: Move element
skew: Tilt element

Example: Scale on hover for interactive button

## Transitions & Animations

### transition
Animate property changes smoothly.

Specifies which properties animate and duration.

Button smoothly changes color over 0.3 seconds instead of instantly.

### animation
Create complex animations.

Define keyframes (start, middle, end states) then apply animation.

## Useful Utility Properties

### text-decoration
Line under/through text.

none, underline, overline, line-through

### text-shadow
Shadow behind text.

2px 2px 4px rgba(0,0,0,0.3)
Creates depth effect

### box-shadow
Shadow around element.

Creates depth, separates elements visually

### transform-origin
Point around which transform happens.

Default: center center
Can specify different origin for different effects

## Shadow & Effects

### box-shadow
Multiple shadows for depth:

### text-decoration-color
Color of underline/strikethrough:

### letter-spacing
Space between letters:

Use for design, not readability (proper letter-spacing for specific design).

## Overflow

### overflow
What happens when content exceeds container.

visible: Content shows outside container
hidden: Content hidden, no scrolling
scroll: Always shows scrollbars
auto: Scrollbars only when needed

## Responsive Properties

### max-width
Maximum width for element.

Prevents very wide layouts on large screens.
Common pattern: max-width: 1200px

### aspect-ratio
Maintain proportion between width and height.

aspect-ratio: 16/9 (like video)
Automatically scales to maintain ratio

## CSS Variables

Store values for reuse:

Define in :root for global variables.
Use throughout CSS:

If brand color changes, update once!

## Best Practices

1. Use semantic property values
- Don't use red, use --color-danger
- Don't use small-space, use --spacing-small

2. Prefer relative units
- em, rem, % instead of px for flexibility

3. Avoid magic numbers
- Use consistent spacing scale
- Use CSS variables for colors

4. Mobile first
- Base styles for mobile
- Media queries enhance for larger screens

## Summary

These properties are the building blocks of CSS design. Combine them with selectors and you can create any design.

Next module: Layouts with Flexbox and CSS Grid!`
                }
            ]
        },
        {
            sectionName: "📐 Module 3: Layouts with Flexbox & Grid",
            lessons: [
                {
                    title: "3.1 Flexbox Fundamentals",
                    duration: "22 min",
                    content: `# Flexbox: The Modern Layout Revolution

Flexbox revolutionized CSS layouts. It makes responsive design simple and intuitive.

## What is Flexbox?

Flexbox is a one-dimensional layout system. It aligns items in a row or column with powerful alignment options.

### Before Flexbox (The Dark Ages)
Developers used floats, tables, and hacks. Layouts broke easily. Responsive design was painful.

### After Flexbox (Modern Era)
Simple, intuitive, responsive-friendly. Used in 95%+ of professional websites.

Every major framework (React, Vue, Angular) uses Flexbox for layouts.

## Understanding Flexbox

### Container vs. Items
When you set display: flex, the parent becomes a flex container.
Children become flex items.

Container controls overall layout.
Items arrange themselves inside.

### Main Axis vs. Cross Axis
Flexbox has two axes:

Main Axis: Primary direction (horizontal by default)
Cross Axis: Secondary direction (vertical by default)

All alignment happens along these axes.

## Basic Flex Properties

### display: flex
Transform element into flex container.

Children arrange horizontally by default.

### flex-direction
Direction of main axis.

row: Horizontal (default)
column: Vertical
row-reverse: Horizontal, reversed
column-reverse: Vertical, reversed

### justify-content
Align items along main axis.

flex-start: All left (default)
flex-end: All right
center: Center
space-between: Equal space between
space-around: Equal space around each
space-evenly: Equal space everywhere

Different justification for different layouts.

### align-items
Align items along cross axis.

flex-start: Top
flex-end: Bottom
center: Center
stretch: Stretch to fill (default)
baseline: Align text baselines

### gap
Space between items.

10px gap between all items
Cleaner than margin on every item

## Flex Items Properties

### flex-grow
How much item grows if extra space available.

flex-grow: 1; (item grows equally)
flex-grow: 2; (grows twice as much)
flex-grow: 0; (doesn't grow)

### flex-shrink
How much item shrinks if space limited.

flex-shrink: 1; (shrinks normally)
flex-shrink: 0; (doesn't shrink)

### flex-basis
Base size before growing/shrinking.

flex-basis: 200px; (start at 200px)
flex-basis: 50%; (start at half container)

### flex Shorthand
Combines grow, shrink, basis.

flex: 1; (grows equally, shrinks, basis auto)
flex: 1 0 200px; (grow, don't shrink, 200px base)

### order
Change visual order without changing HTML.

order: 1; (appears first)
order: 2; (appears second)

Useful for responsive design—reorder items on mobile.

## Real-World Flexbox Patterns

### Navbar Layout
Logo on left, links in center, search on right

### Card Grid
Cards arrange in row, wrap to new row on small screens

### Centering Anything
Horizontally and vertically center any element

### Sidebar Layout
Sidebar fixed width, content takes remaining space

### Navigation Menu
Items evenly spaced or clustered

## Responsive Flexbox

Flexbox naturally responds to screen size.

### Mobile-First Approach

Base: Stack items vertically (flex-direction: column)

Tablet: Wrap items in rows (flex-direction: row)

Desktop: Multiple columns or special arrangement

Change flex-direction in media queries for responsive design.

### Flex Wrap

flex-wrap: wrap; allows items to wrap to next line

Without wrap: Items shrink to fit one line
With wrap: Items wrap naturally

Professional responsive design uses wrap.

## Performance with Flexbox

Flexbox is highly optimized in modern browsers.

Low performance cost for complex layouts.

Browsers have been optimizing Flexbox since 2015+.

## Debugging Flexbox

Browser DevTools highlights flexbox items.

Firefox: Overlay shows flex lines and alignment
Chrome: Shows flex properties in inspector

Understanding the visual representation helps debugging.

## When to Use Flexbox

One-dimensional layouts:
- Navigation bars
- Card grids
- Vertical stacks
- Component alignment
- Centering

Multiple items in row or column: Flexbox!

## When Not to Use Flexbox

Grid is better for two-dimensional layouts:
- Page layouts with header, sidebar, content, footer
- Complex grids with different sized items
- Precise positioning needs

## Comparison with CSS Grid

Both are modern, powerful.

Flexbox: One dimension (row OR column)
Grid: Two dimensions (rows AND columns)

Often used together. Flexbox for components, Grid for page layout.

## Summary

Flexbox is essential modern CSS. Master it and you can build responsive layouts easily.

Next: CSS Grid for complex two-dimensional layouts!`
                },
                {
                    title: "3.2 CSS Grid Master",
                    duration: "24 min",
                    content: `# CSS Grid: Two-Dimensional Layout Mastery

CSS Grid is the most powerful layout system in CSS. It handles complex two-dimensional layouts with ease.

## What is CSS Grid?

Grid divides a container into rows and columns, creating cells where you place content.

Think of it like Excel spreadsheet:
- Cells can be different sizes
- Content aligns to grid
- Responsive and flexible

Used on major websites like Google, Microsoft, Adobe.

## Grid vs. Flexbox

Flexbox: One dimension (row or column)
Grid: Two dimensions (rows and columns simultaneously)

Flexbox: Align items in a line
Grid: Position items in a grid pattern

Use together for powerful layouts.

## Basic Grid Setup

### display: grid
Transform element into grid container.

### grid-template-columns
Define column sizes and count.

3 equal columns

1st column 200px, 2nd column flexible, 3rd column 200px

Repeat function: 5 columns each 1fr (flexible)

### grid-template-rows
Define row sizes.

Same syntax as columns

### gap
Space between rows and columns.

10px gap everywhere

## Grid Item Placement

### grid-column
Which columns an item spans.

Start at column 1, span 2 columns (occupy columns 1 and 2)

### grid-row
Which rows an item spans.

Span 3 rows

### Placement Shorthand
Row 1 to row 3, column 2 to column 4

## Powerful Grid Properties

### grid-auto-flow
How items automatically fill grid.

row: Fill row by row (default)
column: Fill column by column
dense: Fill gaps by skipping larger items

### auto-fit and auto-fill
Automatically create columns to fit container.

auto-fit: Collapse empty tracks
auto-fill: Keep empty tracks

### minmax()
Minimum and maximum column width.

Columns at least 200px, maximum 1fr

## Advanced Grid Patterns

### Mobile-First Responsive Grid

Base: Single column

Tablet: Two columns

Desktop: Three or four columns

Using grid-template-columns in media queries.

### Auto-Responsive Grid
Don't need media queries!

Creates as many columns as fit in container.
Automatically responsive.

### Named Grid Areas
Give areas meaningful names.

Define layout visually using names.

Then assign elements to areas.

Layout is visual and understandable!

## Grid vs. Flexbox in Practice

Navigation: Usually Flexbox (one row of items)

Page Layout: Usually Grid (header, sidebar, content, footer)

Product Card: Grid (image, price, title, rating)

Item List: Flexbox (repeating items)

## Practical Grid Examples

### Magazine Layout
Hero section spanning multiple columns
Articles in grid
Sidebar on side

### Dashboard
Widgets in grid layout
Different sizes for different widgets
Responsive reshuffles widgets

### Portfolio
Projects in grid
Different project sizes
Professional showcase

## Performance Considerations

Grid is performant even with hundreds of cells.

Browsers have optimized Grid since 2017+.

Low performance cost.

## Debugging Grid

Browser DevTools shows grid overlay.

Firefox: Colored grid lines and area names
Chrome: Grid structure with cell numbers

Visual debugging makes grid understandable.

## When to Use Grid

Two-dimensional layouts:
- Page layout (header, footer, sidebar, content)
- Galleries with varied sizes
- Dashboards
- Complex designs

When you need rows AND columns: Grid!

## Modern Techniques

### Container Queries
New feature: Responsive to container size, not viewport
Works with Grid for ultra-responsive design

### Subgrid
Nested grids inherit parent grid lines
Align nested content to parent grid

### Grid and Accessibility
Proper semantic HTML + Grid = accessible layouts
Grid doesn't change reading order (unless you use order properties)

## Grid Best Practices

1. Plan before coding
   Sketch layout on paper
   Plan grid structure

2. Name areas for clarity
   grid-area: header makes code readable

3. Use auto-fit/auto-fill for responsive
   Fewer media queries needed

4. Consider mobile-first
   Start simple, enhance with grid on larger screens

5. Combine with Flexbox
   Grid for outer layout, Flexbox for components

## Summary

Grid is powerful but not always necessary.

Use Grid for:
- Complex layouts
- Two-dimensional designs
- Galleries with varied sizes

Use Flexbox for:
- Simple alignments
- One-dimensional layouts
- Component internal layout

Master both and you're a layout expert!

Next module: Animations that delight users!`
                }
            ]
        },
        {
            sectionName: "✨ Module 4: Animations & Effects",
            lessons: [
                {
                    title: "4.1 CSS Transitions",
                    duration: "16 min",
                    content: `# CSS Transitions: Smooth Interactive Effects

Transitions make interactions smooth and delightful. Buttons don't instantly change color—they smoothly transition.

## What are Transitions?

Transitions animate property changes over time.

Without transition: Property changes instantly
With transition: Property smoothly animates

Smooth animations make websites feel polished and professional.

## Transition Properties

### transition-property
Which properties to animate.

color: Only color changes animate
width, height: Multiple properties animate
all: All property changes animate

### transition-duration
How long animation lasts.

0.3s: 300 milliseconds
1s: 1 second

Typical values: 0.2s to 0.5s for snappy feel
Longer for complex animations

### transition-timing-function
Animation speed curve.

ease: Slow start, fast middle, slow end (default, natural)
linear: Constant speed
ease-in: Slow start, fast end
ease-out: Fast start, slow end
cubic-bezier(): Custom curve

Most animations use ease or ease-out.

### transition-delay
Wait before animation starts.

0.1s: Wait 100ms then animate
Staggering animations feels intentional

### transition Shorthand
Combine all properties:

Animation starts instantly, takes 0.3s, animates color and background.

## Practical Transition Examples

### Button Hover Effect
Color changes smoothly on hover

### Link Hover Effect
Underline appears smoothly

### Input Focus Effect
Border color and shadow smooth

### Card Hover Effect
Elevation (shadow) increases on hover, creating depth

## Advanced Transitions

### Multiple Transitions
Different properties with different durations:

Color changes in 0.2s, width changes in 0.5s

### Cubic Bezier Curves
Custom animation curves for specific feels:

Bouncy effect, elastic effect, custom easing

### Performance Optimization

Not all properties animate smoothly.

Animating width/height: Redraws layout (expensive)
Animating transform: Uses GPU (fast)
Animating opacity: Fast

Use transform and opacity for smooth animations.

Example: Move button right with transform instead of margin-left

## Triggering Transitions

### CSS Pseudo-Classes
:hover, :focus, :active

### CSS Classes
JavaScript adds/removes class to trigger animation

### Media Queries
Different transitions on different devices

## Best Practices

1. Keep animations quick (0.2-0.5s)
   Snappy, responsive feel

2. Use easing functions
   ease and ease-out most natural

3. Animate appropriate properties
   Transform and opacity for smoothness

4. Avoid animating on load
   Feels jarring

5. Provide choice to users
   Respect prefers-reduced-motion setting

## Accessibility Consideration

Some users have motion sensitivity. Respect their preferences:

Disable animations if they prefer reduced motion

Animations enhance experience but shouldn't be required.

## Summary

Transitions are essential for modern web design. They make interactions feel smooth and polished.

Next: Keyframe animations for complex effects!`
                },
                {
                    title: "4.2 Keyframe Animations",
                    duration: "18 min",
                    content: `# Keyframe Animations: Creating Complex Motion

While transitions animate between two states, keyframes animate between multiple states with fine control.

## Understanding Keyframes

Keyframes define the animation at specific points in time.

0% (start): Initial state
50% (middle): Intermediate state
100% (end): Final state

Browser calculates intermediate frames automatically.

## Defining Keyframe Animations

### @keyframes Rule
Define animation sequence:

Animation named "slide-in" moves element from left (translateX(-100%)) to normal position (translateX(0)).

### animation Properties
Apply keyframe animation to element:

Animation "fade-in" plays once, takes 1 second, eases out.

## Animation Control Properties

### animation-name
Which keyframes to use.

### animation-duration
How long animation takes.

### animation-timing-function
Speed curve (ease, linear, ease-in, ease-out).

### animation-delay
Wait before starting.

### animation-iteration-count
How many times animation plays.

1: Once (default)
infinite: Forever
3: Three times

### animation-direction
Direction of animation.

normal: Forward (default)
reverse: Backward
alternate: Forward, backward, forward...
alternate-reverse: Backward, forward, backward...

### animation-fill-mode
State before/after animation.

none: Normal state before/after
forwards: Stay at final state after animation
backwards: Start at initial state before animation
both: Backwards before, forwards after

### animation Shorthand
Combine properties:

Fade animation: 2 seconds, eases out, infinite loop.

## Practical Keyframe Examples

### Loading Spinner
Rotate continuously:

### Pulse Effect
Scale up and down repeatedly:

### Slide In from Left
Move from off-screen to normal position:

### Bounce Effect
Move down, bounce back up, settle:

Multiple keyframes create complex motion.

## Advanced Techniques

### Multiple Keyframe Animations
Combine animations on same element:

Element spins while fading in.

### Animation Staggering
Delay animations on multiple elements:

Each item fades in slightly after previous.

### Conditional Animations
Different animations based on conditions:

Hover: Shake animation
Loaded: Fade in animation

## Performance Optimization

### Hardware Acceleration
Use properties that utilize GPU:

transform: Rotations, scaling, moving (fast)
opacity: Fading (fast)

Avoid: width, height, background-color (slow, causes reflows)

### Will-change Property
Tell browser to prepare for animation:

Optimizes animation performance.

### Reduce Motion
Respect user preferences:

If user prefers reduced motion, use simpler animations or none.

## Using Animations Responsibly

### Avoid Overuse
Don't animate everything. Animations should enhance, not distract.

### Keep Animations Short
Long animations feel slow. Quick, snappy animations feel responsive.

### Use Meaningful Animations
Animations should communicate something:
- Loading spinner: "Something's happening"
- Transition: "You changed pages"
- Bounce: "This is important"

### Test Performance
Smooth 60fps on all devices.
Monitor performance in DevTools.

## Practical Scenarios

### Page Load Animation
Fade in and slide elements on page load

### Loading Indicator
Spinning or pulsing while loading

### Success Feedback
Checkmark animation after successful action

### Error Feedback
Shake animation for errors

### Interactive Animation
Animation triggered by user interaction

## Combining Transitions and Animations

Transitions: Simple state changes
Animations: Complex motion sequences

Use together:
- Transition for initial response
- Animation for complex effect

## Summary

Keyframe animations enable complex, creative motion effects. Combined with transitions, they make websites feel alive and interactive.

Next module: Responsive design and best practices!`
                }
            ]
        },
        {
            sectionName: "📱 Module 5: Responsive Design & Best Practices",
            lessons: [
                {
                    title: "5.1 Mobile-First Responsive Design",
                    duration: "20 min",
                    content: `# Mobile-First Responsive Design: Building for All Devices

Over 60% of web traffic is mobile. Responsive design isn't optional—it's essential.

## Mobile-First Philosophy

Old approach: Desktop first, then shrink for mobile (inefficient)
Modern approach: Mobile first, then enhance for larger screens (efficient)

Start with mobile design, add complexity as screen size increases.

## Key Responsive Concepts

### Viewport
Visible area on device.

Different devices have different viewports:
- iPhone: 375px wide
- iPad: 768px wide
- Desktop: 1920px wide

Responsive design adapts to viewport size.

### Breakpoints
Screen sizes where design changes.

Common breakpoints:
- Mobile: 0-576px
- Tablet: 576px-768px
- Desktop: 768px+
- Large: 1200px+

Customize breakpoints for your design.

### Flexible Layouts
Don't use fixed widths. Use percentages and relative units.

Max-width prevents too-wide layouts.
Flexible columns scale with screen.

### Flexible Images
Images scale with container.

Never set width larger than container.
Max-width: 100% standard practice.

## Media Queries: The Heart of Responsive Design

Media queries apply CSS at specific viewport sizes.

### Basic Media Query
Apply CSS only on screens wider than 768px

### Mobile-First Approach
Base CSS for mobile (smallest screen)

Enhance with media queries for larger screens:

Mobile first: Simple, minimal CSS
Tablet up: More columns, more spacing
Desktop up: Full layout

## Common Responsive Patterns

### Single Column → Multi Column
Mobile: One column
Tablet: Two columns
Desktop: Three or four columns

### Hide/Show Elements
Mobile: Hide sidebar
Desktop: Show sidebar

Different content for different devices.

### Typography Adjustments
Mobile: Smaller font, tighter spacing
Desktop: Larger font, more spacing

Readability on all devices.

### Navigation Changes
Mobile: Hamburger menu
Desktop: Full navigation bar

Different layouts for different screens.

## Responsive Units

### Pixels (px)
Fixed size. Use for borders, rarely for fonts/width.

### Relative Units
Flexible, responsive.

- %: Percentage of parent
- em: Relative to font size
- rem: Relative to root font size
- vw: Percentage of viewport width
- vh: Percentage of viewport height

Modern responsive uses relative units.

## Mobile-First Structure

Step 1: Write base CSS for mobile
- Single column layout
- Smaller fonts
- Touch-friendly buttons (44px minimum)
- Optimized images

Step 2: Add tablet styles
- Media query: min-width: 576px
- Two column layout
- Adjust spacing
- Better use of space

Step 3: Add desktop styles
- Media query: min-width: 1200px
- Full layout
- Large typography
- Elaborate design

## Responsive Navigation

### Mobile Navigation
Hamburger menu (three lines)
Click opens/closes menu
Mobile-optimized

### Desktop Navigation
Full horizontal menu
Always visible
More space for links

Same navigation, different display based on screen size.

## Responsive Images

### Picture Element
Different images for different devices:

Serve high-res on desktop, smaller on mobile
Saves bandwidth on mobile.

### Srcset Attribute
Browser chooses appropriate image:

Provide 1x, 2x, 3x for different resolutions
Browser selects best option.

### Object-Fit Property
Control how images fill containers:

cover: Fill container (may crop)
contain: Show entire image (may have space)

## Responsive Forms

Mobile-friendly forms:

### Large Touch Targets
Buttons 44x44px minimum (fingertip size)

### Single Column Layout
Mobile: One column
Desktop: Multiple columns if needed

### Clear Labels
Labels above inputs
Easy to see and tap

### Appropriate Input Types
type="email": Mobile keyboard shows @
type="number": Mobile keyboard shows numbers
type="tel": Mobile keyboard shows phone pad

## Testing Responsive Design

### Browser DevTools
Mobile emulation built in.
Test various devices and orientations.

### Real Devices
Test on actual phones and tablets.
Better than emulation.

### Responsiveness Across
All major breakpoints
All major browsers (Chrome, Firefox, Safari, Edge)
Portrait and landscape orientations

## Performance for Mobile

### Image Optimization
Compress images for mobile.
Serve appropriately sized images.
Use modern formats (WebP).

### CSS Optimization
Only load needed CSS.
Media queries load conditionally.
Minify for production.

### Minimizing HTTP Requests
Bundle CSS and JavaScript.
Use sprites for multiple images.
Fewer requests = faster loading.

### Prioritize Content
Mobile: Essential content first
Desktop: Additional content

## Accessibility in Responsive Design

### Touch Targets
44px minimum for mobile
Spacing between touch targets

### Text Sizing
Readable font size (14px minimum)
Good contrast
Sufficient line-height

### Orientation Independence
Works in portrait and landscape
No content cut off in either orientation

## Tools for Responsive Development

### DevTools
- Mobile emulation
- Network throttling
- Performance testing

### CSS Frameworks
Bootstrap, Tailwind provide responsive grids
Speed up development

### Testing Tools
Responsive design checkers
Cross-browser testing

## Summary

Mobile-first responsive design is essential in modern web development.

Master it and your websites work beautifully on any device.

Next: Best practices for professional CSS!`
                },
                {
                    title: "5.2 CSS Best Practices & Optimization",
                    duration: "16 min",
                    content: `# CSS Best Practices: Writing Professional, Maintainable Code

The difference between amateur and professional CSS is organization, efficiency, and maintainability.

## Code Organization

### Component-Based Structure
Organize CSS by component:

Create folders for styles:
- components/: button.css, card.css, navbar.css
- layout/: header.css, footer.css
- pages/: home.css, about.css
- global.css: Global styles

Each component has its own CSS file.
Easy to find and update.

### CSS Methodologies

#### BEM (Block Element Modifier)
Naming convention for clarity.

Block: .card (main component)
Element: .card__header (part of component)
Modifier: .card--featured (variation)

Self-documenting code.

#### SMACSS (Scalable and Modular)
Organize by purpose:
- Base: Default styles
- Layout: Major page sections
- Module: Reusable components
- State: Dynamic states
- Theme: Design variations

#### OOCSS (Object-Oriented CSS)
Separate structure from skin:
- Structure: Layout, spacing, sizing
- Skin: Colors, borders, shadows

Reusable components with different skins.

## Naming Conventions

### Good Names
Describe purpose, not appearance.

Good: .button-primary (it's the primary button)
Bad: .button-blue (what if we change color?)

Good: .alert-error (error alert)
Bad: .red-text (appearance-based)

## Performance Optimization

### Minification
Remove unnecessary characters:

Reduces file size by 15-20%.

Professional deployment always minifies CSS.

### CSS Concatenation
Combine multiple CSS files into one:

Fewer HTTP requests = faster loading.

### Critical CSS
Load essential styles immediately:

Critical: Navigation, header, above-the-fold content
Deferred: Below-the-fold, less important

Load critical inline, defer rest.

### Unused CSS Removal
Remove styles for unused features:

Tools like PurgeCSS identify unused styles.
Significant size reduction on large projects.

## Writing Efficient CSS

### Avoid Deep Nesting
Deep selectors are slow and brittle:

Bad: .header .nav ul li a {} (too deep)
Good: .nav-link {} (direct targeting)

### Avoid Over-Qualifying
Unnecessary selectors add weight:

Bad: div.card.featured {} (too many)
Good: .card--featured {} (simple)

### Use Efficient Selectors
Avoid expensive selectors:

Bad: [class~="featured"] (attribute selector slow)
Good: .featured (class selector fast)

### Specificity Management
Keep specificity low and consistent:

High specificity makes changes hard:

Low specificity allows easy overrides:

### Avoid !important
Almost never use !important:

Creates specificity wars.
Breaks cascade.
Makes code unpredictable.

Only use when absolutely necessary (maybe never).

## Reusability

### CSS Variables
Store repeated values:

Update once, changes everywhere.

### Utility Classes
Small, single-purpose classes:

Combine for quick styling.
Used by frameworks like Tailwind.

### Mixins and Functions (in preprocessors)
Generate repeated patterns:

Reduces repetition significantly.

## Maintainability

### Comments Explain Why, Not What
Bad: Color is blue (obvious from code)
Good: Blue indicates primary action (explains purpose)

### Consistent Formatting
Consistent indentation and spacing:
- One property per line
- Always use semicolons
- Consistent spacing around braces

### DRY Principle
Don't Repeat Yourself:
- Use variables for colors
- Use mixins for patterns
- Use classes for repeated styles

Repetition leads to maintenance issues.

## CSS Preprocessors

### Sass/SCSS
Extends CSS with:
- Variables
- Nesting
- Mixins
- Functions
- Importing

Compiles to regular CSS.

## Cross-Browser Compatibility

### Vendor Prefixes
Some features need prefixes for certain browsers:

Many tools add prefixes automatically.

### Feature Detection
Check if browser supports feature before using:

Don't assume all features work everywhere.

### Progressive Enhancement
Start with basic CSS everyone understands.
Enhance with newer features for supporting browsers.

## Accessibility in CSS

### Color Contrast
Text readable on background:

Minimum 4.5:1 contrast ratio for normal text.
3:1 for large text.

### Focus Indicators
Visible focus for keyboard navigation:

Don't remove outline property.
Style it if needed.

### Readable Typography
Sufficient font size (14px+)
Good line-height (1.5)
Readable line length (60-100 characters)

## Performance Metrics

### CSS File Size
Measure and optimize:

Smaller files load faster.
Minification reduces by 15-20%.

### Loading Performance
Measure time to first paint, largest contentful paint.

Critical CSS impacts perceived performance.

### Runtime Performance
Smooth animations (60fps).
No layout thrashing.
Use DevTools to measure.

## Tools for Professional CSS

### Prettier
Auto-format CSS consistently.

### ESLint/Stylelint
Catch errors and style issues.

### PostCSS
Add features with plugins.

### CSS Frameworks
Bootstrap, Tailwind speed up development.

### Browser DevTools
Debug, inspect, optimize.

## Summary

Professional CSS:
- Organized and structured
- Optimized for performance
- Maintainable for the future
- Accessible to all users
- Follows best practices

This is what separates professionals from amateurs.

You've now mastered CSS from fundamentals to advanced best practices. You're ready to build professional websites!

Continue learning by building real projects. Each project teaches new techniques and best practices.

Congratulations on completing the CSS course!`
                }
            ]
        }
    ]
}
