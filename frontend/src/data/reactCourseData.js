export const reactCourseData = {
  courseName: "Learn React Mastery",
  courseDescription: "Master React from component basics to advanced patterns. Build modern, interactive web applications with hooks, state management, and performance optimization.",
  thumbnail: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  customLink: "/react-course",
  ratingAndReviews: [1, 2, 3, 4, 5],
  instructor: { firstName: "Study", lastName: "Notion" },
  modules: [
    {
      id: 1,
      title: "Module 1: React Fundamentals",
      lessons: [
        {
          id: 1,
          title: "What is React & Why Learn It?",
          content: `
# What is React & Why Learn It?

## Understanding React

React is a **JavaScript library for building user interfaces with components**. Instead of manually manipulating the DOM like in vanilla JavaScript, React lets you declare what your UI should look like, and it efficiently updates the page when data changes.

### The Core Concept: Components as Functions

Think of React like LEGO blocks:
- Each **component** is a reusable block
- Components can contain other components
- Your entire UI is built by combining components

\`\`\`jsx
// A simple React component
function Welcome() {
  return <h1>Hello, React!</h1>;
}
\`\`\`

## Why Learn React?

### 1. **Industry Standard ($100k-180k+ salaries)**
- Used by Facebook, Netflix, Airbnb, Uber, Spotify
- 1 million+ job openings worldwide
- Highest demand frontend framework
- Starting salary: $80k-100k, Senior: $150k-200k+

### 2. **Component Reusability**
- Write once, use everywhere
- Reduces code duplication
- Makes applications maintainable
- Team collaboration becomes seamless

### 3. **Virtual DOM = Lightning Fast**
- React's Virtual DOM only updates what changed
- Dramatically improves performance
- Handles thousands of elements smoothly
- Better UX than jQuery or vanilla JavaScript

### 4. **React Ecosystem**
- **React Router**: for multi-page applications
- **Redux/Zustand**: for state management
- **Next.js**: for full-stack applications
- **React Native**: for mobile apps (same skills!)

### 5. **Future-Proof Skills**
- Meta (Facebook) invests billions in React
- React Server Components emerging
- Web development is going React-first
- Skills transfer to React Native, Electron, etc.

## Real-World Companies Using React

| Company | Usage | Impact |
|---------|-------|--------|
| **Facebook** | Entire platform | Invented React! |
| **Netflix** | Web interface | Serves 250M+ users |
| **Airbnb** | Booking platform | Handles millions of reservations |
| **Uber** | Rider/Driver apps | Real-time updates on map |
| **Spotify** | Web player | Interactive music experience |
| **Instagram** | Web version | Millions daily active users |

## React Career Opportunities

1. **Frontend Developer** - Build UI components ($90k-150k)
2. **Full-Stack Developer** - React + Node.js ($120k-200k)
3. **Mobile Developer** - React Native ($110k-180k)
4. **UI/UX Engineer** - Component design ($100k-160k)
5. **Freelancer** - Build custom projects ($50-150/hour)

## Common React Misconceptions

### ❌ "React is a complete framework"
**Reality**: React is just the **V** in MVC. You need other libraries for routing, state management, etc.

### ❌ "You must know Advanced JavaScript to learn React"
**Reality**: Basic JavaScript is enough! You learn advanced patterns while building React apps.

### ❌ "React is only for large applications"
**Reality**: React is perfect for small, medium, AND large projects.

### ❌ "React has a steep learning curve"
**Reality**: You can build your first component in under 30 minutes!

### ❌ "React is slower than vanilla JavaScript"
**Reality**: React is usually FASTER because of Virtual DOM optimization.

## Your Learning Journey

\`\`\`
Day 1-2: JSX & Components
Day 3-4: State & Props
Day 5-6: Hooks & Effects
Day 7-8: Handling Events
Week 2: Forms & Validation
Week 3: API Integration
Week 4: Building Real Projects
\`\`\`

## Let's Get Started!

By the end of this course, you'll:
- ✅ Build reusable React components
- ✅ Manage component state with hooks
- ✅ Create interactive user interfaces
- ✅ Fetch data from APIs
- ✅ Deploy React applications
- ✅ Think in React for any project

Let's code! 🚀
          `
        },
        {
          id: 2,
          title: "Setting Up Your React Environment",
          content: `
# Setting Up Your React Environment

## Option 1: Create React App (Easiest for Beginners)

Create React App handles all configuration automatically:

\`\`\`bash
# Install Node.js first from nodejs.org

# Create a new React app
npx create-react-app my-app

# Navigate to your project
cd my-app

# Start development server
npm start
\`\`\`

Your app opens at \`http://localhost:3000\` automatically!

### What Gets Created:

\`\`\`
my-app/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.jsx            # Main component
│   ├── index.js           # Entry point
│   └── ...
├── package.json           # Dependencies
└── README.md
\`\`\`

## Option 2: Vite (Faster Alternative)

Vite is blazing fast:

\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

## Understanding the Project Structure

### \`public/index.html\`
This is your main HTML file:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
\`\`\`

### \`src/index.js\`
Mounts React to the DOM:

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

### \`src/App.jsx\`
Your main component:

\`\`\`jsx
function App() {
  return <h1>Welcome to React!</h1>;
}

export default App;
\`\`\`

## Running Your App

### Development Mode
\`\`\`bash
npm start    # Create React App
npm run dev  # Vite
\`\`\`

Automatically opens browser and refreshes on file save.

### Production Build
\`\`\`bash
npm run build
\`\`\`

Creates optimized version ready to deploy.

## Helpful VS Code Extensions

Install these for better React development:

1. **ES7+ React/Redux/React-Native snippets** - Quick code generation
2. **Prettier** - Automatic code formatting
3. **ESLint** - Code quality checking

## Your First React Command

\`\`\`bash
npx create-react-app learning-react && cd learning-react && npm start
\`\`\`

Open \`src/App.jsx\` and edit it. The page updates instantly! 🎉

## Troubleshooting

### Port 3000 already in use?
\`\`\`bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
npm start
\`\`\`

### Module not found?
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
npm start
\`\`\`

Ready? Let's build your first component next! 🚀
          `
        },
        {
          id: 3,
          title: "JSX: JavaScript + HTML Syntax",
          content: `
# JSX: JavaScript + HTML Syntax

## What is JSX?

JSX lets you write HTML-like syntax in JavaScript. It looks like HTML, but it's actually JavaScript!

\`\`\`jsx
// This is JSX
const element = <h1>Hello, React!</h1>;
\`\`\`

Behind the scenes, React converts it to:

\`\`\`javascript
const element = React.createElement('h1', null, 'Hello, React!');
\`\`\`

## Why JSX?

### Without JSX (hard to read):
\`\`\`jsx
React.createElement('div', { className: 'container' },
  React.createElement('h1', null, 'Welcome'),
  React.createElement('p', null, 'This is verbose!')
);
\`\`\`

### With JSX (clean and readable):
\`\`\`jsx
<div className="container">
  <h1>Welcome</h1>
  <p>This is much cleaner!</p>
</div>
\`\`\`

## Key JSX Rules

### 1. Single Root Element
\`\`\`jsx
// ❌ Wrong - Multiple root elements
const element = (
  <h1>Title</h1>
  <p>Description</p>
);

// ✅ Correct - Wrapped in single element
const element = (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);

// ✅ Also correct - React Fragment
const element = (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
\`\`\`

### 2. Use \`className\` Instead of \`class\`
\`\`\`jsx
// ❌ Wrong
<div class="container">content</div>

// ✅ Correct
<div className="container">content</div>
\`\`\`

### 3. Self-Closing Tags
\`\`\`jsx
// ❌ Wrong
<img src="photo.jpg">

// ✅ Correct
<img src="photo.jpg" />
\`\`\`

### 4. Embed JavaScript with Curly Braces
\`\`\`jsx
const name = "Alice";
const age = 25;

const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Age: {age}</p>
    <p>Next year: {age + 1}</p>
    <p>Is adult: {age >= 18 ? "Yes" : "No"}</p>
  </div>
);
\`\`\`

## Attributes in JSX

### Strings Use Quotes:
\`\`\`jsx
<img src="photo.jpg" alt="Profile picture" />
\`\`\`

### Expressions Use Curly Braces:
\`\`\`jsx
const imageUrl = "photo.jpg";
<img src={imageUrl} alt="Profile" />
\`\`\`

### Special Attributes:
\`\`\`jsx
// HTML → JSX
<div class="box">            → <div className="box">
<label for="input">          → <label htmlFor="input">
<div onclick="handler()">    → <div onClick={handler}>
\`\`\`

## Real-World JSX Examples

### User Card Component:
\`\`\`jsx
function UserCard() {
  const user = { name: "John", role: "Developer", avatar: "john.jpg" };
  
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
}
\`\`\`

### Product List:
\`\`\`jsx
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 },
    { id: 3, name: "Tablet", price: 399 }
  ];
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}: \${product.price}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

## Common JSX Mistakes

### ❌ Forgetting Curly Braces:
\`\`\`jsx
const count = 5;
<p>Count: count</p>    // Shows "Count: count"
<p>Count: {count}</p>  // Shows "Count: 5" ✅
\`\`\`

### ❌ Using className with strings:
\`\`\`jsx
const isActive = true;
<div className="box {isActive}">  // ❌ Wrong syntax
<div className={isActive ? "box active" : "box"}>  // ✅ Correct
\`\`\`

### ❌ Comments Inside JSX:
\`\`\`jsx
<div>
  // This will appear on page! ❌
  {/* This comment is hidden */} ✅
</div>
\`\`\`

## Key Takeaways

- ✅ JSX is just syntactic sugar for \`React.createElement()\`
- ✅ One root element required
- ✅ Use \`className\` not \`class\`
- ✅ Use curly braces \`{}\` for JavaScript expressions
- ✅ JSX returns a React element, not a string

Now you can write React UIs like you write HTML, but with the full power of JavaScript! 🚀
          `
        },
        {
          id: 4,
          title: "Your First React Component",
          content: `
# Your First React Component

## What is a Component?

A **component** is a reusable piece of UI. It's a JavaScript function that returns JSX.

## Functional Components (Modern Way)

### The Simplest Component:

\`\`\`jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
\`\`\`

### Using Your Component:

\`\`\`jsx
// In App.jsx
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
\`\`\`

## Step-by-Step: Create Your First Project

### Step 1: Create the Project
\`\`\`bash
npx create-react-app my-first-app
cd my-first-app
npm start
\`\`\`

### Step 2: Create \`src/Greeting.jsx\`
\`\`\`jsx
function Greeting() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is my first component.</p>
    </div>
  );
}

export default Greeting;
\`\`\`

### Step 3: Update \`src/App.jsx\`
\`\`\`jsx
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
\`\`\`

### Step 4: Save and Watch Magic Happen!

The page automatically updates! 🎉

## Making Components Reusable

### Problem: Repeating Code
\`\`\`jsx
function App() {
  return (
    <div>
      <div>
        <h2>John</h2>
        <p>Developer</p>
      </div>
      <div>
        <h2>Jane</h2>
        <p>Designer</p>
      </div>
      <div>
        <h2>Bob</h2>
        <p>Manager</p>
      </div>
    </div>
  );
}
\`\`\`

### Solution: Create a Reusable Component
\`\`\`jsx
// UserCard.jsx
function UserCard() {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h2>John</h2>
      <p>Developer</p>
    </div>
  );
}

// App.jsx
function App() {
  return (
    <div>
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
\`\`\`

## File Organization

### Best Practice Structure:
\`\`\`
src/
├── components/
│   ├── UserCard.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── common/
│       ├── Button.jsx
│       └── Card.jsx
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── App.jsx
└── index.js
\`\`\`

## Real-World Example: Building a Blog

### Step 1: Create \`BlogCard.jsx\`
\`\`\`jsx
function BlogCard() {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      padding: '20px',
      margin: '10px'
    }}>
      <h2>My First Blog Post</h2>
      <p className="date">Posted on Jan 15, 2024</p>
      <p>This is the content of my blog post...</p>
      <a href="#">Read more →</a>
    </div>
  );
}

export default BlogCard;
\`\`\`

### Step 2: Use in \`App.jsx\`
\`\`\`jsx
import BlogCard from './components/BlogCard';

function App() {
  return (
    <div>
      <h1>My Blog</h1>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default App;
\`\`\`

## Exporting Components

### Named Export:
\`\`\`jsx
// MyComponent.jsx
export function MyComponent() {
  return <div>Hello</div>;
}

// App.jsx
import { MyComponent } from './MyComponent';
\`\`\`

### Default Export (Recommended):
\`\`\`jsx
// MyComponent.jsx
function MyComponent() {
  return <div>Hello</div>;
}
export default MyComponent;

// App.jsx
import MyComponent from './MyComponent';
\`\`\`

## Best Practices

✅ **One component per file**
✅ **Use descriptive names** (UserCard, not UC)
✅ **Keep components small** and focused
✅ **Organize in folders** (components/, pages/, etc.)
✅ **Use PascalCase** for component names

## Common Errors

### ❌ Forgot to export:
\`\`\`jsx
function Greeting() {
  return <h1>Hi</h1>;
}
// Missing: export default Greeting;
\`\`\`

### ❌ Wrong import path:
\`\`\`jsx
import Greeting from './Greeting';  // ✅ Correct
import Greeting from 'Greeting';    // ❌ Wrong
\`\`\`

## What's Next?

Now that you can create components, let's make them interactive with **Props** and **State**!

🎉 **Congratulations!** You've built your first React component!
          `
        }
      ]
    },
    {
      id: 2,
      title: "Module 2: Props & State",
      lessons: [
        {
          id: 1,
          title: "Understanding Props",
          content: `
# Understanding Props

## What are Props?

**Props** are how you pass data from a parent component to a child component. Think of them like function parameters!

\`\`\`jsx
// Function with parameters
function greet(name, age) {
  console.log(\`Hello \${name}, you are \${age}\`);
}

// React component with props
function Greeting({ name, age }) {
  return <h1>Hello {name}, you are {age}</h1>;
}
\`\`\`

## Passing Props

### Simple Example:

\`\`\`jsx
// Parent Component (App.jsx)
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
}

// Child Component (Greeting.jsx)
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}
\`\`\`

## Two Ways to Accept Props

### Method 1: Object Destructuring (Recommended)
\`\`\`jsx
function UserCard({ name, title, image }) {
  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}
\`\`\`

### Method 2: Props Object
\`\`\`jsx
function UserCard(props) {
  return (
    <div>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.title}</p>
    </div>
  );
}
\`\`\`

## Real-World Example: Product Card

\`\`\`jsx
// ProductCard.jsx
function ProductCard({ image, title, price, inStock }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">\${price}</p>
      <button disabled={!inStock}>
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

// App.jsx
function App() {
  return (
    <div className="products">
      <ProductCard 
        image="laptop.jpg"
        title="Gaming Laptop"
        price={1299}
        inStock={true}
      />
      <ProductCard 
        image="phone.jpg"
        title="Smartphone"
        price={799}
        inStock={false}
      />
    </div>
  );
}
\`\`\`

## Props with Arrays and Objects

\`\`\`jsx
// Parent
function App() {
  const user = {
    name: "John",
    email: "john@example.com",
    skills: ["JavaScript", "React", "Node.js"]
  };
  
  return <UserProfile user={user} />;
}

// Child
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <ul>
        {user.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Important: Props are Read-Only!

\`\`\`jsx
// ❌ WRONG - Never modify props!
function Button({ label }) {
  label = "Clicked";  // ❌ Bad!
  return <button>{label}</button>;
}

// ✅ CORRECT - Props are immutable
function Button({ label }) {
  return <button>{label}</button>;
}
\`\`\`

## Conditional Rendering with Props

\`\`\`jsx
function Alert({ type, message }) {
  return (
    <div className={type === 'error' ? 'alert-red' : 'alert-blue'}>
      {message}
    </div>
  );
}

// Usage
<Alert type="error" message="Something went wrong!" />
<Alert type="success" message="Data saved!" />
\`\`\`

## Props with Default Values

\`\`\`jsx
// Method 1: Destructuring with defaults
function Button({ text = "Click me", size = "md" }) {
  return <button className={size}>{text}</button>;
}

// Method 2: Using || operator
function Greeting({ name }) {
  return <h1>Hello, {name || "Guest"}</h1>;
}

// Usage
<Button />  // Uses defaults
<Button text="Submit" size="lg" />
\`\`\`

## Passing Children as Props

\`\`\`jsx
// Card.jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

// App.jsx
<Card title="About">
  <p>This is content inside the card</p>
  <p>Multiple elements work too!</p>
</Card>
\`\`\`

## List Rendering with Props

\`\`\`jsx
// TodoList.jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// App.jsx
function App() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Deploy it" }
  ];
  
  return <TodoList todos={todos} />;
}
\`\`\`

## Key Points

✅ Props pass data parent → child
✅ Props are read-only
✅ Destructuring makes code cleaner
✅ Arrays/objects can be props
✅ Use keys when rendering lists
✅ children is a special prop

Props make components reusable! Next, let's learn **State** to make components interactive! 🚀
          `
        },
        {
          id: 2,
          title: "Component State with Hooks",
          content: `
# Component State with Hooks

## What is State?

**State** is data that changes over time. When state changes, React re-renders the component automatically!

## Introducing useState Hook

The \`useState\` hook is how you add state to functional components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

### Breaking It Down:

\`\`\`jsx
const [count, setCount] = useState(0);
//     ↑        ↑           ↑
//     |        |           default value
//     |        function to update state
//     state variable
\`\`\`

## State vs Props

| Props | State |
|-------|-------|
| Read-only | Can be changed |
| Parent → Child | Inside component |
| Cannot update | Use setState to update |
| Function parameter | Like variable |

## Real Example: Counter

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Counter</h1>
      <p style={{ fontSize: '2em' }}>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
\`\`\`

## Multiple State Variables

\`\`\`jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };
  
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <h1>Welcome, {email}!</h1>
      )}
    </div>
  );
}
\`\`\`

## State with Objects

\`\`\`jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: 'John',
    age: 25,
    city: 'New York'
  });
  
  const updateName = (newName) => {
    setUser({
      ...user,        // Keep other properties
      name: newName   // Update only name
    });
  };
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={() => updateName('Jane')}>
        Change Name
      </button>
    </div>
  );
}
\`\`\`

## State with Arrays

\`\`\`jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Conditional Rendering

\`\`\`jsx
function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
}
\`\`\`

## Common Mistakes

### ❌ Mutating State Directly:
\`\`\`jsx
// ❌ WRONG
const [count, setCount] = useState(0);
count = count + 1;  // Direct mutation - React won't update!

// ✅ CORRECT
setCount(count + 1);
\`\`\`

### ❌ Not Using Spread for Objects:
\`\`\`jsx
// ❌ WRONG - Loses other properties
setUser({ name: "Jane" });

// ✅ CORRECT - Keeps other properties
setUser({ ...user, name: "Jane" });
\`\`\`

## State Update Based on Previous State

\`\`\`jsx
// ❌ May not work as expected
setCount(count + 1);
setCount(count + 1);  // Both use old count value!

// ✅ CORRECT - Use function to get previous state
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);  // Works correctly!
\`\`\`

## Key Takeaways

✅ \`useState\` is a hook for adding state
✅ State changes trigger re-renders
✅ Never mutate state directly
✅ Use spread operator for objects/arrays
✅ Use function form for state updates

Props + State = Complete component! Next: Learn to handle events! 🚀
          `
        }
      ]
    },
    {
      id: 3,
      title: "Module 3: Hooks & Effects",
      lessons: [
        {
          id: 1,
          title: "Advanced Hooks: useEffect & useContext",
          content: `
# Advanced Hooks: useEffect & useContext

## useEffect Hook

\`useEffect\` runs side effects (data fetching, subscriptions, DOM updates) after render:

\`\`\`jsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // This runs after component renders
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once
  
  if (loading) return <p>Loading...</p>;
  return <div>{data}</div>;
}
\`\`\`

## Dependency Array Explained

\`\`\`jsx
// Runs after EVERY render
useEffect(() => {
  console.log('Runs every time');
});

// Runs ONLY ONCE (on mount)
useEffect(() => {
  console.log('Runs once');
}, []);

// Runs when 'count' changes
useEffect(() => {
  console.log('Count changed');
}, [count]);

// Runs when 'count' OR 'user' changes
useEffect(() => {
  console.log('Count or user changed');
}, [count, user]);
\`\`\`

## Cleanup in useEffect

\`\`\`jsx
useEffect(() => {
  // Subscribe
  const subscription = api.subscribe();
  
  // Return cleanup function
  return () => {
    // Unsubscribe
    subscription.unsubscribe();
  };
}, []);
\`\`\`

## useContext Hook

Share data between components without prop drilling:

\`\`\`jsx
import { createContext, useContext } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Provider component
function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

// 3. Use context anywhere
function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  
  return (
    <header style={{ background: isDark ? '#000' : '#fff' }}>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </button>
    </header>
  );
}
\`\`\`

## Custom Hooks

Create reusable logic:

\`\`\`jsx
// useLocalStorage.js
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  const setValueWithStorage = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };
  
  return [value, setValueWithStorage];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Guest');
  
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setName('John')}>
        Save Name
      </button>
    </div>
  );
}
\`\`\`

This is powerful for complex React applications! 🚀
          `
        }
      ]
    },
    {
      id: 4,
      title: "Module 4: Events & Forms",
      lessons: [
        {
          id: 1,
          title: "Handling Events & Building Forms",
          content: `
# Handling Events & Building Forms

## Event Handling

React events use camelCase:

\`\`\`jsx
// HTML
<button onclick="handleClick()">Click</button>

// React
<button onClick={handleClick}>Click</button>
\`\`\`

### Common Events:

\`\`\`jsx
function EventDemo() {
  return (
    <div>
      <button onClick={() => alert('Clicked!')}>Click</button>
      <input onChange={(e) => console.log(e.target.value)} />
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted');
      }}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
\`\`\`

## Controlled Components

\`\`\`jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

## Form Validation

\`\`\`jsx
function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name required';
    if (!form.email.includes('@')) newErrors.email = 'Invalid email';
    if (form.password.length < 6) newErrors.password = 'Min 6 characters';
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form valid!', form);
    } else {
      setErrors(newErrors);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      {errors.name && <span>{errors.name}</span>}
      
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
      
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      {errors.password && <span>{errors.password}</span>}
      
      <button type="submit">Sign Up</button>
    </form>
  );
}
\`\`\`

Events + Forms = Interactive applications! 🚀
          `
        }
      ]
    },
    {
      id: 5,
      title: "Module 5: Advanced Patterns",
      lessons: [
        {
          id: 1,
          title: "Performance, Routing & Deployment",
          content: `
# Performance, Routing & Deployment

## Performance Optimization

### React.memo for Components:
\`\`\`jsx
const UserCard = React.memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});
\`\`\`

### useMemo for Expensive Calculations:
\`\`\`jsx
function DataProcessor({ data }) {
  const processed = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]);
  
  return <div>{processed}</div>;
}
\`\`\`

## React Router

\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

## State Management (Redux)

\`\`\`jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value++; },
    decrement: (state) => { state.value--; }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});
\`\`\`

## Deployment

### Vercel (Easiest):
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### GitHub Pages:
\`\`\`bash
npm run build
# Follow deployment instructions
\`\`\`

### Netlify:
Connect your GitHub repo for automatic deployments!

## Key Points

✅ Optimize with memo and useMemo
✅ Use React Router for multi-page apps
✅ Use Redux for complex state
✅ Deploy on Vercel or Netlify
✅ Always test before deployment

Congratulations! You're now a React expert! 🎉
          `
        }
      ]
    }
  ]
};
