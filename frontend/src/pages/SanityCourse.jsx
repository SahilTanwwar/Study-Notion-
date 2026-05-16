import GenericCoursePage from './GenericCoursePage'
import { sanityCourseData } from '../data/sanityCourseData'
export default function SanityCourse() { return <GenericCoursePage courseData={sanityCourseData} /> }
