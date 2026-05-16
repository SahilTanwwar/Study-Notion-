export const sanityCourseData = {
    _id: "sanity-course-001",
    courseName: "Sanity - Headless CMS",
    courseDescription: "Learn Sanity.io, the modern headless CMS. Build content-driven applications with structured content, GROQ queries, and real-time collaboration.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png",
    whatYouWillLearn: "\u2022 Sanity Studio setup and configuration\n\u2022 Schema definition and content modeling\n\u2022 GROQ query language\n\u2022 Integration with React/Next.js\n\u2022 Image handling and assets\n\u2022 Real-time content updates",
    courseContent: [
        {
            sectionName: "\ud83d\udcdd Module 1: Introduction",
            lessons: [
                { title: "1.1 What is Sanity?", duration: "15 min", content: "# Introduction to Sanity\n\nSanity is a headless CMS that provides a real-time content platform for structured content." },
                { title: "1.2 Setup Studio", duration: "15 min", content: "# Setting Up\n\n- npm create sanity@latest\n- Choose project template\n- npm run dev to start Studio" }
            ]
        },
        {
            sectionName: "\ud83d\udcc1 Module 2: Schemas",
            lessons: [
                { title: "2.1 Defining Schemas", duration: "20 min", content: "# Defining Schemas\n\nSchemas define your content structure using pure JavaScript objects." },
                { title: "2.2 Field Types", duration: "20 min", content: "# Field Types\n\n- string, text, number, boolean, image, reference, array." }
            ]
        },
        {
            sectionName: "\ud83d\udd0d Module 3: GROQ Basics",
            lessons: [
                { title: "3.1 What is GROQ?", duration: "18 min", content: "# GROQ Basics\n\nGraph-Relational Object Queries - Sanity's query language." },
                { title: "3.2 Basic Queries", duration: "20 min", content: "# Basic Queries\n\n- Fetch all documents: *[_type == 'post']\n- Filter: *[_type == 'post' && published == true]" }
            ]
        },
        {
            sectionName: "\u2699\ufe0f Module 4: Advanced GROQ",
            lessons: [
                { title: "4.1 Slicing & Ordering", duration: "15 min", content: "# Ordering and Slicing\n\n- Order results: | order(publishedAt desc)\n- Limit results: [0...10]" },
                { title: "4.2 References & Joins", duration: "20 min", content: "# References and Joins\n\nUse the -> operator to fetch data from referenced documents.\nExample: *[_type == 'post']{title, author->{name, image}}" }
            ]
        },
        {
            sectionName: "\ud83d\udcbb Module 5: Client Setup",
            lessons: [
                { title: "5.1 @sanity/client", duration: "15 min", content: "# @sanity/client\n\nInstall the official client to interact with your dataset." },
                { title: "5.2 Fetching Data", duration: "20 min", content: "# Fetching Data\n\nConfigure client with project ID and dataset, then use client.fetch(query) to get data." }
            ]
        },
        {
            sectionName: "\ud83c\udfa8 Module 6: Frontend Usage",
            lessons: [
                { title: "6.1 Portable Text", duration: "25 min", content: "# Portable Text\n\nRender rich text content using @portabletext/react." },
                { title: "6.2 Image Processing", duration: "15 min", content: "# Image Processing\n\nUse @sanity/image-url for dynamic image transformations (resizing, cropping) on the fly." }
            ]
        }
    ]
};
