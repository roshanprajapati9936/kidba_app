import a1 from '../../photos/a-1.jpg'
import b1 from '../../photos/b-1.jpg'
import c1 from '../../photos/c.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import facilityicon1 from '../../photos/facility-icon-1-1.png'
import facilityicon2 from '../../photos/facility-icon-2-1.png'
import facilityicon3 from '../../photos/facility-icon-3.png'


const SchoolFacility = () => {
    return (
        <>
            <div className='facility-img'>
                <div className='facility-head'>
                    <h1>
                        School Fecilities</h1>
                    <p>Here is what you can expect from a house cleaning from a Handy professional.
                        <br />   Download the app to share further cleaning details and instructioF</p>
                </div>

                <Container className='mt-10'>
                    <Row>
                        <Col md={4}>
                            <div className='facility-img-1'>

                                    <img src={a1} alt="" />

                                    <div className='facilityhp'>
                                        <h2> Active Learning</h2>
                                        <p>Since have been visonary relable<br /> sofware engnern partne.</p>
                                    </div>

                                    <div className='facility-icon-1'>
                                        <img src={facilityicon1} alt="" />
                                    </div>
                              
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className='facility-img-1'>

                                    <img src={b1} alt="" />

                                    <div className='facilityhp'>
                                        <h2> Active Learning</h2>
                                        <p>Since have been visonary relable<br /> sofware engnern partne.</p>
                                    </div>

                                    <div className='facility-icon-1 facility-icon-2'>
                                        <img src={facilityicon2} alt="" />
                                    </div>
                              
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className='facility-img-1'>

                                    <img src={c1} alt="" />

                                    <div className='facilityhp'>
                                        <h2> Active Learning</h2>
                                        <p>Since have been visonary relable<br /> sofware engnern partne.</p>
                                    </div>

                                    <div className='facility-icon-1 .facility-icon-3'>
                                        <img src={facilityicon3} alt="" />
                                    </div>
                              
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SchoolFacility;