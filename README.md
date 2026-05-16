
# Study-Notion - Ed-Tech Learning Platform 📚

StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. 
The platform is built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).

## 🌍 Live Link
👉 **[https://study-notionapp.netlify.app/](https://study-notionapp.netlify.app/)**

---

## 📋 Table of Contents
- [Features](#features-)
- [Tech Stack](#tech-stack-)
- [Project Structure](#project-structure-)
- [Installation](#installation-)
- [Setup & Configuration](#setup--configuration-)
- [Running the Application](#running-the-application-)
- [Deployment](#deployment-)
- [System Architecture](#system-architecture-)
- [Key Functionalities](#key-functionalities-)

---

## ✨ Features

### For Students 👨‍🎓
- 🏠 **Homepage**: Browse courses with beautiful UI
- 📚 **Course Catalog**: Browse all available courses with filters
- 💝 **Wishlist**: Save courses for later
- 🛒 **Shopping Cart**: Add/remove courses and checkout
- 🎓 **Course Content**: Watch videos, read materials, take assignments
- 📊 **Dashboard**: Track enrolled courses and progress
- ⭐ **Ratings & Reviews**: Rate and review completed courses
- 👤 **Profile Management**: Update profile and view account details

### For Instructors 👨‍🏫
- 📊 **Dashboard**: Overview of all courses and student metrics
- 📈 **Insights**: Detailed analytics (views, clicks, engagement)
- 🎬 **Course Management**: Create, edit, delete courses
- 📝 **Content Management**: Add sections, subsections, videos, and materials
- 💰 **Pricing Management**: Set course prices and discounts
- 👥 **Student Management**: View enrolled students and progress

### Security & Authentication 🔒
- 📧 **Email-based Authentication**: Sign up and login with email
- 🔑 **OTP Verification**: Secure email verification with OTP
- 🔐 **Password Reset**: Forgot password functionality with email links
- 🍪 **JWT Tokens**: Secure session management
- 🔐 **Password Encryption**: Bcrypt for password hashing

---

## 💻 Tech Stack

### Frontend 🎨
| Technology | Purpose |
|-----------|---------|
| **React.js** | UI library |
| **Vite** | Build tool & dev server |
| **Redux Toolkit** | State management |
| **Tailwind CSS** | Styling |
| **Axios** | HTTP client |
| **React Router** | Routing |
| **Framer Motion** | Animations |
| **Chart.js** | Data visualization |
| **React Hot Toast** | Notifications |

### Backend ⚙️
| Technology | Purpose |
|-----------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication |
| **Bcrypt** | Password hashing |
| **Nodemailer** | Email service |
| **Cloudinary** | Image/video hosting |

### Database 🛢️
| Technology | Purpose |
|-----------|---------|
| **MongoDB Atlas** | Cloud database |
| **Mongoose** | Schema validation |

### Deployment 🚀
| Service | Component |
|---------|-----------|
| **Netlify** | Frontend hosting |
| **Render** | Backend hosting |
| **Cloudinary** | Media storage |

---

## 📁 Project Structure

```
Study-Notion/
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── services/           # API services
│   │   ├── slices/             # Redux slices
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   └── App.jsx
│   └── package.json
│
├── backend/                    # Node.js backend
│   ├── controllers/            # Route controllers
│   ├── models/                 # MongoDB schemas
│   ├── routes/                 # API routes
│   ├── middleware/             # Express middleware
│   ├── config/                 # Configuration files
│   ├── utils/                  # Utility functions
│   ├── mail/                   # Email templates
│   ├── server.js               # Entry point
│   └── package.json
│
└── README.md
```

---

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- Gmail account (for email service)

### Step 1: Clone Repository
```bash
git clone https://github.com/SahilTanwwar/Study-Notion.git
cd Study-Notion
```

### Step 2: Setup Backend
```bash
cd backend
npm install
```

### Step 3: Setup Frontend
```bash
cd frontend
npm install
```

---

## ⚙️ Setup & Configuration

### Backend Configuration

Create a `.env` file in the `backend/` directory:

```env
# Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/Study_Notion

# Cloudinary
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret

# Email Service
MAIL_USER=your_gmail@gmail.com
MAIL_PASS=your_gmail_app_password

# Server
PORT=5000
JWT_SECRET=your_jwt_secret_key

# Client
CLIENT_URL=http://localhost:3000
```

### Frontend Configuration

Create a `.env.local` file in the `frontend/` directory:

```env
VITE_APP_BASE_URL=http://localhost:5000/api/v1
```

---

## 🚀 Running the Application

### Development Mode

#### Terminal 1: Backend
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:5000`

#### Terminal 2: Frontend
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

### Production Build

#### Frontend
```bash
cd frontend
npm run build
```

#### Backend
```bash
cd backend
npm start
```

---

## 🌐 Deployment

### Backend - Render.com
1. Push code to GitHub
2. Create Web Service on Render
3. Connect GitHub repository
4. Set Build Command: `npm i`
5. Set Start Command: `node server.js`
6. Add all environment variables
7. Deploy!

### Frontend - Netlify
1. Connect GitHub repository
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Add environment variable: `VITE_APP_BASE_URL=your_backend_url`
5. Deploy!

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Client (Frontend)                        │
│              React + Redux + Tailwind CSS                   │
│                  (Netlify Deployment)                       │
└──────────────────────┬──────────────────────────────────────┘
                       │ (REST APIs)
                       │ (HTTPS)
┌──────────────────────▼──────────────────────────────────────┐
│                  API Server (Backend)                        │
│            Node.js + Express.js + MongoDB                    │
│                (Render Deployment)                           │
└──────────────────────┬──────────────────────────────────────┘
                       │ (Mongoose)
┌──────────────────────▼──────────────────────────────────────┐
│                    Database                                  │
│              MongoDB Atlas (Cloud)                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Key Functionalities

### Authentication System
- ✅ User registration with email verification
- ✅ OTP-based email confirmation
- ✅ Login/Logout functionality
- ✅ Password reset via email
- ✅ JWT-based session management

### Course Management
- ✅ Create courses (Instructors only)
- ✅ Add sections and subsections
- ✅ Upload videos and course materials
- ✅ Edit course details and pricing
- ✅ Delete courses
- ✅ Course categorization

### Student Features
- ✅ Browse and search courses
- ✅ Add courses to wishlist
- ✅ Purchase courses
- ✅ View enrolled courses
- ✅ Track course progress
- ✅ Rate and review courses
- ✅ Download course materials

### Instructor Analytics
- ✅ Dashboard with key metrics
- ✅ Student enrollment statistics
- ✅ Course performance insights
- ✅ Revenue tracking (when payment enabled)

---

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/v1/auth/signup` - Register new user
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/sendotp` - Send OTP
- `POST /api/v1/auth/reset-password-token` - Get reset token
- `POST /api/v1/auth/reset-password` - Reset password

### Course Endpoints
- `GET /api/v1/course/getAllCourses` - Get all courses
- `GET /api/v1/course/getCourseDetails` - Get course details
- `POST /api/v1/course/createCourse` - Create course (Instructor)
- `PUT /api/v1/course/editCourse` - Edit course (Instructor)
- `DELETE /api/v1/course/deleteCourse` - Delete course (Instructor)

### Payment Endpoints
- `POST /api/v1/payments/capturePayment` - Process payment
- `POST /api/v1/payments/verifySignature` - Verify payment

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Sahil Tanwar**
- GitHub: [@SahilTanwwar](https://github.com/SahilTanwwar)

---

## 🙏 Acknowledgments

- Created as a full-stack MERN project
- Special thanks to the open-source community

---








## StudyNotion Aim 📚 
<br/>
1️⃣ A seamless and interactive learning experience for students, making education more accessible and engaging.<br/>
2️⃣ A platform for instructors to showcase their expertise and connect with learners across the globe.<br/>

<br/>
<br/>



## Tech Stack 💻🔧 

## Frontend 🎨 : 
- React.js
- Vite
- Redux.js
- CSS
- Tailwind CSS


## Backend ⚙️ :
- Node.js
- Express


## Database 🛢️ :
- MongoDB

## Cloudinary Integration ☁️
- Cloudinary

<hr/>




## System Architecture 🏰
<br/>
☝ The StudyNotion ed-tech platform consists of three main components:  <br/>
The front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

🎨 Front-end  <br/>
The front end of the platform is built using ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces also **Loading Skeleton**, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

⚙️ Back-end  <br/>
The back end of the platform is built using NodeJS and ExpressJS, which are popular frameworks for building scalable and robust server-side applications. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.

🛢️ Database  <br/>
The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data, which is useful for storing course content such as videos, images, and PDFs. The database stores the course content, user data, and other relevant information related to the platform.



## Architecture Diagram 🏗️
<br/>
Here is a high-level diagram that illustrates the architecture of the StudyNotion ed-tech platform.


<hr/>

#### The front end of StudyNotion has all the necessary pages that an ed-tech platform should have. Some of these pages are: 

For Students:
- **Homepage 🏠:** A brief introduction to the platform with links to the course list and user details and random background.
- **Course List 📚:** A list of all the courses available on the platform, along with their descriptions and ratings.
- **Wishlist 💡:** Displays all the courses that a student has added to their wishlist.
- **Cart Checkout 🛒 :** Allows the user to complete course purchases.
- **Course Content 🎓:** Presents the course content for a particular course, including videos and related material.
- **User Details 👤:** Provides details about the student's account, including their name, email, and other relevant information.
- **User Edit Details ✏️:** Allows students to edit their account details.

For Instructors:
- **Dashboard 📊:** Offers an overview of the instructor's courses, along with ratings and feedback for each course.
- **Insights 📈:** Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
- **Course Management Pages 🛠️:** Enables instructors to create, update, and delete courses, as well as manage course content and pricing.
- **View and Edit Profile Details 👀:** Allows instructors to view and edit their account details.



### Back-end ⚙️

The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

#### Back-end Features

- **User Authentication and Authorization 🔐:** Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
- **Course Management 🛠️:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
- **Payment Integration 💳:** Currently disabled. Payment functionality can be integrated later with your preferred payment gateway.
- **Cloud-based Media Management ☁️ :** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
- **Markdown Formatting ✍️:** Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.



#### Data Models and Database Schema

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

- **Student Schema 🧑‍🎓:** Includes fields such as name, email, password, and course details for each student.
- **Instructor Schema 👩‍🏫:** Includes fields such as name, email, password, and course details for each instructor.
- **Course Schema 📚:** Includes fields such as course name, description, instructor details, and media content.


### Database 🛢️
The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.

## Schema 📋
<img width='
<hr/>


## React Hooks 🎣

Utilized several React hooks for efficient state management and dynamic behavior:

- `useState`
- `useEffect`
- `useDispatch`
- `useParams`
- `useSelector`
- `useLocation`
- `useNavigate`
- `useRef`
- `useForm`
- `useDropzone`
- `Custom-Hook`

<br/>

## 📚 **React Library**:

- 🚀 **Lazy Loading**: Enhance performance by lazily loading images using the react-lazy-load-image library.
- 📊 **Chart.js:**  Versatile charting library for creating interactive and visually appealing charts.
- 🎭**Framer Motion:**  Animation library for React, providing smooth and expressive motion.
- 📁 **React Dropzone:**  Drag-and-drop file uploader for React applications.
- 🍞 **React Hot Toast:**  Elegant and customizable toast notifications for React applications.
- 🔢 **React OTP Input:**  Input component for one-time password entry in React forms.
- 📊 **React Super Responsive Table:**  Highly responsive and feature-rich table component for React.
- 🔄 **Swiper:**  Modern touch slider for mobile and desktop browsers.
- 🖋️ **React Type Animation:**  Simple and configurable typing animation component for React.
- 🎥 **Video React:**  React-based video player for building rich multimedia experiences in web applications.



##  🖥️ Screen Preview :

# Random Home Page Background 🏠 
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/home3.png' />
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/home4.png' />

# About Page
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/about.png' />

# Contact Page
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/contact.png' />

# Forgot Password
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/forgot%20pass.png' />

# Dashboard
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/dashboard.png' />

# Edit Profile
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/edit%20profile.png' />


# Add Course
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/add%20course.png' />

# Edit Course
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/edit%20course.png' />

# Course Details 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/course%20details1.png' />

# Course Details 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/course%20details2.png' />

# Add Review
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/add%20review.png' />

# Cart 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/cart1.png' />




# Enrolled Courses 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/enrolled%20courses1.png' />

# Enrolled Courses 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/enrolled%20courses2.png' />

# Instructor Data 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/instrctor%20data1.png' />

# Instructor Data 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/instrctor%20data2.png' />

# My Courses 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/myCourses1.png' />

# My Courses 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/myCourses2.png' />

# View Courses 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/view%20course1.png' />

# View Courses 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/view%20course2.png' />


# Delete Account
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/delete%20account.png' />

# Footer
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/footer.png' />













 
