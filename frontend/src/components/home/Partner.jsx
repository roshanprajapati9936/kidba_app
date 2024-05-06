import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import partner1 from '../../photos/partner-logo-1.jpg';
import partner2 from '../../photos/partner-logo-2.jpg';
import partner3 from '../../photos/partner-logo-3.jpg';
import partner4 from '../../photos/partner-logo-4.jpg';
import partner5 from '../../photos/partner-logo-5.jpg';

const Partner = () => {
    return (
          <>
          <Container fluid>
          <div className='partner-main-div d-flex mt-20 mb-20  justify-center'>
                    <div className='partner-img pr-2'>
                        <img src={partner1} alt="" />
                    </div>
                    <div className='partner-img pr-2'>
                        <img src={partner2} alt="" />
                    </div>
                    <div className='partner-img pr-2'>
                        <img src={partner3} alt="" />
                    </div>
                    <div className='partner-img pr-2'>
                        <img src={partner4} alt="" />
                    </div>
                    <div className='partner-img pr-2'>
                        <img src={partner5} alt="" />
                    </div>
          </div>
          </Container>
         
          </>
    );
};

export default Partner;
