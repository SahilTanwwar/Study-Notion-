export const djangoCourseData = {
    _id: "django-course-001",
    courseName: "Django - Full Stack Web Framework",
    courseDescription: "Master Django, the batteries-included Python web framework. Build full-stack applications with models, views, templates, and REST APIs.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/9307/9307630.png",
    whatYouWillLearn: "\u2022 Django project structure and setup\n\u2022 Models, views, and templates (MVT)\n\u2022 Django ORM and database management\n\u2022 User authentication system\n\u2022 Django REST Framework for APIs\n\u2022 Deployment and best practices",
    courseContent: [
        {
            sectionName: "\ud83d\ude80 Module 1: Introduction",
            lessons: [
                { title: "1.1 What is Django?", duration: "18 min", content: "# Introduction to Django\n\nDjango is a high-level Python web framework that encourages rapid development and clean, pragmatic design.\n\n## Why Django?\n- Batteries included: admin panel, ORM, auth built-in\n- Highly secure by default" },
                { title: "1.2 Setup & Project", duration: "15 min", content: "# Setup\n\n## Setting Up\n- pip install django\n- django-admin startproject myproject\n- python manage.py runserver" }
            ]
        },
        {
            sectionName: "\ud83d\udcc1 Module 2: Apps Structure",
            lessons: [
                { title: "2.1 Creating Apps", duration: "15 min", content: "# Apps and Project Structure\n\n## Django Apps\nA project is a collection of configurations and apps. An app is a web application that does something.\n\n## Creating an App\npython manage.py startapp myapp" },
                { title: "2.2 Registering Apps", duration: "10 min", content: "# Registering Apps\n\nAdd the app name to INSTALLED_APPS in settings.py to let Django know it exists." }
            ]
        },
        {
            sectionName: "\ud83d\udcbe Module 3: Models & ORM",
            lessons: [
                { title: "3.1 Django Models", duration: "22 min", content: "# Django Models\n\n## Field Types\n- CharField: short text\n- TextField: long text\n- IntegerField: numbers\n- ForeignKey: relationships\n\n## Migrations\n- python manage.py makemigrations\n- python manage.py migrate" },
                { title: "3.2 QuerySets & Admin", duration: "20 min", content: "# QuerySets & Admin\n\n## QuerySets\n- Model.objects.all(): get all\n- Model.objects.filter(): filter\n- Model.objects.create(): create\n\n## Admin Panel\n- Register models in admin.py\n- python manage.py createsuperuser" }
            ]
        },
        {
            sectionName: "\ud83c\udf10 Module 4: Views & Routing",
            lessons: [
                { title: "4.1 Views", duration: "20 min", content: "# Views\n\nViews handle requests and return responses.\n- Function-based views (FBV)\n- Class-based views (CBV)" },
                { title: "4.2 URL Routing", duration: "18 min", content: "# URLs\n\n## URL Patterns\n- Map URLs to views in urls.py\n- Use path() for simple routes\n- Dynamic segments with angle brackets" }
            ]
        },
        {
            sectionName: "\ud83d\uddbc\ufe0f Module 5: Templates",
            lessons: [
                { title: "5.1 DTL Basics", duration: "25 min", content: "# Templates\n\n## Django Template Language (DTL)\n- Variables: {{ variable }}\n- Tags: {% for %}, {% if %}\n- Filters: {{ name|title }}" },
                { title: "5.2 Template Inheritance", duration: "20 min", content: "# Template Inheritance\n\nExtend a base layout to avoid repeating HTML.\nTemplate inheritance with {% extends 'base.html' %}." }
            ]
        },
        {
            sectionName: "\ud83d\udce4 Module 6: Forms & Auth",
            lessons: [
                { title: "6.1 Django Forms", duration: "25 min", content: "# Forms\n\n- Django Forms for validation\n- ModelForm for database forms\n- CSRF protection built-in" },
                { title: "6.2 Authentication", duration: "20 min", content: "# Auth\n\n- Built-in User model\n- Login, logout, register views\n- Permission and group system" }
            ]
        }
    ]
};
