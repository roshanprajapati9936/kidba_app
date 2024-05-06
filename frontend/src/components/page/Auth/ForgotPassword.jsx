import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer} from 'react-toastify';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Footer from '../../home/Footer';

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("") 
    const [question, setQuestion] = useState("") 
  
    const navigate = useNavigate();
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:8002/forgot-password", 
        {email, question, newPassword});
        if (res && res.data.success) {
          toast.success(res.data.message);
          toast.success("Reset Successfully");
          navigate('/login');
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <>
    <div className='course-sec-1'>
      <div className='course-sec1'>
        <h2>Student Reset Password</h2>
        <p>Kidba-Student Reset Password</p>
      </div>
    </div>
    <div className='register'>

      <Form className="register-form mt-28 p-10 mb-28" onSubmit={handleSubmit}>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className='text-base font-semibold ' >E-Name</Form.Label>
          <Form.Control type="email" placeholder="E-Mail" className='register-form-text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className='text-base font-semibold ' >Best Friend</Form.Label>
          <Form.Control type="text" placeholder="Enter your best friend name " className='register-form-text'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required/>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className='text-base font-semibold ' > New Password</Form.Label>
          <Form.Control type="password" placeholder="New Password" className='register-form-text'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required />
        </Form.Group>
     
        <Button variant="primary" type="submit" className='register-btn' >
          Reset Password
        </Button>
        <div className='w-20 h-20'>
          <ToastContainer />
        </div>
      </Form>

    </div>
    <Footer />
  </>
  )
}

export default ForgotPassword