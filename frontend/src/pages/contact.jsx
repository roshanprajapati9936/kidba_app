import React from 'react'
import Archived from '../components/contact/Archived'
import Query from '../components/contact/Query'
import Mapping from '../components/contact/Mapping'
import Footer from '../components/home/Footer'


const Contact = () => {
  return (
   <>
    <Archived/>
    <Query/>
    <Mapping/>
    <Footer/>
   </>
  )
}

export default Contact