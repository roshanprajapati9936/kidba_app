import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Container, Row, Col, Button } from 'react-bootstrap'
import Footer from '../home/Footer'
import { useCart } from '../../context/cart'
import { notification } from 'antd'

const LikeNastaFood = () => {
    const [cart, setCart] = useCart();
    const [single, setSingle] = useState({})
    const { singleId } = useParams()
    const [path, setPath] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8002/get-popularclasses/${singleId}`)
            .then((res) => {
                console.log("hhwffvghfgv", res.data.data)
                setSingle(res.data.data)
                 setPath(res.data.filepath)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [singleId])
    return (
        <>
            <div className='course-sec-1'>
                <div className='course-sec1'>
                    <h2> {single.category?.categories_name}  </h2>
                    <p>Kidba-Course -  {single.category ? single.category.categories_name : "name is not found"} - {single.title}  </p>
                </div>
            </div>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className='mt-20 singlemain'>
                            <img  src={path + '/' + single.image } alt={single.image}/>
                        </div>
                        <h1 className='single_pageh mt-10'> {single.name}</h1>
                        <div className='d-flex'>
                            <h5> Teacher Name : <span className='spansingle'> Kidba </span>  </h5>
                            <div className='ml-10'>
                                |
                            </div>
                            <h5 className='ml-20'> Join Date : </h5> <p className='spansingle_p ml-2'> 2023-03-21 05:14:33 </p>
                        </div>

                        <div className='d-flex mt-4'>
                            <h5> Course Label : <span className='spansingle_1'> {single.label} </span> </h5>

                            <div className='ml-8'>
                                |
                            </div>

                            <h5 className='ml-10'> Duration : {single.duration}</h5>
                            <div className='ml-8'>
                                |
                            </div>
                            <h5 className='ml-10'> Tution Fee <span className='spansingle_1'> ${single.price} </span> </h5>
                            <hr />
                        </div>

                        <h5 className='mt-4'>  Description : {single.description}. </h5>

                        <hr className='mt-10' />

                    </Col>

                    <Col md={4}>
                        <div className='mt-20'>
                            <img src={path + '/' + single.image} alt={single.image} />
                        </div>
                        <h3 className='mt-6'> $ {single.price}</h3>

                        <Button className=' addToCart'
                            onClick={() => {
                                setCart([...cart, single])
                                localStorage.setItem('cart', JSON.stringify([...cart, single]))
                                notification.success({
                                    message: "item added to cart"
                                })
                            }}
                        > Add to Cart</Button>

                        <div className='border mt-8'>
                            <h3 className='ml-4 mt-4 bold'> A course by </h3>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <p className='ml-8'> kidba <br /> WordPress Teacher</p>
                            <hr />
                            <h3 className='ml-4'> Material Includes</h3>
                            <p className='ml-4'> This learning program was designed
                                with busy parents in mind
                                Parents who don't have the time to invest dozens</p>
                            <h5 className='mt-3 ml-4'> Requirements</h5>
                            <p className='ml-4'> No requirements are needed.</p>

                            <h5 className='ml-5'> Audience</h5>
                            <p className='ml-4'>This learning program was designed with busy parents in mind. Parents who don't have the time to invest dozens of hours in listening to parenting courses or reading lots of parenting books but who want science based solutions to deal with their parenting challenges (children age 0-12)</p>
                        </div>

                    </Col>
                </Row>
            </Container>

            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}

export default LikeNastaFood