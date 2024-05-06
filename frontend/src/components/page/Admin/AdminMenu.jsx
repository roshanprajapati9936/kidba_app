import React from 'react';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const AdminMenu = () => {
    return (
        <>  
            <div className='text-center'>
                <h1>Admin Panel</h1>
                <ListGroup>
                    <NavLink to='/dashboard/admin/create-category' className='nav-link'>
                        <ListGroup.Item>Create Category</ListGroup.Item>
                    </NavLink>

                    <NavLink to='/dashboard/admin/create-product' className='nav-link'>
                        <ListGroup.Item>Create Product</ListGroup.Item>
                    </NavLink>

                    <NavLink to='/dashboard/admin/products' className='nav-link'>
                        <ListGroup.Item>Products</ListGroup.Item>
                    </NavLink>
                    {/* <NavLink to='/dashboard/admin/update-prducts' className='nav-link'>
                        <ListGroup.Item>Update Products</ListGroup.Item>
                    </NavLink> */}
                
                    {/* <NavLink to='/dashboard/admin/users' className='nav-link'>
                        <ListGroup.Item>Users</ListGroup.Item>
                    </NavLink> */}
                </ListGroup>
            </div>
        </>
    );
};

export default AdminMenu;
