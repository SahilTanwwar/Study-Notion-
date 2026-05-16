export const nuxtjsCourseData = {
    _id: "nuxtjs-course-001",
    courseName: "Nuxt.js - Vue.js Framework",
    courseDescription: "Build server-rendered Vue.js applications with Nuxt.js. Learn SSR, static generation, modules, and full-stack development with Vue.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    whatYouWillLearn: "\u2022 Nuxt.js project setup and structure\n\u2022 File-based routing and layouts\n\u2022 Server-Side Rendering with Vue\n\u2022 Data fetching and state management\n\u2022 Nuxt modules and plugins\n\u2022 Deployment strategies",
    courseContent: [
        {
            sectionName: "\ud83d\udfe2 Module 1: Introduction",
            lessons: [
                { title: "1.1 What is Nuxt.js?", duration: "16 min", content: "# Introduction to Nuxt.js\n\nNuxt.js is a framework built on top of Vue.js that provides SSR, SSG, and powerful features out of the box." },
                { title: "1.2 Setup & Structure", duration: "15 min", content: "# Setup\n\n- npx nuxi init my-app\n- cd my-app\n- npm install\n- npm run dev" }
            ]
        },
        {
            sectionName: "\ud83d\udd17 Module 2: Routing",
            lessons: [
                { title: "2.1 File-Based Routing", duration: "18 min", content: "# File-Based Routing\n\n- pages/index.vue = /\n- pages/about.vue = /about\n- pages/blog/[id].vue = /blog/:id" },
                { title: "2.2 NuxtLink", duration: "15 min", content: "# NuxtLink\n\nClient-side navigation without full page reload." }
            ]
        },
        {
            sectionName: "\ud83d\uddbc\ufe0f Module 3: Layouts",
            lessons: [
                { title: "3.1 Page Layouts", duration: "18 min", content: "# Layouts\n\nShared page structure defined in layouts/ directory." },
                { title: "3.2 Middleware", duration: "20 min", content: "# Middleware\n\nRun code before navigating to a page. Useful for auth guards." }
            ]
        },
        {
            sectionName: "\ud83d\udcbe Module 4: Data Fetching",
            lessons: [
                { title: "4.1 useFetch()", duration: "20 min", content: "# useFetch()\n\nUniversal data fetching. Fetches data on the server during SSR and on the client during navigation." },
                { title: "4.2 useAsyncData()", duration: "18 min", content: "# useAsyncData()\n\nFor more complex queries. Combines with $fetch." }
            ]
        },
        {
            sectionName: "\ud83d\udee0\ufe0f Module 5: State & Modules",
            lessons: [
                { title: "5.1 State Management", duration: "15 min", content: "# State Management\n\n## useState()\nReactive state shared across components.\n## Pinia\nRecommended state management library for Vue." },
                { title: "5.2 Nuxt Modules", duration: "15 min", content: "# Nuxt Modules\n\nExtend Nuxt functionality with modules like @nuxt/content and @nuxtjs/tailwindcss." }
            ]
        },
        {
            sectionName: "\ud83d\ude80 Module 6: SEO & Deploy",
            lessons: [
                { title: "6.1 SEO Optimization", duration: "18 min", content: "# SEO\n\n- useHead() for meta tags\n- useSeoMeta() for comprehensive SEO metadata" },
                { title: "6.2 Deployment", duration: "15 min", content: "# Deployment\n\n- Vercel: zero-config deployment\n- Netlify: static and SSR\n- Node.js server setup" }
            ]
        }
    ]
};
