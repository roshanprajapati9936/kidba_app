import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Col, Row } from 'react-bootstrap';
import hemalimg from '../../photos/hemal-img.jpg'
import hemal1 from '../../photos/hemal-img-1.jpg'
import hemal2 from '../../photos/hemal-img-2.jpg'
import hemal3 from '../../photos/hemal-img-3.jpg'
import hemal4 from '../../photos/hemal-img-4.jpg'
import hemal5 from '../../photos/hemal-img-5.jpg'
import hemal6 from '../../photos/hemal-img-6.jpg'
import hemal7 from '../../photos/hemal-img-7.jpg'
import hemal8 from '../../photos/hemal-img-8.jpg'
import hemal9 from '../../photos/hemal-img-9.jpg'
import hemal10 from '../../photos/hemal-img-10.jpg'
import hemal11 from '../../photos/hemal-img-11.jpg'
import hemal12 from '../../photos/hemal-img-12.jpg'
import hemal13 from '../../photos/hemal-img-13.jpg'
import hemal14 from '../../photos/hemal-img-14.jpg'
import hemal15 from '../../photos/hemal-img-15.jpg'
import hemal16 from '../../photos/hemal-img-16.jpg'
import hemal17 from '../../photos/hemal-img-17.jpg'
import hemal18 from '../../photos/hemal-img-18.jpg'
import hemal19 from '../../photos/hemal-img-19.jpg'
import hemal20 from '../../photos/hemal-img-20.jpg'
import hemal21 from '../../photos/hemal-img-21.jpg'
import hemal22 from '../../photos/hemal-img-22.jpg'
import hemal23 from '../../photos/hemal-img-23.jpg'
import {useState } from 'react'




const imageArray = [
    {
        id: 1,
        image: `${hemalimg}`
    },
    {
        id: 2,
        image: `${hemal1}`
    },
    {
        id: 3,
        image: `${hemal2}`
    },
    {
        id: 4,
        image: `${hemal3}`
    },
    {
        id: 5,
        image: `${hemal4}`
    },
    {
        id: 6,
        image: `${hemal5}`
    },
    {
        id: 7,
        image: `${hemal6}`
    },
    {
        id: 8,
        image: `${hemal7}`
    },
    {
        id: 9,
        image: `${hemal8}`
    },
    {
        id: 10,
        image: `${hemal9}`
    },
    {
        id: 11,
        image: `${hemal10}`
    },
    {
        id: 12,
        image: `${hemal11}`
    },
    {
        id: 13,
        image: `${hemal12}`
    },
    {
        id: 14,
        image: `${hemal13}`
    },
    {
        id: 15,
        image: `${hemal14}`
    },
    {
        id: 16,
        image: `${hemal15}`
    },
    {
        id: 17,
        image: `${hemal16}`
    },
    {
        id: 18,
        image: `${hemal17}`
    },
    {
        id: 19,
        image: `${hemal18}`
    },
    {
        id: 20,
        image: `${hemal19}`
    },
    {
        id: 21,
        image: `${hemal20}`
    },
    {
        id: 22,
        image: `${hemal21}`
    },
    {
        id: 23,
        image: `${hemal22}`
    },
    {
        id: 24,
        image: `${hemal23}`
    },



]

const paintingArray =[
    {
        id:1,
        image:`${hemalimg}`
    },
    {
        id:2,
        image:`${hemal1}`
    },
    {
        id:3,
        image:`${hemal2}`
    },
    {
        id:4,
        image:`${hemal3}`
    },
    {
        id:5,
        image:`${hemal4}`
    },
    {
        id:6,
        image:`${hemal5}`
    }

]
const studyArray=[
    {
        id:1,
        image:`${hemal6}`
    },
    {
        id:2,
        image:`${hemal7}`
    },
    {
        id:3,
        image:`${hemal8}`
    },
    {
        id:4,
        image:`${hemal9}`
    },
    {
        id:5,
        image:`${hemal10}`
    },
    {
        id:6,
        image:`${hemal11}`
    }
]

const photographyArray=[
    {
        id:1,
        image:`${hemal12}`
    },
    {
        id:2,
        image:`${hemal13}`
    },
    {
        id:3,
        image:`${hemal14}`
     },
     {
        id:4,
        image:`${hemal15}`
     },
     {
        id:5,
        image:`${hemal16}`
     },
     {
        id:6,
        image:`${hemal17}`
     }
    
]
const writingArray=[
    {
        id:1,
        image:`${hemal18}`
    },
    {
        id:2,
        image:`${hemal19}`
    },
    {
        id:3,
        image:`${hemal20}`
    },
    {
        id:4,
        image:`${hemal21}`
    },
    {
        id:5,
        image:`${hemal22}`
    },
    {
        id:6,
        image:`${hemal23}`
    }
]

const OurSchool = () => {


    const [visibleItem, setVisibleItem] = useState(6)

    const ViewAllPhotos = () => {
        const newVisibleItems = visibleItem + 3;
        setVisibleItem(Math.min(newVisibleItems, imageArray.length));
    }

    const isButtonVisible = visibleItem < imageArray.length;
  

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='our-school-main'>
                <div className='our-school-head'>
                    <h2>Our School Gallery</h2>
                    <p>Here is what you can expect from a house cleaning from a Hand professional.<br /> Download the app to share further cleaning details and instructions!</p>
                </div>

                <div>

                    <Container>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="SEE ALL" value="1" />
                                        <Tab label="PAINTING" value="2" />
                                        <Tab label="STUDY" value="3" />
                                        <Tab label="PHOTOGRAPHY" value="4" />
                                        <Tab label="WRITING" value="5" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Row>
                                        {
                                            imageArray &&
                                            imageArray.slice(0,visibleItem).map((elem, ind) => {
                                                return (
                                                    <Col md={4}>
                                                        <div className='mb-7'>
                                                            <img src={elem.image} alt="" />
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPanel>
                                <TabPanel value="2">
                                      <Row>
                                         {
                                            paintingArray && 
                                            paintingArray.map((elem,ind)=>{
                                                return (
                                                    <Col md={4}>
                                                         <div>
                                                            <img src={elem.image} alt="" />
                                                         </div>
                                                    </Col>
                                                )
                                            })
                                         }
                                      </Row>
                                   
                                    </TabPanel>
                                <TabPanel value="3">
                                      <Row>
                                          {
                                            studyArray &&
                                            studyArray.map((elem,ind)=>{
                                              return(
                                                <Col md={4}>
                                                    <img src={elem.image} alt="" />
                                                </Col>
                                              )
                                            })
                                          }
                                      </Row>
                                    </TabPanel>

                                <TabPanel value="4">
                                      <Row>
                                        {
                                            photographyArray &&
                                            photographyArray.map((elem,ind)=>{
                                                return(
                                                    <Col md={4}>
                                                        <img src={elem.image} alt="" />
                                                    </Col>
                                                )
                                            })
                                        }
                                      </Row>
                                    </TabPanel>
                                    
                                <TabPanel value="5">
                                    <Row>
                                        {
                                            writingArray &&
                                            writingArray.map((elem,ind)=>{
                                                return(
                                                    <Col md={4}>
                                                         <div>
                                                            <img src={elem.image} alt="" />
                                                         </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPanel>
                            </TabContext>
                        </Box>

                    </Container>
                </div>

                <div className='popularallbtn'>
                {isButtonVisible ? <Button onClick={ViewAllPhotos}> View All Photos</Button> : null}
                </div>

            </div>
        </>
    )
}

export default OurSchool