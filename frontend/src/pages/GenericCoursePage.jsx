import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'

function GenericCoursePage({ courseData }) {
    const [expandedModule, setExpandedModule] = useState(0)
    const [selectedLesson, setSelectedLesson] = useState(null)

    const toggleModule = (index) => {
        setExpandedModule(expandedModule === index ? -1 : index)
    }

    // Adapt to both old and new data structures
    const contentList = courseData.courseContent || courseData.modules || []
    const getModuleName = (module) => module.sectionName || module.title || 'Module'

    return (
        <div className='min-h-screen bg-richblack-900 text-richblack-5'>
            <div className='bg-richblack-800 border-b border-richblack-700 sticky top-0 z-50'>
                <div className='mx-auto max-w-maxContent px-4 py-4 flex items-center gap-4'>
                    <Link to='/' className='flex items-center gap-2 text-richblack-200 hover:text-yellow-50 transition'>
                        <BiArrowBack size={24} />
                        Back to Home
                    </Link>
                </div>
            </div>

            <div className='mx-auto max-w-maxContent px-4 py-8'>
                <div className='mb-12'>
                    <img src={courseData.thumbnail} alt={courseData.courseName}
                        className='w-full h-[400px] object-cover rounded-lg mb-6' />
                    <h1 className='text-4xl md:text-5xl font-bold text-yellow-50 mb-4'>{courseData.courseName}</h1>
                    <p className='text-xl text-richblack-200 mb-6'>{courseData.courseDescription}</p>
                    <div className='flex flex-wrap gap-6 mb-6'>
                        {courseData.instructor && (
                            <div>
                                <p className='text-richblack-400 text-sm'>Instructor</p>
                                <p className='text-lg font-semibold'>{courseData.instructor.firstName} {courseData.instructor.lastName}</p>
                            </div>
                        )}
                        <div>
                            <p className='text-richblack-400 text-sm'>Total Modules</p>
                            <p className='text-lg font-semibold'>{contentList.length}</p>
                        </div>
                    </div>
                </div>

                {courseData.whatYouWillLearn && (
                    <div className='mb-12 bg-richblack-800 rounded-lg p-6 border border-richblack-700'>
                        <h2 className='text-2xl font-bold text-yellow-50 mb-4'>What You Will Learn</h2>
                        <div className='whitespace-pre-line text-richblack-200 leading-relaxed'>{courseData.whatYouWillLearn}</div>
                    </div>
                )}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-1'>
                        <div className='sticky top-20 bg-richblack-800 rounded-lg border border-richblack-700 p-4 max-h-[calc(100vh-100px)] overflow-y-auto'>
                            <h3 className='text-xl font-bold text-yellow-50 mb-4'>Course Content</h3>
                            {contentList.map((module, idx) => (
                                <div key={idx} className='mb-4 border-b border-richblack-700 pb-4 last:border-0'>
                                    <button onClick={() => toggleModule(idx)}
                                        className='w-full flex items-center justify-between bg-richblack-700 hover:bg-richblack-600 p-3 rounded transition text-left font-semibold text-richblack-25'>
                                        <span className='text-sm flex-1'>{getModuleName(module)}</span>
                                        {expandedModule === idx ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                                    </button>
                                    {expandedModule === idx && (
                                        <div className='mt-3 space-y-2'>
                                            {module.lessons.map((lesson, lIdx) => (
                                                <button key={lIdx} onClick={() => setSelectedLesson(lesson)}
                                                    className={`w-full text-left px-4 py-2 rounded transition text-sm ${selectedLesson === lesson ? 'bg-yellow-50 text-richblack-900 font-semibold' : 'bg-richblack-600 hover:bg-richblack-500 text-richblack-25'}`}>
                                                    {lesson.title}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='lg:col-span-2'>
                        <div className='bg-richblack-800 rounded-lg border border-richblack-700 p-8'>
                            {selectedLesson ? (
                                <>
                                    <div className='mb-6 pb-6 border-b border-richblack-700'>
                                        <h2 className='text-3xl font-bold text-yellow-50 mb-3'>{selectedLesson.title}</h2>
                                        {selectedLesson.duration && <p className='text-richblack-400 text-sm'>⏱️ {selectedLesson.duration}</p>}
                                    </div>
                                    <div className='prose prose-invert max-w-none text-richblack-200 leading-relaxed'>
                                        {(() => {
                                            const lines = selectedLesson.content.split('\n');
                                            const elements = [];
                                            let inCodeBlock = false;
                                            let codeContent = [];

                                            lines.forEach((line, idx) => {
                                                if (line.trim().startsWith('```')) {
                                                    if (inCodeBlock) {
                                                        elements.push(
                                                            <div key={idx} className="bg-richblack-900 border-l-4 border-yellow-50 rounded-md p-5 my-6 overflow-x-auto shadow-lg">
                                                                <pre className="text-[15px] font-mono text-cyan-50 leading-relaxed">
                                                                    <code>{codeContent.join('\n')}</code>
                                                                </pre>
                                                            </div>
                                                        );
                                                        inCodeBlock = false;
                                                        codeContent = [];
                                                    } else {
                                                        inCodeBlock = true;
                                                    }
                                                } else if (inCodeBlock) {
                                                    codeContent.push(line);
                                                } else {
                                                    if (line.startsWith('# ')) elements.push(<h1 key={idx} className='text-3xl font-bold text-yellow-50 mt-8 mb-6 border-b border-richblack-700 pb-2'>{line.replace('# ', '')}</h1>);
                                                    else if (line.startsWith('## ')) elements.push(<h2 key={idx} className='text-2xl font-bold text-yellow-100 mt-8 mb-4'>{line.replace('## ', '')}</h2>);
                                                    else if (line.startsWith('### ')) elements.push(<h3 key={idx} className='text-xl font-semibold text-yellow-200 mt-6 mb-3'>{line.replace('### ', '')}</h3>);
                                                    else if (line.startsWith('- ')) elements.push(<li key={idx} className='ml-6 mb-2 list-disc'>{line.replace('- ', '')}</li>);
                                                    else if (line.trim() === '') elements.push(<div key={idx} className='my-4'></div>);
                                                    else elements.push(<p key={idx} className='mb-4 text-base text-richblack-100 leading-relaxed'>{line}</p>);
                                                }
                                            });
                                            return elements;
                                        })()}
                                    </div>
                                </>
                            ) : (
                                <div className='flex items-center justify-center h-96'>
                                    <p className='text-xl text-richblack-400'>👈 Select a lesson to start learning</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GenericCoursePage
