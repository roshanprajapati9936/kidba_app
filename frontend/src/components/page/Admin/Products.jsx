import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container,Row, Card} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AdminMenu from './AdminMenu'

const Products = () => {
    const [products, setProducts] = useState([])
    const [path, setPath] = useState('')
    
     // Get all products
    useEffect(() => {
        axios.get("http://localhost:8002/gets-popularclasses")
          .then((res) => {
            console.log("nnnnnnnn",res.data.data)
            setProducts(res.data.data)
            setPath(res.data.filepath)
          })
          .then((err) => {
            console.log(err)
          })
      },[])
  return (
   <>
      <Container className='mt-20'>
             <Row>  
                <Col md={3}>
                  <AdminMenu/>
                </Col>

                  <Col md={9}>
                    <Row> 
                    <h1> All Products</h1>
                   
                   {
                     products &&
                      products.map((p)=>{
                       
                         return(
                           <Col md={4} key={p._id} className='mb-3'>
                           <Link   to={`/dashboard/admin/update-prducts/${p._id}`}
                           className='products-link'>
                                    
                           <Card>
                             <Card.Img variant="top" src={path + '/' + p.image}
                             className='h-[200px]'/>
                             <Card.Body> 
                               <Card.Title> {p.name}</Card.Title>
                               <Card.Text>
                                  {p.description}
                               </Card.Text>
                               <Card.Text>
                                  {p.category.categories_name}
                               </Card.Text>
                               <Card.Text>
                                  ${p.price}
                               </Card.Text>
                               <Card.Text>
                                  {p.label}
                               </Card.Text>
                               <Card.Text>
                                  {p.duration}
                               </Card.Text>
                             </Card.Body>
                           </Card>
                           </Link>
                             </Col>
                          
                         )
                     })
                   }
                    </Row>
                  
                      </Col>
             </Row>
      </Container>
   </>
  )
}
export default Products