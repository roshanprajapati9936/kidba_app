
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useAuth } from '../../../context/auth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { notification } from 'antd'
import UserMenu from './UserMenu'


const Profile = () => {
  // context
  const [auth, setAuth] = useAuth()
  // State
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // get user data
  useEffect(() => {
    console.log(auth.user);
    const { name, lastName, userName, email } = auth.user;
    console.log(name);
    setName(name)
    setLastName(lastName)
    setUserName(userName)
    setEmail(email)
  }, [auth?.user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authdata = JSON.parse(localStorage.getItem('auth'))
      const data = await axios.put('http://localhost:8002/profile',
        { name, lastName, userName, email, password }, {
        headers: {
          Authorization: authdata.token
        }
      });

      if (data?.error) {
        notification.error({ message: data?.error })
      } else {
        console.log(data);
        setAuth({ ...auth, user: data?.data?.updatedUser })
        let ls = localStorage.getItem("auth")
        ls = JSON.parse(ls)
        ls.user = data.data.updatedUser
        localStorage.setItem('auth', JSON.stringify(ls))
        notification.success({ messag: "Profile Updated Successfully" })
      }

    } catch (error) {
      console.error(error);
      notification.error({ message: "Something went wrong" });
    }
  };
  return (
    <>
      <Container className='mt-20'>
        <Row>
          <Col md={3}>
            <UserMenu />
          </Col>
          <Col md={9}>
            <div className='register'>
              <Form className="register-form mt-8 p-10 mb-28 w-100" onSubmit={handleSubmit}>
                <h2 className='text-center'> User Profile</h2>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Label className='text-base font-semibold' > First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name " className='register-form-text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicLastName">
                  <Form.Label className='text-base font-semibold ' >Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name " className='register-form-text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicUserName">
                  <Form.Label className='text-base font-semibold ' >User Name</Form.Label>
                  <Form.Control type="text" placeholder="User Name " className='register-form-text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className='text-base font-semibold ' >E-Name</Form.Label>
                  <Form.Control type="email" placeholder="E-Mail" className='register-form-text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className='text-base font-semibold ' >Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className='register-form-text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>


                <Button variant="primary" type="submit" className='register-btn' >
                  Update
                </Button>

              </Form>

            </div>
          </Col>

        </Row>


      </Container>
    </>
  )
}

export default Profile