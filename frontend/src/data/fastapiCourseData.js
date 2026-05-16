export const fastapiCourseData = {
    _id: "fastapi-course-001",
    courseName: "FastAPI - Modern Python APIs",
    courseDescription: "Build high-performance APIs with FastAPI. Learn async programming, automatic documentation, data validation with Pydantic, and deployment.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
    whatYouWillLearn: "\u2022 FastAPI fundamentals and async Python\n\u2022 Path and query parameters\n\u2022 Request body validation with Pydantic\n\u2022 Database integration\n\u2022 Authentication with JWT\n\u2022 Auto-generated API documentation",
    courseContent: [
        {
            sectionName: "\u26a1 Module 1: Introduction",
            lessons: [
                { title: "1.1 What is FastAPI?", duration: "15 min", content: "# Introduction to FastAPI\n\nFastAPI is a modern, fast web framework for building APIs with Python 3.7+.\n\n## Why FastAPI?\n- Fastest Python framework (on par with Node.js)\n- Automatic API documentation (Swagger UI)" },
                { title: "1.2 Setup & Hello World", duration: "15 min", content: "# Setup\n\n## Setting Up\n- pip install fastapi uvicorn\n- Create main.py\n- Run: uvicorn main:app --reload\n- Docs at /docs automatically" }
            ]
        },
        {
            sectionName: "\ud83d\udd17 Module 2: Routing",
            lessons: [
                { title: "2.1 HTTP Methods", duration: "18 min", content: "# HTTP Methods\n\n- @app.get(): read data\n- @app.post(): create data\n- @app.put(): update data\n- @app.delete(): remove data" },
                { title: "2.2 Status Codes", duration: "15 min", content: "# Status Codes\n\n- 200: Success\n- 201: Created\n- 404: Not Found\n- 422: Validation Error" }
            ]
        },
        {
            sectionName: "\ud83d\udce6 Module 3: Parameters",
            lessons: [
                { title: "3.1 Path Parameters", duration: "20 min", content: "# Path Parameters\n\nCapture values from the URL path, strongly typed using Python hints.\n\n## Validations\nUse Path() to set constraints (min_length, max_length, regex)." },
                { title: "3.2 Query Parameters", duration: "20 min", content: "# Query Parameters\n\nOptional parameters in the URL after the ? mark. Defaults to None if not required. Validate using Query()." }
            ]
        },
        {
            sectionName: "\ud83d\udcdd Module 4: Pydantic",
            lessons: [
                { title: "4.1 Request Bodies", duration: "25 min", content: "# Request Body\n\nUse Pydantic BaseModels to define and validate JSON request payloads." },
                { title: "4.2 Response Models", duration: "20 min", content: "# Response Models\n\nDefine what the API returns using response_model to filter out sensitive data." }
            ]
        },
        {
            sectionName: "\ud83d\udd12 Module 5: Dependencies & DB",
            lessons: [
                { title: "5.1 Dependency Injection", duration: "22 min", content: "# Dependency Injection\n\nFastAPI has a powerful dependency injection system for sharing logic, db connections, etc." },
                { title: "5.2 SQLAlchemy Setup", duration: "25 min", content: "# SQLAlchemy Setup\n\n- Async or sync database sessions\n- Create tables\n- Dependency function to get DB session (get_db)" }
            ]
        },
        {
            sectionName: "\ud83d\udee1\ufe0f Module 6: Security & Auth",
            lessons: [
                { title: "6.1 OAuth2 Flow", duration: "20 min", content: "# Authentication\n\n## OAuth2 with Password Flow\nBuilt-in tools to implement OAuth2 flows with JWT tokens." },
                { title: "6.2 Protected Routes", duration: "20 min", content: "# Protected Routes\n\nInject user dependency to protect endpoints from unauthorized access." }
            ]
        }
    ]
};
