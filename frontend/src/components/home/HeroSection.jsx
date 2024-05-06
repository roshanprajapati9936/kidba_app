import React from 'react'
import { Button } from 'react-bootstrap'
import WordChanger from './WordChanger'

const HeroSection = () => {
  return (
    <>
      <div className='banner lg:h-[100vh]'>
        <div className='banner-dev-1'>
          <h3> A New Approach to</h3>

          <h1>
            <span> <WordChanger />  </span>
          </h1>

          <p>
            We provide best solutions for a Clean Environment If you need any <br />help in cleaning or maintenance.
          </p>

          <Button className='btn-1 me-3'> ADMISSION NOW </Button>

          <Button className='btn-2'> OUR CLASSES</Button>

        </div>
      </div>
    </>
  )
}

export default HeroSection