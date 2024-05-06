import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminMenu from './AdminMenu'
import { useAuth } from '../../../context/auth'
import AdminDetails from './AdminDetails';

const AdminDashboard = () => {
    const [auth] = useAuth()
    return (
        <>
            <Container className='mt-20'>
                <Row>
                    <Col md={3}>
                        <AdminMenu />
                    </Col>
                    <Col md={9}> 
                        <AdminDetails/> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminDashboard