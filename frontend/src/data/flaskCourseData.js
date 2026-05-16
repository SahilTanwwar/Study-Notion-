export const flaskCourseData = {
    _id: "flask-course-001",
    courseName: "Flask - Python Web Framework",
    courseDescription: "Build web applications with Flask, Python's lightweight micro-framework. Learn routing, templates, databases, APIs, and deployment.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
    whatYouWillLearn: "\u2022 Flask fundamentals and project setup\n\u2022 Routing and URL handling\n\u2022 Jinja2 templates and forms\n\u2022 Database integration with SQLAlchemy\n\u2022 Building REST APIs\n\u2022 Authentication and deployment",
    courseContent: [
        {
            sectionName: "\ud83c\udf36\ufe0f Module 1: Introduction to Flask",
            lessons: [
                { title: "1.1 What is Flask?", duration: "15 min", content: "# What is Flask?\n\nFlask is a lightweight WSGI web framework for Python. It is called a micro-framework because it does not require particular tools or libraries.\n\n## Why Flask?\n- Simple and easy to learn\n- Highly flexible and extensible\n- Great for APIs and small-medium apps" },
                { title: "1.2 Environment Setup", duration: "15 min", content: "# Setup\n\n## Setting Up\n- Create virtual environment: python -m venv venv\n- Install Flask: pip install flask\n- Create app.py and start coding" }
            ]
        },
        {
            sectionName: "\ud83d\udd17 Module 2: Routing and URLs",
            lessons: [
                { title: "2.1 Basic Routes", duration: "20 min", content: "# Routes\n\n## Routing\nRoutes connect URLs to Python functions using @app.route() decorator." },
                { title: "2.2 Dynamic URLs", duration: "20 min", content: "# Dynamic URLs\n\n## Dynamic Parameters\nVariable rules: <variable_name>, <int:id>, <string:name>.\n\n## HTTP Methods\nHandle GET, POST, PUT, DELETE with methods=['GET', 'POST'] argument." }
            ]
        },
        {
            sectionName: "\ud83d\uddbc\ufe0f Module 3: Templates",
            lessons: [
                { title: "3.1 Jinja2 Templating", duration: "22 min", content: "# Jinja2 Templates\n\n## Template Variables\n- Variables: {{ variable }}\n- Filters: {{ name|capitalize }}" },
                { title: "3.2 Advanced Templating", duration: "22 min", content: "# Advanced Templating\n\n## Control Flow\n- If/Else: {% if %} {% endif %}\n- Loops: {% for item in list %} {% endfor %}\n\n## Template Inheritance\n- Base template with blocks: {% block content %} {% endblock %}\n- Child templates: {% extends 'base.html' %}" }
            ]
        },
        {
            sectionName: "\ud83d\udce4 Module 4: Forms & Requests",
            lessons: [
                { title: "4.1 Handling Requests", duration: "18 min", content: "# Handling Requests\n\nUse the global request object. request.form for POST data, request.args for GET." },
                { title: "4.2 Flask-WTF", duration: "20 min", content: "# Flask-WTF\n\nIntegrate WTForms for robust form handling, CSRF protection, and validation.\n\n## Flash Messages\nSend one-time alerts to the user using flash()." }
            ]
        },
        {
            sectionName: "\ud83d\udcbe Module 5: Databases",
            lessons: [
                { title: "5.1 SQLAlchemy ORM", duration: "25 min", content: "# SQLAlchemy ORM\n\n## Configuration\nConnect to SQLite or Postgres. Define models as classes extending db.Model." },
                { title: "5.2 CRUD & Relationships", duration: "25 min", content: "# CRUD & Relationships\n\n## CRUD Operations\n- Create: db.session.add(), db.session.commit()\n- Read: Model.query.all()\n- Update: Modify object and commit\n- Delete: db.session.delete() and commit\n\n## Relationships\nOne-to-Many and Many-to-Many configurations using db.relationship." }
            ]
        },
        {
            sectionName: "\ud83d\udd12 Module 6: APIs & Auth",
            lessons: [
                { title: "6.1 REST APIs", duration: "20 min", content: "# REST APIs\n\n## Returning JSON\nUse jsonify() to convert dictionaries and lists to JSON responses.\n\n## Flask-RESTful\nAn extension for quickly building REST APIs using Resource classes." },
                { title: "6.2 Authentication", duration: "20 min", content: "# Authentication\n\nImplement token-based auth (JWT) using Flask-JWT-Extended, or session-based using Flask-Login." }
            ]
        }
    ]
};
