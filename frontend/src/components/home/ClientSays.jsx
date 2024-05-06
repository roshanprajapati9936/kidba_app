import React from 'react';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import testimonial1 from '../../photos/testimonial-img-1.png'
import testimonial2 from '../../photos/testimonial-img-2.png'
import testimonial3 from '../../photos/testimonial-img-3.png'
import quote from '../../photos/quote.png'
import { Container, Row, Col } from 'react-bootstrap';

const ClientSays = () => {
  return (
    <Container fluid>
      <Row className="client-Says-img pt-md-5 pl-md-5">
        <Col>
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="d-block w-30" src={testimonial1} alt="slide 1" />
              <CCarouselCaption className="d-none d-md-block">
                <div className='caroselhp'>
                  <img src={quote} alt="" />
                  <h2>Client Says</h2>
                  <p>“Praesent scelerisque, odio eu ermentum malesuada, nisi arcu <br /> volutpat nisl, sit met convallis nunc turpis eget volutpat. Suspendisse potenti.”</p>
                  <div className='divider bg-white rounded-pill mb-3'></div>
                  <h5>CAROLTEE</h5>
                </div>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-30" src={testimonial2} alt="slide 2" />
              <CCarouselCaption className="d-none d-md-block">
                <div className='caroselhp'>
                  <img src={quote} alt="" />
                  <h2>Client Says</h2>
                  <p>“Praesent scelerisque, odio eu ermentum malesuada, nisi arcu <br /> volutpat nisl, sit met convallis nunc turpis eget volutpat. Suspendisse potenti.”</p>
                  <div className='divider bg-white rounded-pill mb-3'></div>
                  <h5>AMELIA</h5>
                </div>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-30" src={testimonial3} alt="slide 3" />
              <CCarouselCaption className="d-none d-md-block">
                <div className='caroselhp'>
                  <img src={quote} alt="" />
                  <h2>Client Says</h2>
                  <p>“Praesent scelerisque, odio eu ermentum malesuada, nisi arcu <br /> volutpat nisl, sit met convallis nunc turpis eget volutpat. Suspendisse potenti.”</p>
                  <div className='divider bg-white rounded-pill mb-3'></div>
                  <h5>BANJEMEE</h5>
                </div>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </Col>
      </Row>
    </Container>
  );
}

export default ClientSays;
