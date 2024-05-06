import React from 'react'
import HeroSection from '../components/home/HeroSection'
import OurKidba from '../components/home/OurKidba'
import About from '../components/home/About'
import Popular from '../components/home/Popular'
import Counter from '../components/home/Counter'
import MeetOurStaffs from '../components/home/MeetOurStaffs'
import SchoolFacility from '../components/home/SchoolFacility'
import OurSchool from '../components/home/OurSchool'
import ClientSays from '../components/home/ClientSays'
import OurLatestNews from '../components/home/OurLatestNews'
import Partner from '../components/home/Partner'
import Footer from '../components/home/Footer'

const Home = (props) => {

  return (
    <>
    <HeroSection/>
    <OurKidba/>
    <About/>
    <Popular/>
     <Counter/>
    <MeetOurStaffs/>
    <SchoolFacility/>
    <OurSchool/>
    <ClientSays/>
    <OurLatestNews/>
    <Partner/>
    <Footer/>
    </>
  )
}

export default Home