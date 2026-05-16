export const scssCourseData = {
    _id: "scss-course-001",
    courseName: "SCSS/Sass - Complete Guide",
    courseDescription: "Master SCSS (Sassy CSS) - the most popular CSS preprocessor. Learn variables, nesting, mixins, functions, and write maintainable stylesheets.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png",
    whatYouWillLearn: "\u2022 SCSS fundamentals and syntax\n\u2022 Variables, nesting, and partials\n\u2022 Mixins and functions\n\u2022 Inheritance with @extend\n\u2022 Responsive design with SCSS\n\u2022 Project architecture and best practices",
    courseContent: [
        {
            sectionName: "\ud83c\udfa8 Module 1: Introduction to SCSS",
            lessons: [
                {
                    title: "1.1 What is SCSS?",
                    duration: "15 min",
                    content: "# What is SCSS?\n\nSCSS (Sassy CSS) is a CSS preprocessor that adds powerful features to regular CSS.\n\n## SCSS vs CSS\n- Variables for reusable values\n- Nesting for cleaner structure\n- Mixins for reusable code blocks"
                },
                {
                    title: "1.2 Setup and Compilation",
                    duration: "15 min",
                    content: "# Setup and Compilation\n\n## Installing Sass\n- npm install -g sass\n\n## Compiling\n- Compile: sass input.scss output.css\n- Watch mode: sass --watch input.scss:output.css"
                }
            ]
        },
        {
            sectionName: "\ud83d\udcdd Module 2: Variables & Nesting",
            lessons: [
                {
                    title: "2.1 SCSS Variables",
                    duration: "18 min",
                    content: "# Variables\n\nStore reusable values with the $ prefix.\n\n- Colors: $primary-color: #3498db;\n- Fonts: $font-stack: 'Roboto', sans-serif;"
                },
                {
                    title: "2.2 Nesting Strategies",
                    duration: "18 min",
                    content: "# Nesting\n\nNest selectors to mirror HTML structure.\n\n## The & Selector\nRefers to the parent selector. Used for:\n- Pseudo-classes: &:hover\n- BEM naming: &__element"
                }
            ]
        },
        {
            sectionName: "\ud83d\udee0\ufe0f Module 3: Mixins",
            lessons: [
                {
                    title: "3.1 Basic Mixins",
                    duration: "20 min",
                    content: "# Basic Mixins\n\nReusable blocks of CSS declarations. Defined with @mixin, used with @include."
                },
                {
                    title: "3.2 Mixins with Parameters",
                    duration: "20 min",
                    content: "# Mixins with Parameters\n\nPass values to customize the mixin output, just like functions in programming. You can also provide default values."
                }
            ]
        },
        {
            sectionName: "\ud83e\uddee Module 4: Functions & Operations",
            lessons: [
                {
                    title: "4.1 Built-in Functions",
                    duration: "20 min",
                    content: "# Built-in Functions\n\n- lighten($color, 20%): make color lighter\n- darken($color, 20%): make color darker\n- mix($color1, $color2): blend colors"
                },
                {
                    title: "4.2 Custom Functions",
                    duration: "20 min",
                    content: "# Custom Functions\n\nDefine with @function, return with @return. Useful for complex mathematical calculations in CSS."
                }
            ]
        },
        {
            sectionName: "\ud83d\udd04 Module 5: Inheritance & Control Flow",
            lessons: [
                {
                    title: "5.1 @extend Directive",
                    duration: "18 min",
                    content: "# @extend Directive\n\nShare styles between selectors. Use placeholder selectors (%) for styles only used with @extend."
                },
                {
                    title: "5.2 Control Directives",
                    duration: "22 min",
                    content: "# Control Directives\n\n- @if and @else for conditional styling\n- @for loops for generating utility classes\n- @each for iterating over maps"
                }
            ]
        },
        {
            sectionName: "\ud83d\udcc1 Module 6: Architecture",
            lessons: [
                {
                    title: "6.1 Partials and @use",
                    duration: "15 min",
                    content: "# Partials and @use\n\n## Partials\nFiles starting with _ (e.g., _variables.scss).\n\n## @use\nModern way to import modules. Namespaces variables."
                },
                {
                    title: "6.2 The 7-1 Pattern",
                    duration: "20 min",
                    content: "# The 7-1 Pattern\n\nOrganizing SCSS into 7 folders and 1 main file:\n- base/, components/, layout/, pages/, themes/, abstracts/, vendors/"
                }
            ]
        }
    ]
};
