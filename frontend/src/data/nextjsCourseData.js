export const nextjsCourseData = {
    _id: "nextjs-course-001",
    courseName: "Next.js - Full Stack React Framework",
    courseDescription: "Master Next.js for production-grade React applications. Learn SSR, SSG, API routes, authentication, and deployment with Vercel.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/8099/8099220.png",
    whatYouWillLearn: "\u2022 Next.js project setup and file-based routing\n\u2022 Server-Side Rendering (SSR) and Static Generation (SSG)\n\u2022 API routes and backend logic\n\u2022 Data fetching strategies\n\u2022 Authentication patterns\n\u2022 Deployment with Vercel",
    courseContent: [
        {
            sectionName: "\u25b2 Module 1: Introduction",
            lessons: [
                { title: "1.1 What is Next.js?", duration: "18 min", content: "# Introduction to Next.js\n\nNext.js is a React framework for production. It provides features like SSR, SSG, file-based routing, and API routes out of the box." },
                { title: "1.2 Setup & Structure", duration: "15 min", content: "# Setup\n\n## Setting Up\n- npx create-next-app@latest my-app\n- cd my-app\n- npm run dev" }
            ]
        },
        {
            sectionName: "\ud83d\udd17 Module 2: Routing",
            lessons: [
                { title: "2.1 File-Based Routing", duration: "20 min", content: "# Routing\n\nFiles in the app/ directory automatically become routes.\n- app/page.js = /\n- app/about/page.js = /about" },
                { title: "2.2 Dynamic Routes", duration: "18 min", content: "# Dynamic Routes\n\nUse square brackets for dynamic segments.\n- app/blog/[id]/page.js = /blog/:id" }
            ]
        },
        {
            sectionName: "\ud83d\uddbc\ufe0f Module 3: UI & Navigation",
            lessons: [
                { title: "3.1 Layouts & Pages", duration: "20 min", content: "# Layouts\n\nShared UI across pages. layout.js wraps all child pages." },
                { title: "3.2 Navigation", duration: "15 min", content: "# Navigation\n\n- Link component for client-side navigation\n- useRouter hook for programmatic navigation" }
            ]
        },
        {
            sectionName: "\ud83d\udcbe Module 4: Data Fetching",
            lessons: [
                { title: "4.1 Server Components", duration: "18 min", content: "# Server Components\n\nComponents rendered on the server. Directly fetch data inside components by making the component async." },
                { title: "4.2 Client Components", duration: "15 min", content: "# Client Components\n\nComponents that execute on the client. Add 'use client' at the top of the file." }
            ]
        },
        {
            sectionName: "\u26a1 Module 5: API Routes",
            lessons: [
                { title: "5.1 Route Handlers", duration: "22 min", content: "# API Routes\n\nCreate backend endpoints in app/api/ directory.\n- Handle GET, POST, PUT, DELETE" },
                { title: "5.2 DB Connections", duration: "20 min", content: "# DB Connections\n\nConnect directly to your database within Route Handlers." }
            ]
        },
        {
            sectionName: "\ud83d\ude80 Module 6: Deploy & Auth",
            lessons: [
                { title: "6.1 Authentication", duration: "20 min", content: "# Authentication\n\nNextAuth.js is the standard library for Authentication in Next.js." },
                { title: "6.2 Deployment", duration: "15 min", content: "# Deployment\n\nDeploying a Next.js app to Vercel is one-click and automatically configures CI/CD." }
            ]
        }
    ]
};
