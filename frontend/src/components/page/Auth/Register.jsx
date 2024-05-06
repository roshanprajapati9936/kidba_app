import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../home/Footer';
import {notification} from 'antd'

const Register = () => {
     const [name, setName] = useState("")
     const [lastName, setLastName] = useState("")
     const [userName, setUserName] = useState("") 
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("") 
      // forgot password 
      const [question, setQuestion] =useState("")

     const navigate = useNavigate();

     const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:8002/register", 
        { name, lastName, userName, email, password, question});
        if (res && res.data.success) {
          notification.success({
            message:res.data.message
          });
          navigate('/login');
        } else {
           notification.error({
            message:res.data.message,
          });
        }
      } catch (error) {
        console.error(error);
        notification.error({
          message:"Something went wrong",
        });
      }
    };
        
  return (
    <>   
      <div className='course-sec-1'>
        <div className='course-sec1'>
          <h2>Student Registration</h2>
          <p>Kidba-Student Registration</p>
        </div>
      </div>
      <div className='register'>

        <Form className="register-form mt-28 p-10 mb-28" onSubmit={handleSubmit}>
           <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Label className='text-base font-semibold' > First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name " className='register-form-text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicLastName">
            <Form.Label className='text-base font-semibold ' >Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name " className='register-form-text'
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
            required/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicUserName">
            <Form.Label className='text-base font-semibold ' >User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name " className='register-form-text'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            required/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className='text-base font-semibold ' >E-Name</Form.Label>
            <Form.Control type="email" placeholder="E-Mail" className='register-form-text'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label className='text-base font-semibold ' >Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className='register-form-text'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicLastName">
            <Form.Label className='text-base font-semibold ' > Friend Name </Form.Label>
            <Form.Control type="text" placeholder="What is your best friend name ? " className='register-form-text'
            value={question}
            onChange={(e)=> setQuestion(e.target.value)}
            required/>
          </Form.Group>

          <Button variant="primary" type="submit" className='register-btn' >
            REGISTER
          </Button>
          <div className='w-20 h-20'>
          
          </div>
        </Form>

      </div>
      <Footer/>
    </>
  )
}

export default Register;