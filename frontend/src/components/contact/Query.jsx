import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

const Query = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col md={8}>
              <div className='contactph mt-10 ml-9'>
                <p>Get In Touch</p>
                <h2>Have Any Query?</h2>
              </div>

              <Form className='p-10'>

                <input className='name-query'
                  type='text'
                  name='name'
                  placeholder="Name"
                />

                <input className='name-query'
                  type='email'
                  name='email'
                  placeholder="Email"
                />

                <br />

                <input className='text-message mt-8'
                  type='text'
                  name='message'
                  placeholder="Message Subject"
                />

                <br />

                <textarea className='leave-msg mt-8'
                  type='text'
                  name='leavemessage'
                  placeholder="Leave Message"
                >
                </textarea>
                <br />

                <Button className='query-btn mt-8'>
                  SUBMIT NOW
                </Button>



              </Form>

            </Col>
            <Col md={4}>
              <div className='query-details mt-20 d-flex'>

                <div className='query-icon'>
                  <MdLocationOn className='locat-icon' />
                </div>

                <div className='locathp ml-7 mt-2'>
                  <p>VISIT OFFICE</p>
                  <span>New Elefent Road, Dhaka</span>
                </div>
              </div>
              <div className='query-hr mt-7'> </div>
              {/* =========Call======= */}

              <div className='query-details mt-7 d-flex'>

                <div className='query-icon'>
                  <IoCall className='locat-icon' />
                </div>

                <div className='locathp ml-7 mt-2'>
                  <p>CALL ANYTIME</p>
                  <span>+880 123 456 789</span>
                </div>
              </div>
              <div className='query-hr mt-7'> </div>

              {/* ====== email =======  */}
              <div className='query-details mt-7 d-flex'>

                <div className='query-icon'>
                  <MdAttachEmail className='locat-icon' />
                </div>

                <div className='locathp ml-7 mt-2'>
                  <p>SEND EMAIL</p>
                  <span>contact@yourmail.com</span>
                </div>
              </div>
              <div className='query-hr mt-7'> </div>

              {/* ============website======= */}
              <div className='query-details mt-7 d-flex'>

                <div className='query-icon'>
                  <FaGlobe className='locat-icon' />
                </div>

                <div className='locathp ml-7 mt-2'>
                  <p>VISIT US</p>
                  <span>www.yoursite.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Query