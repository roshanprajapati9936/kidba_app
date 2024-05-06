import React, { useState, useEffect } from 'react'
import { useCart } from './cart'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DropIn from "braintree-web-drop-in-react";
import { notification } from 'antd';
import Footer from '../components/home/Footer';

const CartPage = () => {
  const [auth] = useAuth()
  const [cart, setCart] = useCart()
  const navigate = useNavigate()
  const [clientToken, setClientToken] = useState("")
  const [instance, setInstance] = useState("")
  const [loading, setLoading] = useState(false)
  // total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        // total = total + Number(item.price.slice(1));
        total = total + parseFloat(item.price);
      });
      return total.toLocaleString("en-Us", {
        style: 'currency',
        currency: "USD",
      })
    } catch (error) {
      console.log(error)
    }
  }

  // delete cart item
  const removeCartItem = (p) => {
    try {
      let myCart = [...cart]
      let index = myCart.findIndex(item => item._id === p)
      myCart.splice(index)
      setCart(myCart);
      localStorage.setItem('cart', JSON.stringify(myCart));
    } catch (error) {
      console.log(error)
    }
  }

  // get payment gatway token
  const getToken = async () => {
    try {
      const  {data}  = await axios.get("http://localhost:8002/braintree/token")
      setClientToken(data?.clientToken)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getToken();
  }, [auth?.token])
  // make payment 
  const handlePayment = async () => {
    try {
    const  {nonce} = await instance.requestPaymentMethod();
            await axios.post("http://localhost:8002/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(true);
      localStorage.removeItem('cart');
      setCart([]);
      navigate("/dashboard/user/order");
      notification.success({
        message: "Payment Successful"
      });
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className='text-center'>
              {` ${auth?.token && auth?.user?.name}`}
            </h1>

            <h4 className='text-center bold mb-4'>
              {cart?.length >= 1
                ? `You have ${cart.length} item in your cart ${auth?.token ? "" : "Please login to checkout"
                }`
                : "Your cart is empty"}
            </h4>
          </Col>

          <Col md={9}>
          {cart?.map((p) => {
            return (
              <Row>
                <Col md={6}>
                  <div className='mb-6'>
                    <img src={`http://localhost:8002/uploads/createclassses/${p.photo}`} alt={p.photo}/>
                  </div>
    
                </Col>
                <Col md={6}>
                  <div className='border mb-6 p-4'>
                    <h5> {p.title}</h5>
                    <h5> {p.description} </h5>
                    <h5> Fees : {p.price}</h5>
                    <h5> Duration : {p.duration}</h5>
                    <h5>  {p.label}</h5>
                    <Button className='btn-danger' onClick={() => removeCartItem(p.Id)}> Remove </Button>
                  </div>
                </Col>
              </Row>
            )
          })}
          </Col>

          <Col md={3} className='text-center'>
            <h2> Cart Summary </h2>
            <p> Total | Checkout | Payment </p>
            <hr />
            <h5> Total : {totalPrice()} </h5>
            {auth?.user?.name ? (
              <>
                <div className='mb-3'>
                  <h3> User Name </h3>
                  <h5> {auth?.user?.name}</h5>
                  <Button className='btn btn-outline-warning'
                    onClick={() => navigate('/dashboard/user/profile')}> Update Name </Button>
                </div>
              </>
            ) : (
              <>
                <div className='mb-3'>
                  {
                    auth?.token ? (
                      <Button className='btn btn-outline-warning'
                        onClick={() => navigate('/dashboard/user/profile')}
                      > Update Name </Button>
                    ) : (
                      <Button className='btn btn-outline-warning'
                        onClick={() => navigate('/login', {
                          state: '/cart',
                        })}
                      > Please Login to checkout </Button>
                    )
                  }
                </div>
              </>)}
            <div className='mt-3'>

              <DropIn
                options={{
                  authorization: clientToken,
                  paypal: {
                    flow: 'vault'
                  }
                }}
                onInstance={instance => setInstance(instance)}
              />
              <button className='btn btn-primary' 
              onClick={handlePayment}
              // disabled={!loading || !instance || !auth?.user?.name}
              >
              {loading ? "processing ...." : "Make Payment"}
              </button>
            </div>

            {/* <div className='mt-3'>
              <DropIn
                options={{
                  authorization: clientToken,
                  paypal: {
                    flow: 'vault'
                  }
                }}
                onInstance={instance => {
                  console.log(instance);
                  setInstance(instance)}}
              />   
              <button className='btn btn-primary' onClick={handlePayment}
              //  disabled={!loading || !instance || !auth?.user?.name}
                >
                {loading ? "Processing ...." : "Make Payment"}
              </button>
            </div> */}
          </Col>
        </Row>
      </Container>
     <div className='mt-20'>
     <Footer/>
     </div>
     
    </>
  )
}
export default CartPage 