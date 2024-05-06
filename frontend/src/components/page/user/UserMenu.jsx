import React from 'react';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const UserMenu = () => {
    return (
        <>  
            <div className='text-center'>
                <h1>User Dashboard</h1>
                <ListGroup>
                    <NavLink to='/dashboard/user/profile' className='nav-link'>
                        <ListGroup.Item>Profile</ListGroup.Item>
                    </NavLink>

                    <NavLink to='/dashboard/user/order' className='nav-link'>
                        <ListGroup.Item>Orders</ListGroup.Item>
                    </NavLink>

                </ListGroup>
            </div>
        </>
    );
};

export default UserMenu;
