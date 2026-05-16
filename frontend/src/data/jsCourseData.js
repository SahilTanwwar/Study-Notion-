// JavaScript Course Data (Hardcoded)
export const jsCourseData = {
    _id: "js-course-001",
    courseName: "JavaScript - Basics to Advanced",
    courseDescription: "Master JavaScript from zero to hero. Learn variables, functions, async programming, DOM manipulation, and become a professional JavaScript developer.",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    customLink: "/javascript-course",
    ratingAndReviews: [1, 2, 3, 4, 5],
    instructor: {
        firstName: "Study",
        lastName: "Notion",
        _id: "instructor-001"
    },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    ratingAndReviews: [],
    whatYouWillLearn: "• JavaScript fundamentals and syntax\n• Variables, data types, and operators\n• Functions and scope\n• DOM manipulation and events\n• Asynchronous programming (Promises, async/await)\n• Modern ES6+ features\n• Real-world project building",
    
    courseContent: [
        {
            sectionName: "⚡ Module 1: JavaScript Fundamentals",
            lessons: [
                {
                    title: "1.1 What is JavaScript and Why Learn It?",
                    duration: "20 min",
                    content: `# JavaScript: The Programming Language of the Web

JavaScript is the programming language that brings websites to life. While HTML structures content and CSS styles it, JavaScript makes it interactive, responsive, and dynamic.

## What is JavaScript?

JavaScript is a programming language that runs in web browsers and servers. It enables interactive experiences: buttons responding to clicks, forms validating input, pages updating without refreshing, animations playing smoothly.

Every modern website uses JavaScript. Google, Facebook, Netflix, Figma, Slack—they all run JavaScript to create their user experiences.

## JavaScript vs. Other Languages

### JavaScript is Different
- Runs in browsers (no installation needed)
- Easy to learn but powerful
- Used for frontend (browser) and backend (Node.js servers)
- Fastest growing programming language
- Highest job demand among languages

### Learning Progression
Start: Simple syntax, variables, functions
Intermediate: DOM manipulation, events, async programming
Advanced: Design patterns, performance optimization, frameworks

JavaScript progression is natural and intuitive.

## Why JavaScript is Your Golden Ticket

### Reason 1: Absolute Job Market Dominance
JavaScript developers are in extreme demand. Every company building websites needs JavaScript developers. Salaries: 90,000 to 200,000+ dollars annually.

According to Stack Overflow and GitHub, JavaScript is consistently the #1 most popular language. That means:
- Most job postings
- Most projects
- Most companies hiring
- Most learning resources

### Reason 2: Frontend + Backend Capable
Learn JavaScript once, use it everywhere:
- Frontend: React, Vue, Angular (browsers)
- Backend: Node.js (servers)
- Mobile: React Native
- Desktop: Electron
- Games: Babylon.js, Three.js

One language, unlimited possibilities.

### Reason 3: Fastest Career Growth
JavaScript developers transition to leadership and senior roles faster than most languages. Companies value JavaScript expertise highly.

### Reason 4: Accessibility
JavaScript is beginner-friendly. Syntax is readable, error messages are helpful, community is massive. If you can write HTML, learning JavaScript is natural next step.

### Reason 5: Real-time Feedback
Write code, immediately see results in browser. This immediate feedback accelerates learning. You know within seconds if your code works.

## What You Can Build with JavaScript

### Small Projects
- To-do list applications
- Calculator
- Weather app
- Note-taking app
- Quiz application

### Medium Projects
- Social media feed
- E-commerce shopping cart
- Chat application
- Task management tool
- Dashboard

### Large Projects
- Full social networks (like Twitter)
- Streaming platforms (like Netflix)
- Productivity tools (like Figma)
- Collaboration platforms (like Slack)
- Games

The same JavaScript fundamentals power all these, from simple to complex.

## JavaScript Fundamentals Overview

### Variables
Store data: numbers, text, true/false, objects

### Functions
Reusable blocks of code that do specific tasks

### Objects
Collections of related data and functions

### Events
Responding to user actions: clicks, typing, scrolling

### DOM
Manipulating HTML elements with JavaScript

### Async
Handling long operations without freezing interface

### Promises and async/await
Modern way to handle asynchronous operations

## Common Misconceptions

### False: "JavaScript is just for websites"
True: JavaScript powers servers (Node.js), mobile apps (React Native), desktop apps (Electron), games, and more.

### False: "JavaScript is easy, not a real language"
True: JavaScript is sophisticated. Enterprise companies rely on JavaScript for critical systems. Backend JavaScript (Node.js) runs servers at Netflix, Uber, PayPal.

### False: "You need other languages for backend"
True: Node.js lets you use JavaScript for backend. Full-stack JavaScript development is common and powerful.

### False: "Learning HTML/CSS first is required"
True: You can learn HTML/CSS and JavaScript independently. They're complementary, not sequential.

## JavaScript in Real Applications

Google Maps: Smooth interactions, dragging, zooming? JavaScript
Gmail: Checking emails without page refresh? JavaScript
YouTube: Infinite scroll, video player controls? JavaScript
Instagram: Stories, stories slider, infinite scroll? JavaScript
Figma: Real-time collaboration, drawing tools? JavaScript (and some compiled to JavaScript)

These massive applications are built on JavaScript fundamentals.

## Your Learning Path

Module 1: Fundamentals—variables, operators, data types
Module 2: Functions and Control—logic, loops, functions
Module 3: Objects and DOM—working with data and HTML
Module 4: Events and Interactivity—responding to users
Module 5: Async and Modern—Promises, async/await, modern features

By module 5, you'll understand JavaScript deeply.

## Professional JavaScript Developer

A professional JavaScript developer:
- Writes clean, readable code
- Understands async programming
- Handles errors gracefully
- Optimizes performance
- Tests thoroughly
- Works with frameworks (React, Vue)
- Collaborates with teams

This course teaches all these skills.

## Salary Reality

Junior JavaScript Developer: 50,000 - 80,000
Mid-level JavaScript Developer: 80,000 - 130,000
Senior JavaScript Developer: 130,000 - 200,000+
Lead/Manager: 150,000 - 250,000+

JavaScript skills directly impact income.

## Let's Get Started

Next lesson: Setting up your development environment and writing your first JavaScript code!

Are you ready to master the language of the web?`
                },
                {
                    title: "1.2 Setting Up Your JavaScript Environment",
                    duration: "16 min",
                    content: `# Your First JavaScript Setup: Running Code Like a Professional

Before writing JavaScript, set up your environment properly. Professional developers use specific tools and workflows.

## What You Need

### A Text Editor
Visual Studio Code (recommended, free, professional)
Download: https://code.visualstudio.com/

Why VS Code?
- Industry standard used by millions
- Powerful built-in terminal
- Excellent extensions
- Perfect for JavaScript development
- Free and fast

### A Web Browser
Chrome, Firefox, Safari, or Edge
All have excellent developer tools.

### Node.js (Optional for now)
For running JavaScript outside the browser
Download: https://nodejs.org/
Choose LTS (Long Term Support) version

We'll focus on browser JavaScript first.

## Setting Up VS Code

### Step 1: Install VS Code
Visit https://code.visualstudio.com/
Download for your operating system
Install following the installer instructions

### Step 2: Install Essential Extensions
Click Extensions icon (left sidebar)
Search and install:
- Code Runner (run code quickly)
- Prettier (auto-format code)
- ES7+ Snippets (code suggestions)
- Live Server (open files in browser with auto-refresh)

### Step 3: Create Your Project Folder
1. Create folder: MyJavaScriptCourse
2. Open VS Code
3. File → Open Folder
4. Select your folder

## Creating Your First Program

### Step 1: Create an HTML File
1. In your folder, create index.html
2. Add basic HTML structure

### Step 2: Create a JavaScript File
1. Create script.js in the same folder
2. This is where your JavaScript code goes

### Step 3: Link JavaScript to HTML
In index.html, add before closing body tag:

This tells HTML where to find JavaScript code.

### Step 4: Run Your Program
Right-click index.html
Select "Open with Live Server"
Browser opens automatically

Congratulations! Your first JavaScript environment is set up!

## Using Browser Developer Tools

Press F12 or Right-click → Inspect to open DevTools.

### Console Tab
Shows output from console.log()
Shows errors in red
Where you see your first results

### Sources Tab
Shows your code files
Set breakpoints for debugging

### Elements Tab
See HTML structure
Inspect CSS

DevTools is your best friend for JavaScript development.

## Your First JavaScript Code

In script.js:

This program:
1. Creates a variable message
2. Logs it to console
3. Shows an alert popup

Open index.html with Live Server and check console (F12):
You'll see "Hello, JavaScript!" in the console
Alert popup appears

You just ran your first JavaScript!

## Troubleshooting

### Code doesn't run
- Check HTML file saved
- Check script.js saved
- Refresh browser
- Check console for errors (F12)

### File not found error
- Ensure script.js in same folder as index.html
- Check script src path is correct

### Console not showing output
- Press F12 to open Developer Tools
- Click Console tab
- Reload page

## Professional Workflow

1. Write code in VS Code
2. Save (Ctrl+S)
3. Browser auto-refreshes with Live Server
4. Check console for output
5. Debug if needed
6. Repeat

This workflow is used by professional developers worldwide.

## Best Practices from Day One

### Use Meaningful Variable Names
Good: let userName = "Alice"
Bad: let x = "Alice"

### Add Comments
\`\`\`javascript
// This explains what the code does
var total = price + tax;
\`\`\`

### Use Consistent Indentation
Indent code inside blocks for readability

### Organize Your Workspace
Keep HTML, CSS, JavaScript in organized folders
As projects grow, organization matters more

## Next Steps

You now have:
✅ Professional development environment
✅ Understanding of how JavaScript loads
✅ Ability to run JavaScript
✅ Browser DevTools knowledge

Next lesson: Variables—storing and working with data!

Your professional JavaScript journey starts now!`
                },
                {
                    title: "1.3 Variables and Data Types",
                    duration: "18 min",
                    content: `# Variables: Storing and Managing Data

Variables are containers for storing data values. Everything you do in programming involves variables.

## What is a Variable?

A variable is a named storage location that holds a value.

Think of a variable like a labeled box:
- Label = variable name
- Box contents = variable value
- You can put things in and take things out

## Creating Variables

JavaScript has three ways to create variables:

### let (Modern Standard)
Used for most variables
Block scoped (only exists in current block)
Can be reassigned
This is what you should use most of the time

### const (Constant)
Cannot be changed after assignment
Block scoped
Safest choice when value won't change
Prevents accidental changes

### var (Legacy)
Old way, avoid using
Function scoped, not block scoped
Can cause confusion with scope

Best practice: Use const by default, let when you need to change the value, never use var.

## Data Types

JavaScript has different data types for different kinds of data.

### String
Text data wrapped in quotes

Can use single or double quotes, both work the same

### Number
Numeric values (integers and decimals)

Numbers can be positive, negative, or decimal

### Boolean
true or false
Used for comparisons and logic

### undefined
Variable declared but no value assigned yet

### null
Empty/no value (intentional)

Difference: undefined is accidental, null is intentional

### Object
Collection of key-value pairs

Objects store related data together

### Array
Ordered list of values

Access items by position (starting at 0)

## How Variables Work

### Declaring a Variable
Creating the variable for first time

### Assigning a Value
Giving it a starting value

### Using the Variable
Referencing its value in code

### Reassigning (if using let)
Changing to a new value

Example process:

## Variable Naming Rules

### Rules You Must Follow
- Start with letter, underscore, or dollar sign
- Can contain letters, numbers, underscores, dollar signs
- Cannot use JavaScript keywords (if, for, function, etc.)
- Case sensitive (age and Age are different)

### Conventions (Best Practices)
- Use camelCase: userName, totalPrice
- Use descriptive names: userName better than u
- Use lowercase for first word: userName not UserName
- No spaces in variable names

Good names help code readability.

## Type Conversion

JavaScript can convert between types automatically (sometimes causing bugs) or intentionally.

### Automatic Conversion
JavaScript converts types when needed:

Number converts to string when concatenating. Sometimes helpful, sometimes causes bugs.

### Intentional Conversion
Convert types deliberately:

These conversions are explicit and clear.

## Constants vs. Let

### Use const (most of the time)
Prevents accidental changes
Shows intent: this value won't change
Safer default

### Use let (when value changes)
Only when value actually needs to update
Loop counters, accumulating values

Example:

Button count needs to change on clicks, so use let. User name doesn't change, so use const.

## Scope: Where Variables Exist

Variables only exist in certain areas (scopes).

### Global Scope
Variable accessible everywhere in code

### Block Scope
Variable only exists inside block (if, for, function)

Variable x only exists inside the if block. Outside, x doesn't exist.

Understanding scope prevents bugs.

## Summary

Variables:
- Store data for use in programs
- Have types: string, number, boolean, object, array
- Use const by default, let when needed
- Follow naming conventions
- Have scope: where they exist

Master variables, and you understand the foundation of all programming.

Next lesson: Operators and expressions!`
                },
                {
                    title: "1.4 Your First Interactive Program",
                    duration: "14 min",
                    content: `# Building Your First Real Program: Interactive Calculator

Theory is important, but building programs teaches JavaScript best. Let's create your first real program: an interactive calculator.

## Program Overview

Your program will:
1. Get two numbers from user
2. Choose an operation (add, subtract, multiply, divide)
3. Calculate the result
4. Display the answer

This uses variables, data types, and operators together.

## Step 1: HTML Structure

Create index.html with input fields and button

This HTML provides:
- Two input fields for numbers
- Select dropdown for operation choice
- Button to trigger calculation
- Paragraph to display result

## Step 2: Write JavaScript

Create script.js with JavaScript logic

This program:
1. Gets input values from HTML
2. Converts them to numbers (input gives strings)
3. Performs calculation based on selected operation
4. Displays result

## Step 3: Add Styling (Optional)

Create style.css to make it pretty

Add this to HTML head before closing tag:

Now your calculator looks professional!

## How It Works

1. User enters first number
2. User enters second number
3. User selects operation
4. User clicks Calculate button
5. JavaScript runs
6. Result displays

## Variations to Try

### Add More Operations
Add modulo (%), exponentiation (**)

### Validate Input
Check if user entered valid numbers

### Clear Function
Button to reset calculator

### History
Show previous calculations

Each addition teaches new concepts.

## Common Mistakes to Avoid

### Mistake 1: Forgetting Number Conversion
Inputs are always strings. "5" + "3" = "53" (concatenation)
Must convert: parseInt("5") + parseInt("3") = 8

### Mistake 2: Spelling Mistakes
JavaScript is case-sensitive. document.getElementById is not document.getElementByID

### Mistake 3: Missing HTML IDs
JavaScript can't find elements without ID
Check IDs match exactly in HTML and JavaScript

### Mistake 4: Not Handling Edge Cases
What if user enters 0 as divisor? Program crashes
Add validation: if (divisor === 0) { alert("Can't divide by zero"); }

## Congratulations

You've built your first real JavaScript program!

This simple calculator uses core JavaScript concepts:
- Variables store data
- Functions organize code
- Events respond to user actions
- DOM updates display

From here, programs get more complex. But they all use these fundamentals.

## Next Steps

Practice variations:
- Build more complex calculator (square root, percentage)
- Convert to Celsius/Fahrenheit
- Build tip calculator
- Create unit converter

Each project reinforces fundamentals and teaches new techniques.

Next module: Functions—organizing code into reusable blocks!`
                }
            ]
        },
        {
            sectionName: "🔧 Module 2: Functions and Control Flow",
            lessons: [
                {
                    title: "2.1 Functions: Reusable Code Blocks",
                    duration: "22 min",
                    content: `# Functions: The Building Blocks of Code

Functions are blocks of reusable code that perform specific tasks. They're essential for writing organized, maintainable programs.

## What is a Function?

A function is a block of code that performs a specific task. Instead of writing the same code repeatedly, you write it once in a function, then call it whenever needed.

Think of a function like a kitchen recipe:
- Function name = recipe name
- Input (parameters) = ingredients
- Code block = instructions
- Output (return) = finished dish

## Creating Functions

### Function Declaration
Traditional way to create functions

This function:
- Named greet
- Takes parameter name
- Returns a greeting message

### Function Expression
Creating function as a value

Same functionality, different syntax. Which to use? Either works, but declarations are more common.

### Arrow Functions (Modern)
Shorter, modern syntax

Arrow functions are concise and popular in modern JavaScript.

## Calling Functions

Declaring a function doesn't run it. You must call it.

Function runs when called. Output displays in console.

## Parameters and Arguments

### Parameters
Variables in function definition (the label)

### Arguments
Actual values passed when calling function

Example:
function greet(name) { // name is parameter
  return "Hello, " + name;
}
greet("Alice"); // "Alice" is argument

Parameters are placeholders, arguments are actual values.

## Return Values

Functions can return values back to caller.

Without return, function returns undefined (nothing).

## Functions with Multiple Parameters

Functions can take multiple pieces of information.

## Default Parameters

Set default values for parameters if not provided.

If caller doesn't provide an argument, default value is used.

## Practical Examples

### Calculate Total Price
With tax calculation

### Validate Email Format
Check if email looks valid

### Generate Random Quote
Pick random motivational quote

### Calculate Age
From birth year

These real-world functions show practical uses.

## Scope and Variables

Variables inside functions only exist inside functions.

Global variable accessible everywhere
Local variable only in function
Function can access global variables but external code can't access function variables

Scope prevents naming conflicts and organizes code.

## Best Practices

### Use Descriptive Names
Good: calculateTotalPrice(price, taxRate)
Bad: calc(a, b)

### Keep Functions Small
One function, one job
If doing multiple things, break into smaller functions

### Comment Complex Logic
// Calculates discount based on purchase amount
Explains why, not what

### Avoid Side Effects
Function should change only what it's supposed to
Don't surprise with unexpected changes

### Test Functions
Verify they work with different inputs

## Summary

Functions:
- Organize code into reusable blocks
- Take inputs (parameters)
- Process logic
- Return outputs
- Help keep code clean and maintainable

Master functions and you master code organization.

Next lesson: Control flow—making decisions with if/else!`
                },
                {
                    title: "2.2 Loops and Iteration",
                    duration: "20 min",
                    content: `# Loops: Repeating Code Efficiently

Loops execute code repeatedly. Instead of writing the same code ten times, loops do it for you.

## for Loop (Most Common)

Repeats code a specific number of times.

This loop:
- i starts at 0
- Continues while i < 5
- i increases by 1 each iteration
- Prints 0, 1, 2, 3, 4

## while Loop

Repeats while condition is true.

Stops when count reaches 5.

Both loops achieve same result. Use for loop when you know count, while loop when condition is complex.

## for...of Loop

Loops through array items.

Simpler than for loop when iterating arrays. Each iteration, item gets next array value.

## forEach Method

Modern way to loop through arrays.

For each item in array, call function. Arrow function makes it concise.

## Breaking and Continuing

### break
Exit loop early

Loop stops when count reaches 5, not 10.

### continue
Skip to next iteration

Skip even numbers, only print odds.

## Practical Loop Examples

### Sum Numbers
Add 1 through 100

### Filter Data
Find items matching criteria

### Transform Data
Modify array values

### Count Occurrences
Count how many times something appears

Loops are everywhere in real programs.

## Loop Performance

### Avoid Infinite Loops
Loop that never ends, crashes program

Always ensure loop eventually stops.

### Nested Loops
Loops inside loops (advanced)

Outer loop runs, inner loop completes, outer repeats. Use carefully—double nested loop = multiplied iterations.

## Summary

Loops:
- Repeat code efficiently
- Available in multiple styles (for, while, forEach)
- Use break/continue for control
- Essential for processing data

Next: Working with arrays and objects!`
                }
            ]
        },
        {
            sectionName: "🎯 Module 3: Objects and DOM Manipulation",
            lessons: [
                {
                    title: "3.1 Objects: Organizing Related Data",
                    duration: "20 min",
                    content: `# Objects: Storing Related Data Together

Objects group related data and functions. Instead of scattered variables, objects organize everything logically.

## What is an Object?

Object is collection of key-value pairs.

Object user stores related information:
- Property: key (name, age, email)
- Value: the actual data (Alice, 28, alice@example.com)

## Creating Objects

### Object Literal (Most Common)
Create object with curly braces

### Accessing Properties
Dot notation or bracket notation

Both access same property. Dot notation is more common.

## Methods in Objects

Objects can contain functions (called methods).

Greet is a method (function inside object). Call with dot notation: user.greet()

## Real-World Objects

### User Profile
Store all user information

### Product
Store product details

### Configuration
Store app settings

### Game Character
Store character stats and abilities

Objects model real-world things elegantly.

## Modifying Objects

Add, change, or remove properties dynamically.

JavaScript is dynamic—modify objects anytime.

## Arrays of Objects

Most powerful pattern—array containing multiple objects.

Each user is object, all in one array. Loop through to process all users.

## Object Methods

JavaScript provides built-in methods:

### Object.keys()
Get all property names

### Object.values()
Get all values

### Object.entries()
Get key-value pairs

### Object.assign()
Merge objects

These methods process objects efficiently.

## Destructuring (Modern)

Extract properties into variables cleanly.

Cleaner than repeatedly writing user.name

## Summary

Objects:
- Group related data
- Store properties and methods
- Use dot notation for access
- Arrays of objects power real applications

Next: Manipulating the DOM with JavaScript!`
                },
                {
                    title: "3.2 DOM Manipulation: Changing HTML with JavaScript",
                    duration: "22 min",
                    content: `# DOM: Making Websites Interactive

DOM (Document Object Model) is JavaScript's interface to HTML. Change, add, remove HTML elements with JavaScript.

## Understanding DOM

DOM is tree structure of HTML elements.

JavaScript accesses and modifies this tree.

When you change DOM, webpage updates immediately.

## Finding Elements

### getElementById
Find element by ID (unique)

### querySelector
Find using CSS selector

### querySelectorAll
Find all matching elements

## Reading Element Content

### textContent
Get or set element text

### innerHTML
Get or set HTML inside element

Be careful with innerHTML—can cause security issues.

## Changing Element Properties

Modify any HTML attribute.

## Changing Styles

Modify CSS directly from JavaScript.

Combined with events, this creates interactivity.

## Creating New Elements

### createElement
Create new element

### appendChild
Add to parent

Process:
1. Create element
2. Set content/properties
3. Add to DOM

## Event Listeners

Respond to user actions.

When user clicks button, alert appears.

Common events: click, change, submit, keydown, load

## Practical Examples

### Update Counter on Click
Add event listener that increases counter

### Toggle Visibility
Show/hide elements

### Form Validation
Check input before submitting

### Live Search
Filter list as user types

These patterns appear in every interactive website.

## Performance Consideration

Avoid modifying DOM excessively. Each change redraws webpage.

Instead of changing one element at a time, batch changes or use fragments.

## Summary

DOM manipulation:
- Find elements with querySelector
- Read/change content with textContent
- Modify styles with style property
- Create elements with createElement
- Respond to events with addEventListener

Master DOM and websites become truly interactive.

Next module: Asynchronous programming—handling delays!`
                }
            ]
        },
        {
            sectionName: "⏳ Module 4: Asynchronous Programming",
            lessons: [
                {
                    title: "4.1 Understanding Asynchronous Code",
                    duration: "20 min",
                    content: `# Asynchronous Programming: Handling Delays

Most real programs have delays: fetching data, loading files, waiting for user. Asynchronous programming handles these without freezing.

## Synchronous vs. Asynchronous

### Synchronous
Code runs line by line, one after another.

Problem: If operation takes time, everything stops. Page freezes.

### Asynchronous
Code continues while operation completes in background.

Page stays responsive. When operation finishes, callback runs.

## Callbacks

Callback is function passed to another function, called when operation completes.

Fetch user data (takes time), then show it. Page stays responsive.

## Callback Hell

Multiple nested callbacks become messy.

Nested callbacks are hard to read. Solution: Promises.

## Promises (Modern Solution)

Promise represents eventual result (success or error).

Promise states:
- Pending: waiting for result
- Fulfilled: succeeded with value
- Rejected: failed with error

## Promise .then()

Access result when promise completes.

.then() runs when promise fulfills.

## Chaining Promises

Multiple operations one after another.

Much cleaner than nested callbacks.

## Error Handling

.catch() handles errors gracefully.

If promise rejects, catch runs with error.

## async/await (Modern Best Practice)

Cleaner syntax than .then().

Looks like synchronous code but actually asynchronous. Much more readable!

## Real-World Examples

### Fetch Data from Server
Get user info, comments, posts

### Load Image
Wait for image, then display

### Timer
Wait for delay, then run code

Async programming powers modern websites.

## Summary

Async programming:
- Keeps pages responsive
- Uses callbacks, Promises, async/await
- Essential for real applications

Next: Building real async applications!`
                },
                {
                    title: "4.2 Fetching Data and APIs",
                    duration: "18 min",
                    content: `# Fetching Data: Building Real Applications

Fetch API retrieves data from servers. This powers real applications: weather apps, social media, anything with live data.

## REST API Basics

API endpoint returns data. Make request, get response.

Example endpoints:
- /users - Get all users
- /users/1 - Get user 1
- /posts - Get all posts

## Using fetch()

Fetch returns Promise. Use .then() or async/await.

## Displaying Fetched Data

Get data, format it, show on page.

Fetch posts, display in HTML, page updates dynamically.

## Error Handling

Handle network failures gracefully.

User sees helpful message instead of blank page or error.

## Real Projects

### Weather App
Fetch weather data, display temperature, forecast

### GitHub User Finder
Search user, show profile, repos

### TODO App with Backend
Create, read, update, delete todos on server

### News App
Fetch latest news, display articles

These projects teach async, fetch, and real-world patterns.

## Best Practices

### Validate Data
Check response is valid before using

### Show Loading State
"Loading..." while fetching

### Cache Results
Don't fetch same data twice

### Timeout Requests
If taking too long, give up

## Summary

Fetching data:
- Core of real applications
- Use fetch API
- Handle errors gracefully
- Display results dynamically

You can now build real, connected applications!

Next module: Modern JavaScript features and best practices!`
                }
            ]
        },
        {
            sectionName: "🚀 Module 5: Modern JavaScript and Best Practices",
            lessons: [
                {
                    title: "5.1 ES6+ Modern Features",
                    duration: "20 min",
                    content: `# Modern JavaScript: Writing Better Code

ES6+ (ECMAScript 2015+) brought massive improvements. Professional JavaScript uses these features.

## let and const

Replaced var completely. Use const by default, let when needed. Never use var.

## Arrow Functions

Shorter syntax, lexical this binding.

## Template Literals

String interpolation without concatenation.

Much cleaner than concatenating strings!

## Destructuring

Extract values cleanly.

## Spread Operator

Copy or expand arrays/objects.

## Object Shorthand

Cleaner object syntax.

## Default Parameters

Set default values for parameters.

## Classes

Organize code with class syntax.

## Modules

Import/export code across files.

## Promises and async/await

Already covered, but essential modern features.

## Optional Chaining

Safe property access.

Doesn't error if property doesn't exist.

## Nullish Coalescing

Default value if null or undefined.

## Summary

Modern JavaScript:
- Cleaner syntax
- Better performance
- More expressive
- Industry standard

Professional developers use these features daily.

Next: Performance and debugging!`
                },
                {
                    title: "5.2 Performance and Best Practices",
                    duration: "16 min",
                    content: `# Professional JavaScript: Performance and Quality

Professional code isn't just about functionality—it's about performance, maintainability, and reliability.

## Performance Optimization

### Minimize DOM Manipulation
Batch changes instead of one at a time

### Use Debouncing for Events
Don't run function for every keystroke

### Lazy Load Images
Load images only when visible

### Code Splitting
Load only needed code

### Minimize Bundle Size
Use tree-shaking, remove unused code

## Best Practices

### Write Clean Code
Readable, self-documenting code

### Add Comments
Explain why, not what

### Use Linting
Tools catch errors and style issues

### Test Code
Verify functionality with tests

### Use Version Control
Git tracks changes

## Debugging Techniques

### Console Methods
console.log(), console.error(), console.table()

### Breakpoints
Pause execution to inspect state

### DevTools
Browser's built-in debugger

### Error Handling
Try/catch blocks

## Security Considerations

### Validate Input
Never trust user input

### Avoid eval()
Dangerous security risk

### Use HTTPS
Secure communication

### Sanitize HTML
Prevent injection attacks

## Common Patterns

### Singleton Pattern
One instance of something

### Observer Pattern
Notify multiple components of changes

### Module Pattern
Encapsulate code

### Factory Pattern
Create objects consistently

## Collaboration and Teams

### Consistent Style
Use Prettier for formatting

### Clear Naming
Everyone understands code

### Documentation
Explain complex logic

### Code Review
Team reviews each other's code

### Version Control
Git workflow for collaboration

## Summary

Professional JavaScript:
- Performs well
- Maintains quality
- Handles security
- Follows best practices
- Works in teams

You're now ready for professional JavaScript development!

## Congratulations

You've mastered JavaScript from fundamentals to advanced!

You can:
- Write clean, efficient code
- Handle asynchronous operations
- Build interactive applications
- Debug and optimize
- Work with teams professionally

JavaScript opens doors to amazing career opportunities. Keep building projects, keep learning, and keep improving.

The web is built on JavaScript. Now you have the power to shape it.

Welcome to professional JavaScript development!`
                }
            ]
        }
    ]
}
