// Alternative: Add HTML Course via API call
// This connects through the already-running backend server

const axios = require('axios');
const htmlCourseContent = require('./utils/htmlCourseSeed');

const API_URL = 'http://localhost:5000/api/v1';

async function addCourseViaAPI() {
    try {
        console.log('🚀 Starting HTML Course Creation via API...\n');

        // 1. Get instructor token (you need to login as instructor first)
        console.log('📝 Note: Make sure you are logged in as an Instructor');
        console.log('   Fetching course categories...\n');

        // 2. Get categories
        const categoriesRes = await axios.get(`${API_URL}/course/getAllCourseCategories`);
        const categories = categoriesRes.data.data;
        
        let webDevCategory = categories.find(cat => cat.name === 'Web Development');
        
        if (!webDevCategory) {
            console.log('❌ Web Development category not found');
            process.exit(1);
        }
        console.log('✅ Category found:', webDevCategory.name);

        // 3. Create course data
        const courseData = {
            courseName: htmlCourseContent.courseName,
            courseDescription: htmlCourseContent.courseDescription,
            whatYouWillLearn: htmlCourseContent.whatYouWillLearn,
            categoryId: webDevCategory._id,
            price: htmlCourseContent.price,
            tag: htmlCourseContent.tag,
            instructions: htmlCourseContent.instructions,
            thumbnail: htmlCourseContent.thumbnail,
            status: 'Published'
        };

        console.log('\n🎓 Creating course...');
        console.log('⚠️  This requires you to provide authentication via API');
        console.log('    Please use your browser to test this instead');

    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
        process.exit(1);
    }
}

addCourseViaAPI();
