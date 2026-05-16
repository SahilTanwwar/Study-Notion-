export const pythonCourseData = {
    _id: "python-course-001",
    courseName: "Python Programming - Complete Course",
    courseDescription: "Learn Python from scratch to advanced. Master data structures, OOP, file handling, and build real-world projects with Python.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    customLink: "/python-course",
    ratingAndReviews: [1, 2, 3, 4, 5],
    whatYouWillLearn: "\u2022 Python fundamentals and syntax\n\u2022 Data structures: lists, tuples, dictionaries, sets\n\u2022 Functions and modules\n\u2022 Object-Oriented Programming in Python\n\u2022 File handling and error management\n\u2022 Working with APIs and libraries",
    courseContent: [
        {
            sectionName: "\ud83d\udc0d Module 1: Python Basics",
            lessons: [
                {
                    title: "1.1 Introduction to Python",
                    duration: "15 min",
                    content: "# Introduction to Python\n\n## What is Python?\nPython is a high-level, interpreted programming language known for its simple and readable syntax.\n\n## Setting Up\n- Download Python from python.org\n- Install VS Code or PyCharm\n- Run: python --version to verify"
                },
                {
                    title: "1.2 Variables and Data Types",
                    duration: "18 min",
                    content: "# Variables and Data Types\n\n## Variables in Python\nNo need to declare type. Just assign a value.\n\n## Data Types\n- int: whole numbers (42)\n- float: decimal numbers (3.14)\n- str: text strings (\"hello\")\n- bool: True or False\n\n## Type Conversion\n- int() converts to integer\n- str() converts to string"
                }
            ]
        },
        {
            sectionName: "\ud83d\udd04 Module 2: Control Flow",
            lessons: [
                {
                    title: "2.1 Conditionals",
                    duration: "18 min",
                    content: "# Conditionals\n\n## If-Elif-Else\nPython uses indentation instead of curly braces.\n\nExample:\nif x > 5:\n    print('Greater')\nelif x == 5:\n    print('Equal')\nelse:\n    print('Lesser')"
                },
                {
                    title: "2.2 Loops",
                    duration: "20 min",
                    content: "# Loops\n\n## For Loops\nIterate over sequences (lists, strings, ranges).\n\n## While Loops\nRepeat while a condition is True.\n\n## Break and Continue\n- break: exit the loop\n- continue: skip to next iteration"
                }
            ]
        },
        {
            sectionName: "\ud83d\udce6 Module 3: Data Structures",
            lessons: [
                {
                    title: "3.1 Lists and Tuples",
                    duration: "22 min",
                    content: "# Lists and Tuples\n\n## Lists\nOrdered, mutable collection. Created with square brackets.\n- append(), insert(), remove(), pop()\n\n## Tuples\nOrdered, immutable collection. Created with parentheses.\n- Faster than lists\n- Can be used as dictionary keys"
                },
                {
                    title: "3.2 Dictionaries and Sets",
                    duration: "20 min",
                    content: "# Dictionaries and Sets\n\n## Dictionaries\nKey-value pairs. Created with curly braces.\n- keys(), values(), items(), get()\n\n## Sets\nUnordered collection of unique elements.\n- union(), intersection(), difference()"
                }
            ]
        },
        {
            sectionName: "\ud83d\udd27 Module 4: Functions and Modules",
            lessons: [
                {
                    title: "4.1 Functions",
                    duration: "20 min",
                    content: "# Functions\n\n## Defining Functions\nUse the def keyword. Functions can have parameters and return values.\n\n## Lambda Functions\nAnonymous one-line functions. Useful for simple operations."
                },
                {
                    title: "4.2 Modules",
                    duration: "18 min",
                    content: "# Modules\n\n## Importing\n- import module_name\n- from module import function\n\n## Built-in Modules\n- os, json, datetime, random, math"
                }
            ]
        },
        {
            sectionName: "\ud83d\udcd1 Module 5: Object-Oriented Programming",
            lessons: [
                {
                    title: "5.1 Classes and Objects",
                    duration: "25 min",
                    content: "# Classes and Objects\n\n## Defining Classes\nUse the class keyword. The __init__ method acts as the constructor.\n\n## The self Parameter\nRefers to the instance of the class."
                },
                {
                    title: "5.2 Inheritance",
                    duration: "20 min",
                    content: "# Inheritance\n\n## Subclasses\nCreate a child class that inherits from a parent class.\n\n## super()\nUse super() to call parent methods."
                }
            ]
        },
        {
            sectionName: "\ud83d\udcc2 Module 6: Advanced Concepts",
            lessons: [
                {
                    title: "6.1 File Handling",
                    duration: "20 min",
                    content: "# File Handling\n\n## Reading and Writing\nUse the open() function or the safer with open() statement.\n- r: read\n- w: write\n- a: append"
                },
                {
                    title: "6.2 Exception Handling",
                    duration: "18 min",
                    content: "# Exception Handling\n\n## Try-Except Block\nHandle errors gracefully using try, except, else, and finally.\n\n## Raising Exceptions\nUse the raise keyword to throw a custom exception."
                }
            ]
        }
    ]
};
