import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import staff1 from '../../photos/staff-1.jpg'
import staff2 from '../../photos/staff-2-1.jpg'
import staff3 from '../../photos/staff-3-1.jpg'
import staff4 from '../../photos/staff-4.jpg'
import vector4 from '../../photos/vector-bg-4.png'
import vector1 from '../../photos/vector-bg-1.png'
import vector2 from '../../photos/vector-bg-2.png'
import { FaPlus } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import appdownloadimg from '../../photos/app-download-img-1.jpg';
import aboutbg from '../../photos/about-bg-1.png'
import playstore from '../../photos/playstore.png'
import PopularWordChanger from './PopularWordChanger'

const MeetOurStaffs = () => {
    return (
        <>
            <div className='ourstaffsmain'>
                <div className='ourstaffs '>
                    <div className='ourstaffs'>
                        <h2> Meet Our Staffs</h2>
                        <div className='ourstaffspara'>
                            <p>  Here is what you can expect from a house cleaning from a Handy professional. Download the app to
                                share further cleaning details and instructions!</p>
                        </div>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className='staffMain'>
                                <img src={staff1} alt="" className='staffs' />
                                <div className='vectormain'>
                                    <div className='vector-1 d-flex'>
                                        <div className='vectorimgicon'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaPlus className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector1} alt="" className='pl-3' />
                                            <FaFacebookF className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector2} alt="" className='pl-3' />
                                            <FaTwitter className='vectoricon' />

                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaInstagram className='vectoricon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center staffanhor mt-2'>
                                <a href="">Broklyn Doel</a>
                                <p>Sains Teacher</p>
                            </div>

                        </Col>


                        <Col md={3}>
                            <div className='staffMain'>
                                <img src={staff2} alt="" className='staffs' />
                                <div className='vectormain'>
                                    <div className='vector-1 d-flex'>
                                        <div className='vectorimgicon'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaPlus className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector1} alt="" className='pl-3' />
                                            <FaFacebookF className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector2} alt="" className='pl-3' />
                                            <FaTwitter className='vectoricon' />

                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaInstagram className='vectoricon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center staffanhor mt-2'>
                                <a href="">Alex Jhonson</a>
                                <p>Art Teacher</p>
                            </div>
                        </Col>


                        <Col md={3}>
                            <div className='staffMain'>
                                <img src={staff3} alt="" className='staffs' />
                                <div className='vectormain'>
                                    <div className='vector-1 d-flex'>
                                        <div className='vectorimgicon'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaPlus className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector1} alt="" className='pl-3' />
                                            <FaFacebookF className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector2} alt="" className='pl-3' />
                                            <FaTwitter className='vectoricon' />

                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaInstagram className='vectoricon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center staffanhor mt-2'>
                                <a href="">Janaton Doe</a>
                                <p>English Teacher</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='staffMain'>
                                <img src={staff4} alt="" className='staffs' />
                                <div className='vectormain'>
                                    <div className='vector-1 d-flex'>
                                        <div className='vectorimgicon'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaPlus className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector1} alt="" className='pl-3' />
                                            <FaFacebookF className='vectoricon' />
                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector2} alt="" className='pl-3' />
                                            <FaTwitter className='vectoricon' />

                                        </div>
                                        <div className='vectorimgicon vectoriconb'>
                                            <img src={vector4} alt="" className='pl-3' />
                                            <FaInstagram className='vectoricon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center staffanhor mt-2'>
                                <a href="">Robot Jhonson</a>
                                <p>Math Teacher</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* =============== Join Our App  */}
           
            

            <div className='our-join-app'>
            <Container className='h-lvh'>
                <Row className='items-center'>
                    <Col md={6}>
                        <div className='mt-20'>
                            <div className='our-app-changer'>
                                  <h2> Join Our </h2> 
                                  <span>  {<PopularWordChanger/>} </span>
                            </div>
                        
                             <p className='our-app-para'>
                            IOS AppAndroid App
                            Nam vestibulum at est a mollis. Phasellus sit amet tincidunt diam. Maecenas ultricies volutpat ornare. Sed quis enim nisi. Donec in dui placerat tellus dictum mollis. </p>

                              <div className='d-flex'>
                              <div className='mt-10'>
                                 <img src={aboutbg} alt="" className='w-200px'/>
                            </div>
                            
                             <div className='mt-10 ml-20'>
                                <img src={playstore} alt="" className='w-200px'/>
                             </div>
                              </div> 
                       
                        </div>
                       
                    </Col>

                    <Col md={6}>
                        <div className='joinourappimg'>
                        <img src={appdownloadimg} alt=""/>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}


export default MeetOurStaffs