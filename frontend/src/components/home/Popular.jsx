import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios'
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const Popular = () => {
  const navigate =  useNavigate()
  const [popular, setPopular] = useState([])
  const [path, setPath] = useState("")

   const[visibleItem, setVisibleItem]=useState(6)
 
    const seeMoreClasses=()=>{
     const newVisibleItems = visibleItem + 3;
     setVisibleItem(Math.min(newVisibleItems, popular.length));
   }

   const isButtonVisible = visibleItem < popular.length;
  
  useEffect(() => {
    axios.get("http://localhost:8002/gets-popularclasses")
      .then((res) => {
        setPopular(res.data.data)
        console.log("wwwwww",res.data.data)
        setPath(res.data.filepath)
      })
      .then((err) => {
        console.log(err)
      })
  }, [])

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  //  single Page 
  const singlePage =(id)=>{
    console.log(id)
     navigate(`/likeNastaFood/${id}`)
    
  }
  return (
    <>
    
      <div className='popularMain mt-20'>
        <div className='popular-Child'>
          <h2>Our Popular Classes</h2>
        </div>
        <div className='popular-Child'>
          <p>Here is what you can expect from a house cleaning from a Handy professional. Download the app <br />
            <span className='ml-40'> to share further cleaning details and instructions!</span>
          </p>
        </div>
      </div>

      <Container>
        <Box sx={{ width: '100%', typography: 'body1', marginTop:"40px"}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="SEE ALL" value="1" />
                <Tab label="SCIENCE" value="2" />
                <Tab label=" PROGRAMMING" value="3"/>
                <Tab label="PSYCHOLOGY" value="4" />
                <Tab label="BABY" value="5"/>
              </TabList>
            </Box>
            <TabPanel value="1">
              <Row>
                {
                  popular &&
                  popular.slice(0,visibleItem).map((elem, ind) => {
                    return (
                      <Col md={4} key={ind}>
                              
                          <Card style={{ width: '100% ', height:'480px', margin:"15px 0px"}}
                          onClick={()=>singlePage(elem._id)}
                          >
                          <div className='popularmain-img'>
                            <Card.Img variant="top" src={path + '/' + elem.image} alt={elem.image}  className='popularmimg h-[300px]'/>
                            </div>
                            <Card.Body>

                              <Button className='popularbtn'>
                              {elem.category.categories_name}
                              </Button>
                            
                              <Card.Title  
                                className='popular-price'>                              
                                ${elem.price}        
                              </Card.Title>

                              <Card.Title
                               className='populartitle'>
                                {elem.name}
                                </Card.Title>

                              <Card.Text>
                                {elem.description}
                              </Card.Text>

                              <Card.Text className='popularlabel'>
                                {elem.label}
                              </Card.Text>
                               
                              
                              <Card.Text className='popular_duration'>
                               <span> Duration : </span>   {elem.duration}
                              </Card.Text>

                            </Card.Body>
                          </Card>
                       
                      </Col>
                    )
                  })
                }
              </Row>
            </TabPanel>
            
            <TabPanel value="2">
            <Row>
                {            
                  popular &&
                  popular.filter(e =>e.category.name === "science").map((elem, ind) => {
                    return (
                      <Col md={4} key={ind}>
                        <div>
                          <Card style={{ width: '100%',height:'480px', margin:"15px 0px"}}>
                       
                            <Card.Img variant="top" src={path + '/' + elem.photo} alt={elem.image}  className='popularmimg'/>

                            <Card.Body>

                            <Button className='popularbtn'>
                              {elem.category.name}
                              </Button>
                            
                              <Card.Title    className='popular-price'>                               
                                {elem.price}        
                              </Card.Title>

                              <Card.Title>{elem.name}</Card.Title>

                              <Card.Text>
                                {elem.description}
                              </Card.Text>

                              <Card.Text className='popularlabel'>
                                {elem.label}
                              </Card.Text>

                              <Card.Text className='popular_duration'>
                              <span> Duration : </span>    {elem.duration}
                              </Card.Text>

                            </Card.Body>
                          </Card>
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
                  popular &&
                  popular.filter(e =>e.category.name === "programming").map((elem, ind) => {
                    return (
                      <Col md={4} key={ind}>
                        <div>
                          <Card style={{ width: '100%',height:'480px', margin:"15px 0px"}}>
                       
                            <Card.Img variant="top" src={path + '/' + elem.photo} alt={elem.image}  className='popularmimg'/>

                            <Card.Body>

                            <Button className='popularbtn'>
                              {elem.category.name}
                              </Button>
                            
                              <Card.Title    className='popular-price'>                               
                                {elem.price}        
                              </Card.Title>

                              <Card.Title>{elem.name}</Card.Title>

                              <Card.Text>
                                {elem.description}
                              </Card.Text>

                              <Card.Text className='popularlabel'>
                                {elem.label}
                              </Card.Text>

                              <Card.Text className='popular_duration'>
                              <span> Duration : </span>    {elem.duration}
                              </Card.Text>

                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </TabPanel>
            <TabPanel value="4">
            <Row>
                {
                  popular &&
                  popular.filter(e =>e.category.name === "psychology").map((elem, ind) => {
                    return (
                      <Col md={4} key={ind}>
                        <div>
                          <Card style={{ width: '100%',height:'480px', margin:"15px 0px"}}>
                       
                            <Card.Img variant="top" src={path + '/' + elem.photo} alt={elem.image}  className='popularmimg'/>

                            <Card.Body>

                            <Button className='popularbtn'>
                              {elem.category.name}
                              </Button>
                            
                              <Card.Title    className='popular-price'>                               
                                {elem.price}        
                              </Card.Title>

                              <Card.Title>{elem.name}</Card.Title>

                              <Card.Text>
                                {elem.description}
                              </Card.Text>

                              <Card.Text className='popularlabel'>
                                {elem.label}
                              </Card.Text>

                              <Card.Text className='popular_duration'>
                              <span> Duration : </span>    {elem.duration}
                              </Card.Text>

                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
              </TabPanel>
            <TabPanel value="5">
             
            <Row>
                {
                  popular &&
                  popular.filter(e =>e.category.name === "Baby").map((elem, ind) => {
                    return (
                      <Col md={4} key={ind}>
                        <div>
                          <Card style={{ width: '100%',height:'480px', margin:"15px 0px"}}>
                       
                            <Card.Img variant="top" src={path + '/' + elem.photo} alt={elem.image}  className='popularmimg'/>

                            <Card.Body>

                            <Button className='popularbtn'>
                              {elem.category.name}
                              </Button>
                            
                              <Card.Title    className='popular-price'>                               
                                {elem.price}        
                              </Card.Title>

                              <Card.Title>{elem.name}</Card.Title>

                              <Card.Text>
                                {elem.description}
                              </Card.Text>

                              <Card.Text className='popularlabel'>
                                {elem.label}
                              </Card.Text>

                              <Card.Text className='popular_duration'>
                              <span> Duration : </span>    {elem.duration}
                              </Card.Text>

                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
              </TabPanel>
          </TabContext>
        </Box>

        <div className='popularallbtn'> 
        {isButtonVisible ? <Button onClick={seeMoreClasses}>SEE MORE CLASSES</Button> : null}
        </div>
        
       
      </Container>
    </>
  )
}

export default Popular