export const javaCourseData = {
    _id: "java-course-001",
    courseName: "Java Programming - Complete Course",
    courseDescription: "Master Java from fundamentals to advanced OOP concepts. Learn data structures, multithreading, collections, and build real-world applications.",
    instructor: { firstName: "Study", lastName: "Notion" },
    thumbnail: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    customLink: "/java-course",
    ratingAndReviews: [1, 2, 3, 4, 5],
    whatYouWillLearn: "\u2022 Java fundamentals and syntax\n\u2022 Object-Oriented Programming (OOP)\n\u2022 Collections Framework and Generics\n\u2022 Exception handling and file I/O\n\u2022 Multithreading and concurrency\n\u2022 Build real-world Java applications",
    courseContent: [
        {
            sectionName: "\u2615 Module 1: Java Fundamentals",
            lessons: [
                {
                    title: "1.1 Introduction to Java",
                    duration: "18 min",
                    content: "# Introduction to Java\n\n## What is Java?\nJava is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the principle of WORA - Write Once, Run Anywhere.\n\n## Why Learn Java?\n- Used by over 9 million developers worldwide\n- Powers Android app development\n- Enterprise-level backend systems\n- Big data technologies like Hadoop\n- Average salary: $100,000+ per year\n\n## Java vs Other Languages\n- Java vs Python: Java is faster, Python is simpler\n- Java vs C++: Java has automatic memory management\n- Java vs JavaScript: Completely different languages despite similar names\n\n## Setting Up Java\n- Download JDK from Oracle or OpenJDK\n- Install an IDE (IntelliJ IDEA or Eclipse)\n- Verify installation with: java --version\n\n## Your First Java Program\nEvery Java program starts with a class and a main method. The main method is the entry point where execution begins.\n\n## Key Concepts\n- Java is statically typed\n- Java is compiled to bytecode\n- Bytecode runs on JVM (Java Virtual Machine)\n- JVM makes Java platform independent"
                },
                {
                    title: "1.2 Variables and Data Types",
                    duration: "20 min",
                    content: "# Variables and Data Types\n\n## Primitive Data Types\n- int: whole numbers (4 bytes)\n- double: decimal numbers (8 bytes)\n- boolean: true or false\n- char: single character\n- long: large whole numbers (8 bytes)\n- float: decimal numbers (4 bytes)\n- byte: small numbers (-128 to 127)\n- short: medium numbers (2 bytes)\n\n## Declaring Variables\nSyntax: dataType variableName = value;\n\n## String\nStrings are objects in Java, not primitives. They are immutable - once created, they cannot be changed.\n\n## Type Casting\n- Widening (automatic): int to double\n- Narrowing (manual): double to int requires explicit cast\n\n## Constants\nUse the final keyword to create constants that cannot be changed after initialization.\n\n## Naming Conventions\n- camelCase for variables and methods\n- PascalCase for class names\n- UPPER_SNAKE_CASE for constants"
                },
                {
                    title: "1.3 Control Flow",
                    duration: "22 min",
                    content: "# Control Flow in Java\n\n## If-Else Statements\nConditional execution based on boolean expressions. You can chain multiple conditions using else if.\n\n## Switch Statement\nUseful when comparing a variable against multiple values. Supports int, char, String, and enum types.\n\n## Loops\n\n### For Loop\nBest when you know how many times to iterate. Has initialization, condition, and increment sections.\n\n### While Loop\nExecutes as long as a condition is true. Check happens before each iteration.\n\n### Do-While Loop\nSimilar to while but guarantees at least one execution. Check happens after each iteration.\n\n### Enhanced For Loop (for-each)\nSimplified syntax for iterating over arrays and collections.\n\n## Break and Continue\n- break: exits the loop entirely\n- continue: skips current iteration\n\n## Ternary Operator\nShorthand for simple if-else: condition ? valueIfTrue : valueIfFalse"
                }
            ]
        },
        {
            sectionName: "\ud83c\udfd7\ufe0f Module 2: Object-Oriented Programming",
            lessons: [
                {
                    title: "2.1 Classes and Objects",
                    duration: "25 min",
                    content: "# Classes and Objects\n\n## What is a Class?\nA class is a blueprint for creating objects. It defines properties (fields) and behaviors (methods).\n\n## What is an Object?\nAn object is an instance of a class. It has state (field values) and behavior (methods).\n\n## Creating a Class\nA class contains fields (variables) and methods (functions). The constructor is a special method called when creating an object.\n\n## Access Modifiers\n- public: accessible from anywhere\n- private: accessible only within the class\n- protected: accessible within package and subclasses\n- default (no modifier): accessible within package\n\n## Getters and Setters\nEncapsulation means making fields private and providing public getter/setter methods to access them.\n\n## The this Keyword\nRefers to the current object instance. Used to distinguish between field names and parameter names."
                },
                {
                    title: "2.2 Inheritance and Polymorphism",
                    duration: "22 min",
                    content: "# Inheritance and Polymorphism\n\n## Inheritance\nA class can inherit fields and methods from another class using the extends keyword.\n\n### Key Points\n- Java supports single inheritance (one parent class)\n- Use super to call parent class constructor and methods\n- All classes inherit from Object class\n\n## Polymorphism\nThe ability of an object to take many forms.\n\n### Method Overriding (Runtime Polymorphism)\nChild class provides its own implementation of a parent class method.\n\n### Method Overloading (Compile-time Polymorphism)\nMultiple methods with the same name but different parameters.\n\n## Abstract Classes\n- Cannot be instantiated\n- Can have abstract methods (no body)\n- Child classes must implement abstract methods\n\n## Interfaces\n- Define a contract that classes must follow\n- All methods are public and abstract by default\n- A class can implement multiple interfaces\n- Use the implements keyword"
                }
            ]
        },
        {
            sectionName: "\ud83d\udcc2 Module 3: Exception Handling & IO",
            lessons: [
                {
                    title: "3.1 Exception Handling",
                    duration: "20 min",
                    content: "# Exception Handling\n\n## What are Exceptions?\nExceptions are events that disrupt the normal flow of the program. They are objects in Java.\n\n## Try-Catch Block\nUse try block to enclose code that might throw an exception, and catch block to handle it.\n\n## Finally Block\nExecutes regardless of whether an exception is thrown or caught. Used for cleanup operations.\n\n## Throw vs Throws\n- throw: manually throw an exception\n- throws: declare that a method might throw an exception\n\n## Custom Exceptions\nCreate your own exception classes by extending Exception or RuntimeException."
                },
                {
                    title: "3.2 File Handling & I/O",
                    duration: "25 min",
                    content: "# File Handling & I/O\n\n## Streams in Java\nJava performs I/O through Streams. A Stream is a continuous flow of data.\n\n## Reading and Writing\n- FileReader / FileWriter for text files\n- BufferedReader / BufferedWriter for efficient reading/writing\n\n## NIO (New I/O)\nThe java.nio package provides high-performance file handling with the Files and Path classes.\n\n## Serialization\nProcess of converting an object's state into a byte stream. Implement the Serializable interface."
                }
            ]
        },
        {
            sectionName: "\ud83d\udcda Module 4: Collections Framework",
            lessons: [
                {
                    title: "4.1 Lists and Sets",
                    duration: "25 min",
                    content: "# Lists and Sets\n\n## List Interface\n- ArrayList: dynamic array, fast random access\n- LinkedList: doubly-linked list, fast insertions/deletions\n\n## Set Interface\n- HashSet: no duplicates, unordered\n- TreeSet: no duplicates, sorted\n\n## Common Operations\n- add/remove\n- contains: check existence\n- size: number of elements"
                },
                {
                    title: "4.2 Maps and Queues",
                    duration: "25 min",
                    content: "# Maps and Queues\n\n## Map Interface\n- HashMap: key-value pairs, unordered\n- TreeMap: key-value pairs, sorted by key\n\n## Queue Interface\n- PriorityQueue: queue elements based on priority\n- ArrayDeque: double ended queue"
                }
            ]
        },
        {
            sectionName: "\u26a1 Module 5: Multithreading & Concurrency",
            lessons: [
                {
                    title: "5.1 Threads & Concurrency",
                    duration: "28 min",
                    content: "# Threads & Concurrency\n\n## What is a Thread?\nA thread is a lightweight sub-process, the smallest unit of processing.\n\n## Creating Threads\n1. By extending the Thread class\n2. By implementing the Runnable interface (preferred)\n\n## Thread Lifecycle\nNew -> Runnable -> Running -> Blocked -> Terminated\n\n## Synchronization\nUsed to prevent thread interference and consistency problems. The synchronized keyword ensures that only one thread can access a resource at a time."
                },
                {
                    title: "5.2 Advanced Concurrency",
                    duration: "20 min",
                    content: "# Advanced Concurrency\n\n## Executors Framework\nManage threads effectively with Thread Pools instead of creating them manually.\n\n## Callable & Future\nUnlike Runnable, Callable can return a result and throw exceptions.\n\n## Locks\njava.util.concurrent.locks provides more flexible locking than synchronized blocks."
                }
            ]
        },
        {
            sectionName: "\ud83d\udee0\ufe0f Module 6: Java 8+ Features",
            lessons: [
                {
                    title: "6.1 Lambda Expressions",
                    duration: "20 min",
                    content: "# Lambda Expressions\n\n## What are Lambdas?\nLambdas provide a clear and concise way to represent one method interface using an expression.\n\n## Syntax\n(parameters) -> expression\n\n## Functional Interfaces\nInterfaces with exactly one abstract method. @FunctionalInterface."
                },
                {
                    title: "6.2 Streams API",
                    duration: "25 min",
                    content: "# Streams API\n\n## What is a Stream?\nA sequence of elements supporting sequential and parallel aggregate operations.\n\n## Intermediate Operations\n- filter(): filters elements based on a condition\n- map(): transforms elements\n- sorted(): sorts the stream\n\n## Terminal Operations\n- collect(): gathers elements into a collection\n- forEach(): iterates through the stream\n- reduce(): reduces elements to a single value"
                }
            ]
        }
    ]
};
