// Script to add HTML Course to Database
// Run: node backend/routes/addHtmlCourse.js

const mongoose = require('mongoose');
require('dotenv').config();

// Models
const Course = require('../models/course');
const Section = require('../models/section');
const SubSection = require('../models/subSection');
const Category = require('../models/category');
const User = require('../models/user');
const htmlCourseContent = require('../utils/htmlCourseSeed');

// Connect to database
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Database connection error:', err);
    process.exit(1);
});

async function addHtmlCourse() {
    try {
        console.log('Starting HTML Course Creation...\n');

        // 1. Get or create category
        console.log('📁 Creating/Finding Category...');
        let category = await Category.findOne({ name: 'Web Development' });
        
        if (!category) {
            category = await Category.create({
                name: 'Web Development',
                description: 'Learn web development from basics to advanced'
            });
            console.log('✅ Category created:', category.name);
        } else {
            console.log('✅ Category found:', category.name);
        }

        // 2. Get instructor (first instructor account, or you can specify by email)
        console.log('\n👨‍🏫 Finding Instructor...');
        let instructor = await User.findOne({ accountType: 'Instructor' });
        
        if (!instructor) {
            console.log('❌ No instructor found. Please create an instructor account first.');
            console.log('   Sign up with accountType: Instructor');
            process.exit(1);
        }
        console.log('✅ Instructor found:', instructor.firstName, instructor.lastName);

        // 3. Create sections and subsections
        console.log('\n📚 Creating Course Sections...');
        const createdSections = [];

        for (const section of htmlCourseContent.sections) {
            // Create subsections
            const createdSubSections = [];
            for (const subSection of section.subSections) {
                const newSubSection = await SubSection.create({
                    title: subSection.title,
                    timeDuration: subSection.timeDuration,
                    description: subSection.description,
                    videoUrl: subSection.videoUrl
                });
                createdSubSections.push(newSubSection._id);
                console.log('  ✅ Subsection created:', subSection.title);
            }

            // Create section with subsections
            const newSection = await Section.create({
                sectionName: section.sectionName,
                subSection: createdSubSections
            });
            createdSections.push(newSection._id);
            console.log('✅ Section created:', section.sectionName);
        }

        // 4. Create course
        console.log('\n🎓 Creating Course...');
        const newCourse = await Course.create({
            courseName: htmlCourseContent.courseName,
            courseDescription: htmlCourseContent.courseDescription,
            instructor: instructor._id,
            whatYouWillLearn: htmlCourseContent.whatYouWillLearn,
            price: htmlCourseContent.price,
            thumbnail: htmlCourseContent.thumbnail,
            category: category._id,
            tag: htmlCourseContent.tag,
            instructions: htmlCourseContent.instructions,
            courseContent: createdSections,
            status: 'Published',
            studentsEnrolled: [],
            ratingAndReviews: [],
            createdAt: new Date(),
            updatedAt: new Date()
        });

        // 5. Add course to category
        await Category.findByIdAndUpdate(
            category._id,
            { $push: { courses: newCourse._id } }
        );

        console.log('✅ Course created successfully!');
        console.log('\n📊 Course Details:');
        console.log('   Name:', newCourse.courseName);
        console.log('   Price: ₹' + newCourse.price);
        console.log('   Sections:', createdSections.length);
        console.log('   Status:', newCourse.status);
        console.log('   Course ID:', newCourse._id);

        console.log('\n✨ HTML Course has been added to your database!');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error creating course:', error.message);
        process.exit(1);
    }
}

// Run the function
addHtmlCourse();
