import React from 'react'
import featicon1 from '../../photos/feat-icon-1.png'
import featicon2 from '../../photos/feat-icon-2.png'
import featicon3 from '../../photos/feat-icon-3.png'
import featicon4 from '../../photos/feat-icon-4.png'
import featureimg from '../../photos/feature-img.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { CiPlay1 } from "react-icons/ci";

const OurKidba = () => {
  return (
    <div className='mt-24 our-kidba-main'>
      <Container>
        <Row>
          <Col md={8}>
            <div className='lg:w-[120vh]'>
              <div className='our-kidba'>
                <h1 className='text-5xl font-bold'>
                  Welcome to Our Kidba
                </h1>
                <p className='lg:w-3/4'> Here is what you can expect from a house cleaning from a Handy professional.
                  Download the app to share further cleaning!</p>
              </div>
              <Row>
                <Col md={6}>
                  <div className='d-flex transition_div'>
                    <div>
                      <img src={featicon1} alt="" className='feature-img' />
                    </div>
                    <div className='ml-10 feathead'>
                      <h3> Active Learning </h3>
                      <div class="divider-1"></div>
                      <p> Since have been visonary relable sofware engnern partne.</p>
                    </div>
                  </div>

                  <div className='d-flex transition_div'>
                    <div>
                      <img src={featicon3} alt="" className='feature-img' />
                    </div>
                    <div className='ml-10 feathead'>
                      <h3> Expert Teacher </h3>
                      <div class="divider-2"></div>
                      <p> Since have been visonary relable sofware engnern partne.</p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className='d-flex transition_div '>
                    <div>
                      <img src={featicon2} className='feature-img' />
                    </div>
                    <div className='ml-10 feathead'>
                      <h3>Parents Day</h3>
                      <div class="divider-3"></div>
                      <p>Since have been visonary relable sofware engnern partne.</p>
                    </div>
                  </div>

                  <div className='d-flex transition_div'>
                    <div>
                      <img src={featicon4} className='feature-img' />
                    </div>
                    <div className='ml-10 feathead'>
                      <h3>Music Lessons</h3>
                      <div class="divider-4"></div>
                      <p>Since have been visonary relable sofware engnern partne.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className='feature_div'>
              <div className='featureimg'>
                <img src={featureimg} alt="" />
              </div>
              <div className='playicon'>
                 <CiPlay1 className='play-icon'/> 
              </div> 
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default OurKidba;