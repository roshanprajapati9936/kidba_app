import React from 'react'
import Archived from '../components/courses/Archived'
import CourseMain from '../components/courses/CourseMain';
import Footer from '../components/home/Footer';


const Courses = () => {
  return (
   <>
      <Archived/>
      <CourseMain/>
      <Footer/>
   </>
  )
}

export default Courses;