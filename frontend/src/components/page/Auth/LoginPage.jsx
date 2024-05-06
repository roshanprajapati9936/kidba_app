import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { notification } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../home/Footer';
import {useAuth} from  '../../../context/auth'



const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  const navigate = useNavigate();
  const [auth ,setAuth] = useAuth()
  const location = useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const apiUrl = process.env.REACT_APP_BASE_URL;
      // console.log(apiUrl);
      const res = await axios.post("http://localhost:8002/login", 
      {email, password });
      console.log(res,'aaaaaaaaaaaaaa')
      if (res && res.data.success) {
         notification.success({
         message:"Login Successfully",
        });
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.clear();
        localStorage.setItem('auth',JSON.stringify(res.data))
        localStorage.setItem('token',res.data.token)
        navigate(location.state || '/');
      } else {
        notification.error({
          message:res.data.message
        });
      }
    } catch (error) {
      console.error(error);
       notification.error({
        message:"Something went wrong"});
    }
  };
  return (
    <>
      <div className='course-sec-1'>
        <div className='course-sec1'>
          <h2>Student Login</h2>
          <p>Kidba-Student Login</p>
        </div>
      </div>
      <div className='register'>

        <Form className="register-form mt-28 p-10 mb-28" onSubmit={handleSubmit}>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className='text-base font-semibold ' >E-Mail</Form.Label>
            <Form.Control type="email" placeholder="E-Mail" className='register-form-text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label className='text-base font-semibold ' >Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className='register-form-text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </Form.Group>
          
          <Button variant="primary" type="button" className='register-btn mb-10'  
           onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </Button>

          <Button variant="primary" type="submit" className='register-btn' >
            Login
          </Button>
          <div className='w-20 h-20'>
          </div>
        </Form>

      </div>
      <Footer />
    </>
  )
}

export default LoginPage