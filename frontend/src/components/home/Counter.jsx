import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import counter1 from '../../photos/counter-icon-1.png'
import counter2 from '../../photos/counter-icon-2.png'
import counter3 from '../../photos/counter-icon-3.png'
import counter4 from '../../photos/counter-icon-4.png'


const Counter = () => {
    return (

        <div className='counter-img'>
            <div className='counterhead'>
                <h2 className='text-6xl pt-20'> Unique learning Environment</h2>
                <p>Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
            </div>

            <Container className='mt-20 ' >
                <Row>
                    <Col md={3}>
                        <div className='countermain-1'>
                            <div className='counterimgs'>
                                <img src={counter1} alt="" />
                            </div>

                            <div className='countermainh'>
                                <h2>3500</h2>
                            </div>

                            <div className='counterh4'>
                                <h4 className='text-white'> Students Enrolled</h4>
                            </div>
                        </div>


                    </Col>

                    <Col md={3}>
                        <div className='countermain-2 countermain-1'>
                            <div className='pt-40 counterimg2 counterimgs'>
                                <img src={counter2} alt="" />
                            </div>

                            <div className='countermainh-2 countermainh'>
                                <h2>912</h2>
                            </div>
                            <div className='counterh4'>
                                <h4 className='text-white'>Best Awards Won</h4>
                            </div>
                        </div>


                    </Col>

                    <Col md={3}>
                        <div className='countermain-2 countermain-1'>
                            <div className='counterimgs'>
                                <img src={counter3} alt="" />
                            </div>
                            <div className='countermainh ml-4'>
                                <h2>370</h2>
                            </div>
                            <div className='counterh4' >
                                <h4 className='text-white'> Students Enrolled</h4>
                            </div>

                        </div>


                    </Col>

                    <Col md={3}>
                        <div className='countermain-2 countermain-1'>
                            <div className='pt-40 counterimg2 counterimgs'>
                                <img src={counter4} alt="" />
                            </div>
                            <div className='countermainh-2 countermainh'>
                                <h2>648</h2>
                            </div>
                            <div className='counterh4 mt-10 ml-4'>
                            <h4 className='text-white'>Our Total Courses</h4>
                        </div>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Counter