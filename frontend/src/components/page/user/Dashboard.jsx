import React from 'react'
import { Container,Row ,Col } from 'react-bootstrap';
import UserMenu from './UserMenu';
import Footer from '../../home/Footer';
import UserDetails from './UserDetails';
const Dashboard = () => {
  return (
    <>
       <Container className='mt-20'>
            <Row>
               <Col md={3}>
                  <UserMenu/>
               </Col>

               <Col md={9}>
                <UserDetails/>
               </Col>
            </Row>
       </Container>
       <Footer/>
    </>
  )
}

export default Dashboard;