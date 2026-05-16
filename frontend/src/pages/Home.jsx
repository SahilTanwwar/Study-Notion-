import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'
import Course_Slider from '../components/core/Catalog/Course_Slider'

import { getCatalogPageData } from '../services/operations/pageAndComponentData'
import { htmlCourseData } from '../data/htmlCourseData'
import { cssCourseData } from '../data/cssCourseData'
import { jsCourseData } from '../data/jsCourseData'
import { reactCourseData } from '../data/reactCourseData'
import { javaCourseData } from '../data/javaCourseData'
import { pythonCourseData } from '../data/pythonCourseData'

import { MdOutlineRateReview } from 'react-icons/md'
import { FaArrowRight } from "react-icons/fa"

import { motion } from 'framer-motion'
import { fadeIn, } from './../components/common/motionFrameVarients';

// background random images
import backgroundImg1 from '../assets/Images/random bg img/coding bg1.jpg'
import backgroundImg2 from '../assets/Images/random bg img/coding bg2.jpg'
import backgroundImg3 from '../assets/Images/random bg img/coding bg3.jpg'
import backgroundImg4 from '../assets/Images/random bg img/coding bg4.jpg'
import backgroundImg5 from '../assets/Images/random bg img/coding bg5.jpg'
import backgroundImg6 from '../assets/Images/random bg img/coding bg6.jpeg'
import backgroundImg7 from '../assets/Images/random bg img/coding bg7.jpg'
import backgroundImg8 from '../assets/Images/random bg img/coding bg8.jpeg'
import backgroundImg9 from '../assets/Images/random bg img/coding bg9.jpg'
import backgroundImg10 from '../assets/Images/random bg img/coding bg10.jpg'
import backgroundImg111 from '../assets/Images/random bg img/coding bg11.jpg'


const randomImges = [
    backgroundImg1,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
    backgroundImg5,
    backgroundImg6,
    backgroundImg7,
    backgroundImg8,
    backgroundImg9,
    backgroundImg10,
    backgroundImg111,
];

// hardcoded



const Home = () => {

    // get background random images
    const [backgroundImg, setBackgroundImg] = useState(null);

    useEffect(() => {
        const bg = randomImges[Math.floor(Math.random() * randomImges.length)]
        setBackgroundImg(bg);
    }, [])

    // console.log('bg ==== ', backgroundImg)

    // get courses data
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6506c9dff191d7ffdb4a3fe2" // hard coded
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {

            const result = await getCatalogPageData(categoryID, dispatch);
            setCatalogPageData(result);
            // console.log("page data ==== ",CatalogPageData);
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])


    // console.log('================ CatalogPageData?.selectedCourses ================ ', CatalogPageData)


    return (
        <React.Fragment>
            {/* background random image */}
            <div>
                <div className="w-full h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
                    <img src={backgroundImg} alt="Background"
                        className="w-full h-full object-cover "
                    />

                    <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
                </div>
            </div>

            <div className=' '>
                {/*Section1  */}
                <div className='relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white '>

                    <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='text-center text-3xl lg:text-4xl font-semibold mt-7  '
                    >
                        Empower Your Future with
                        <HighlightText text={"Coding Skills"} />
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className=' mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300'
                    >
                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                    </motion.div>


                    <div className='flex flex-row gap-7 mt-8'>
                        <button onClick={() => document.getElementById('featured-courses').scrollIntoView({ behavior: 'smooth' })}
                            className='bg-yellow-50 text-black rounded-md font-semibold px-6 py-3 hover:scale-95 transition-all duration-200'>
                            Learn More
                        </button>
                    </div>
                </div>

                {/* animated code */}
                <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
                    {/* Code block 1 */}
                    <div className=''>
                        <CodeBlocks
                            position={"lg:flex-row"}
                            heading={
                                <div className='text-3xl lg:text-4xl font-semibold'>
                                    Unlock Your
                                    <HighlightText text={"coding potential "} />
                                    with our online courses
                                </div>
                            }
                            subheading={
                                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                            }
                            ctabtn1={null}
                            ctabtn2={
                                {
                                    btnText: "learn more",
                                    link: "#featured-courses",
                                    active: true,
                                }
                            }

                            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                            codeColor={"text-yellow-25"}
                            backgroundGradient={"code-block1-grad"}
                        />
                    </div>


                    {/* Code block 2 */}
                    <div>
                        <CodeBlocks
                            position={"lg:flex-row-reverse"}
                            heading={
                                <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
                                    Start
                                    <HighlightText text={"coding in seconds"} />
                                </div>
                            }
                            subheading={
                                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                            }
                            ctabtn1={null}
                            ctabtn2={null}
                            codeColor={"text-white"}
                            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                            backgroundGradient={"code-block2-grad"}
                        />
                    </div>

                    {/* course slider */}
                    <div className='mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-6 text-2xl '>
                            Popular Picks for You 🏆
                        </h2>
                        <Course_Slider Courses={[javaCourseData, pythonCourseData, reactCourseData]} />
                    </div>

                    {/* Featured Courses Section */}
                    <div id='featured-courses' className='mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-10 text-3xl font-bold'>Featured Courses 🚀</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                            <Link to={`/html-course`} className='block group'>
                                <div className='bg-gradient-to-br from-richblack-800 to-richblack-900 rounded-2xl overflow-hidden border border-richblack-700 hover:border-yellow-50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-200/10 h-full flex flex-col'>
                                    <div className='relative overflow-hidden bg-richblack-700 p-6'>
                                        <div className='bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-xl p-8 flex items-center justify-center min-h-[220px] group-hover:scale-110 transition-transform duration-300'>
                                            <img 
                                                src={htmlCourseData.thumbnail} 
                                                alt={htmlCourseData.courseName}
                                                className='h-48 w-auto object-contain drop-shadow-lg'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3 p-6 flex-grow'>
                                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-yellow-200'>{htmlCourseData.courseName}</h3>
                                        <p className='text-richblack-200 text-sm leading-relaxed flex-grow'>{htmlCourseData.courseDescription}</p>
                                        <p className='text-yellow-50 font-semibold text-base pt-2 group-hover:translate-x-1 transition-transform duration-300'>Click to view course →</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/css-course`} className='block group'>
                                <div className='bg-gradient-to-br from-richblack-800 to-richblack-900 rounded-2xl overflow-hidden border border-richblack-700 hover:border-yellow-50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/10 h-full flex flex-col'>
                                    <div className='relative overflow-hidden bg-richblack-700 p-6'>
                                        <div className='bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl p-8 flex items-center justify-center min-h-[220px] group-hover:scale-110 transition-transform duration-300'>
                                            <img 
                                                src={cssCourseData.thumbnail} 
                                                alt={cssCourseData.courseName}
                                                className='h-48 w-auto object-contain drop-shadow-lg'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3 p-6 flex-grow'>
                                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-yellow-200'>{cssCourseData.courseName}</h3>
                                        <p className='text-richblack-200 text-sm leading-relaxed flex-grow'>{cssCourseData.courseDescription}</p>
                                        <p className='text-yellow-50 font-semibold text-base pt-2 group-hover:translate-x-1 transition-transform duration-300'>Click to view course →</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/javascript-course`} className='block group'>
                                <div className='bg-gradient-to-br from-richblack-800 to-richblack-900 rounded-2xl overflow-hidden border border-richblack-700 hover:border-yellow-50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/10 h-full flex flex-col'>
                                    <div className='relative overflow-hidden bg-richblack-700 p-6'>
                                        <div className='bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl p-8 flex items-center justify-center min-h-[220px] group-hover:scale-110 transition-transform duration-300'>
                                            <img 
                                                src={jsCourseData.thumbnail} 
                                                alt={jsCourseData.courseName}
                                                className='h-48 w-auto object-contain drop-shadow-lg'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3 p-6 flex-grow'>
                                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-yellow-200'>{jsCourseData.courseName}</h3>
                                        <p className='text-richblack-200 text-sm leading-relaxed flex-grow'>{jsCourseData.courseDescription}</p>
                                        <p className='text-yellow-50 font-semibold text-base pt-2 group-hover:translate-x-1 transition-transform duration-300'>Click to view course →</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/react-course`} className='block group'>
                                <div className='bg-gradient-to-br from-richblack-800 to-richblack-900 rounded-2xl overflow-hidden border border-richblack-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-200/10 h-full flex flex-col'>
                                    <div className='relative overflow-hidden bg-richblack-700 p-6'>
                                        <div className='bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-xl p-8 flex items-center justify-center min-h-[220px] group-hover:scale-110 transition-transform duration-300'>
                                            <img 
                                                src={reactCourseData.thumbnail} 
                                                alt={reactCourseData.courseName}
                                                className='h-48 w-auto object-contain drop-shadow-lg'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3 p-6 flex-grow'>
                                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'>{reactCourseData.courseName}</h3>
                                        <p className='text-richblack-200 text-sm leading-relaxed flex-grow'>{reactCourseData.courseDescription}</p>
                                        <p className='text-cyan-400 font-semibold text-base pt-2 group-hover:translate-x-1 transition-transform duration-300'>Click to view course →</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-6 text-2xl '>
                            Top Enrollments Today 🔥
                        </h2>
                        <Course_Slider Courses={[htmlCourseData, cssCourseData, jsCourseData]} />
                    </div>


                    <ExploreMore />
                </div>

                {/*Section 2  */}
                <div className='bg-pure-greys-5 text-richblack-700 '>
                    <div className='homepage_bg h-[310px]'>
                        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                            <div className='h-[150px]'></div>
                        </div>
                    </div>

                    <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                        <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[95px]'>
                            <div className='text-3xl lg:text-4xl font-semibold w-full lg:w-[45%]'>
                                Get the Skills you need for a
                                <HighlightText text={"Job that is in demand"} />
                            </div>

                            <div className='flex flex-col gap-10 w-full lg:w-[40%] items-start'>
                                <div className='text-[16px]'>
                                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                                </div>
                                <button onClick={() => document.getElementById('featured-courses').scrollIntoView({ behavior: 'smooth' })}
                                    className='bg-yellow-50 text-black rounded-md font-bold text-[13px] px-6 py-3 hover:scale-95 transition-all duration-200'>
                                    Learn more
                                </button>
                            </div>
                        </div>

                        <LearningLanguageSection />

                    </div>

                </div>

                {/*Footer */}
                <Footer />
            </div >
        </React.Fragment>
    )
}

export default Home
