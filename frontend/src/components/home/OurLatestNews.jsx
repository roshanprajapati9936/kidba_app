import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Col, Row, Card,Button } from 'react-bootstrap';
import { FaRegCalendarDays } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
const OurLatestNews = () => {

    const [education, setEducation] = useState([])
    const [path, setPath] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8002/gets-news")
            .then((res) => {
                console.log(res.data.data)
                setEducation(res.data.data)
                setPath(res.data.filepath)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className='our-news-main'>
                <div className='our-news-head'>
                    <h2> Our Latest News</h2>
                    <p>Here is what you can expect from a house cleaning from a Handy        professional. Download the app to <br />
                        share further cleaning details and instructions!</p>
                </div>

                <Container>
                    <Row>
                        {
                            education &&
                            education.map((elem, ind) => {
                                return (
                                    <Col md={4}>
                                        <div className='mainournews'>
                                            <Card style={{ width: '100%', height:'470px' ,margin:'10px 0px',color: "white"}}>
                                                
                                                <Card.Img variant="top" src={path + '/' + elem.image} alt={elem.image}  />

                                                <Card.Body>
                                                    
                                                    <Card.Text>
                                                        <div className='calendar'>
                                                        <FaRegCalendarDays className='ml-5'/>
                                                        <div className='ml-3'>
                                                        {elem.calendar}
                                                        </div>
                                                      
                                                        </div>
                                                      
                                                    </Card.Text>

                                                    <Card.Text>
                                                          <a href="" className='newsh3'>
                                                             {elem.title}
                                                             </a>
                                                    </Card.Text>

                                                    
                                                    <Card.Text>
                                                        <div className='news_short'>
                                                        {elem.short_description}
                                                        </div>
                                                      
                                                    </Card.Text>
                                                 {/* <hr/> */}
                                                 <Card.Text className='newskid-education'>
                                                    
                                                 <CiHeart className='newsheart'/>

                                                  <a href="">{elem.kids_education_name.kids_education_name} </a>  
                                                  </Card.Text>                               
                                                    <Card.Text className='newscomment newscomment-1'>
                                                       <div className='mr-3'>
                                                       <TfiCommentAlt className='newscomicon'/>
                                                       </div>
                                                     
                                                      <div>
                                                      {elem.Comment}
                                                      </div>
                                                        
                                                    </Card.Text>                                                 
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default OurLatestNews