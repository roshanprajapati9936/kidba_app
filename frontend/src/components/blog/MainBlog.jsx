import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaComments } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

const MainBlog = () => {
    const [blog, setBlog] = useState([]);
    const [path, setPath] = useState("");

    const [post, setPost] = useState([])

    const [blogtag, setBlogtag] =useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8002/gets-blog")
            .then((res) => {
                console.log(res.data.data);
                setBlog(res.data.data);
                setPath("http://localhost:8002/uploads/blogclasses"); // Set the base path here
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // post category
    useEffect(() => {
        axios.get("http://localhost:8002/gets-kidseducationdata")
            .then((res) => {
                console.log(res.data.data)
                setPost(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    // popular tag
    useEffect(()=>{
        axios.get("http://localhost:8002/gets-blogtag")
        .then((res)=>{
            console.log(res.data.data)
            setBlogtag(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })    
    },[])

    const nextPage = () =>{
        navigate('/pages')
    }


    return (
        <>
            <Container className='mb-28'>
                <Row>
                    <Col md={8}>
                        <div className='mt-28'>
                            {
                                blog.map((elem, ind) => (
                                    <Card style={{ width: '100%', height: '700px', margin: '10px 0px', color: 'white' }} key={ind}>
                                        <Card.Img variant="top" src={`${path}/${elem.image}`} alt={elem.image} />
                                        <Card.Body>

                                            <Card.Text className='d-flex'>

                                                <div className='blog-icon ml-5'>
                                                    <FaCalendarAlt />
                                                </div>

                                                <div className='blog-title ml-3'>
                                                    {elem.calendar}
                                                </div>

                                                <div className='blog-icon ml-3'>
                                                    <IoPerson />
                                                </div>

                                                <div className='blog-title ml-3'>
                                                    {elem.kidba_name.kidba_name}
                                                </div>

                                                <div className='blog-icon ml-3'>
                                                    <FaComments />
                                                </div>

                                                <div className='blog-title ml-3'>
                                                    {elem.comment}
                                                </div>
                                            </Card.Text>

                                            <Card.Text>
                                                <div className='blog-title ml-3 text-3xl font-bold'>
                                                    {elem.title}
                                                </div>
                                            </Card.Text>

                                            <Card.Text>
                                                <div className='blog-title blog-description'>
                                                    {elem.short_description}
                                                </div>
                                            </Card.Text>


                                            <Button className='blog-btn mt-2' onClick={nextPage}>
                                                READ MORE
                                            </Button>

                                        </Card.Body>
                                    </Card>
                                ))}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='blog-search mt-28'>
                            <div className='searchblog-1'>
                                <h2 > Search </h2>
                                <hr />
                                <div className='ml-9 mt-5'>
                                    <input className='search-box'
                                        type='search'
                                        placeholder='search'
                                    />
                                    <Button className='searchbox-btn'> Search</Button>
                                </div>
                            </div>
                            {/*  post category  */}

                            <div className='searchblog-1 mt-16'>
                                <h2 > Post Categories </h2>
                                <hr />

                                <div>
                                    {
                                        post &&
                                        post.map((elem, ind) => {
                                            return (
                                                <div className='d-flex'>
                                                    <div>
                                                        <FaChevronRight className='ml-5 text-xs mt-1 mr-3' />
                                                    </div>
                                                    <div className='blog-cat123'>
                                                        {elem.kids_education_name}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>

                            {/* =========== Popular Post ============= */}

                            <div className='blog-post mt-16'>
                            <h2 > Popular Post</h2>
                             <hr/>
                              {
                                blog &&
                                blog.map((elem,ind)=>{
                                    return(
                                        <div className='d-flex'>
                                            <div> 
                                              <img  src={`${path}/${elem.image}`} alt={elem.image} style={{ width: '70px', height: '72px', margin: '5px 20px', color: 'white' }} key={ind}></img>
                                              </div>

                                               <div className='post-title ml-2 mt-3'>
                                                    {elem.calendar}
                                                <p> {elem.title}</p>
                                              </div>
               
                                        </div>
                                    )
                                })
                              }
                            </div>
                            {/* ============Gallary Photo========= */}
                             <div className='blog-galary mt-16'>
                                   <h2 > Gallery Photos</h2>
                                   <hr/>
                                   <p>...</p>
                             </div>
                            

                             {/* ===== Blog Tags */}
                             <div className='searchblog-1 mt-16'>
                                <h2> Populat Tag</h2>
                                <hr/>
                                <div className='d-flex   flex-wrap'>
                                {
                                   blogtag &&
                                   blogtag.map((elem,ind)=>{
                                      return(
                                        
                                            <div key={ind} className='populat_div d-flex' >
                                             
                                             <Button className='blogtag-btn mr-2 mb-3 ml-5'  >
                                                 {elem.blogtag_name}
                                             </Button>
                                              
                                        
                                         </div>

                                        
                                       
                                      )
                                   })
                                }
                                        </div>

                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MainBlog;
