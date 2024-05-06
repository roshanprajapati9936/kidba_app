import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../photos/logo.png"
import cartIcon from "../photos/cart-icon.png"
import { useAuth } from '../context/auth';
import {notification} from 'antd';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import {useCart} from '../context/cart';

const Appbar = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart()

  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    })
    localStorage.removeItem("auth")
    notification.success({
      message:"Logout Successfully"
    });
  }

  const registerPage = () => {
    navigate('/register')
  }

  return (
   

    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>

          <Navbar.Brand href="/"> <img src={logo} className='logo' /></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-1  p-4"
              navbarScroll
            >
              <NavLink className='nav-link' to="/">HOME</NavLink>
              <NavLink className='nav-link' to="/courses">COURSES</NavLink>
              <NavLink className='nav-link' to="/pages">PAGES</NavLink>       
              <NavLink className='nav-link' to="/blog">BLOG</NavLink>
              <NavLink className='nav-link' to="/contact">CONTACT</NavLink>
              {
                !auth.user ? (
                  <>
                    <NavLink className='nav-link' to="/register">REGISTER</NavLink>
                    <NavLink className='nav-link' to="/login">LOGIN</NavLink>
                  </>
                  ) : (
                  <>
                    <Dropdown className='ml-3'>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {auth?.user?.name}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}
                          className='nav-link'> DASHBOARD </NavLink>

                        <NavLink onClick={handleLogout} className='nav-link' to="/"> LOGOUT</NavLink>
                      </Dropdown.Menu>
                    </Dropdown>

                  </>
                  )
              }

            </Nav>
            <NavLink className='nav-link' to='/cart' >
              <div className='nav-cart-icon'>
                <img src={cartIcon} />
                <div className='cart-1'>
                {cart?.length}
                  
                </div>   
              </div>
            </NavLink>



            <Button onClick={registerPage} className='ms-4 p-3 px-4' style={{ background: 'linear-gradient(-145deg, #8ecf35, #23cc88) ', border: '1px solid #23cc88 ', fontWeight: "700" }}>  ADMIT </Button>

          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  )
}

export default Appbar;