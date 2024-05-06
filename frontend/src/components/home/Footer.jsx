import React from 'react'
import { Container,Col, Row, Button,Form } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
          <div className='footermain'> 
            <Container className='pt-36'>
                <Row>
                    <Col md={3}>
                         <div className='footer-sec-1'>
                             <h4 className='font-semibold'> About Kidba</h4>
                             <div className='footerline'></div>
                             <p className='w-110 leading-7'>Monotne deplos copertve chanva andng crorate Qhanin Unique Qnderwhe Premum Convere With Uheng Mutmed Cover</p>
                         </div>
                    </Col>

                    <Col md={3}>
                       <div className='footer-sec-2 leading-8'>
                             <h4 className='font-semibold'>Services</h4>
                             <div className='footerline'></div>
                             <a href="">Overview</a> <br/>
                             <a href="">Why us</a> <br/>
                             <a href="">Awards & Recognitions</a><br/>
                             <a href="">Teacher</a><br/>
                             <a href="">Client Reviews</a><br/>
                         </div>
                    </Col>

                    <Col md={3}>
                        <div className='footer-sec-2 leading-8'>
                            <h4 className='font-semibold'>Information</h4> 
                            <div className='footerline'></div>
                             <a href="">My Account</a> <br/>
                             <a href="">Order History</a> <br/>
                             <a href="">Kids Study</a><br/>
                             <a href="">News</a><br/>
                             <a href="">Returns</a><br/> 
                        </div>
                    </Col>

                    <Col md={3}>
                          <div>
                             <h4 className='font-semibold'>Newsletter <br/> Subscription</h4>
                             <div className='footerline'></div>
                             <p className='leading-8'>Enter your email and get latest updates and offers subscribe us</p>
                             
                             <Form> 
                             <input type="email"  placeholder='Enter your email' required
                             className='subs-email'/>
                              <div className='subscibe-btn mt-10'>
                              <Button>
                                SUBSCRIBE NOW!
                             </Button>
                             </div> 
                             </Form>
                            
                          </div>
                    </Col>
                </Row>
            </Container>
            </div>

            <div className="footer-end">
                       © 2023 Kidba Designed by CodeBasket   
               </div>
        </>
    )
}

export default Footer