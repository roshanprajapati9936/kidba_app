import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {notification}  from 'antd'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Select } from 'antd'
import AdminMenu from './AdminMenu'
const { Option } = Select

  const CreateProduct = () => {
   const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [label, setLabel] = useState("")
  const [duration, setDuration] = useState("")
  const [photo, setPhoto] = useState("")
  const [avatar , setAvatar] = useState("")


  useEffect(()=>{
    setAvatar(photo);
  }, [photo])

  // get all category
  useEffect(() => {      
    const token = localStorage.getItem("token")
    axios.get("http://localhost:8002/category",
    {
      headers: {
         'Authorization': token
      }
   }
    )
      .then((res) => {
        setCategories(res.data.category)
      })
      .catch((err) => {
        console.log(err)
        notification.error({message:"Something went wrong while getting all category"})
      })
  }, [])

// create product
const  handleCreate =async(e)=>{
    e.preventDefault();
    try{
        const productData = new FormData()
        productData.append("name",name)
        productData.append("description",description)
        productData.append("price",price)
        productData.append("category",category)
        productData.append("label",label)
        productData.append("duration",duration)
        productData.append("avatar",photo)
        
        const token = localStorage.getItem("token")
              axios.post(`http://localhost:8002/create-product`,productData,
         {
          headers: {
             'Authorization': token
          }
       })
          notification.success({message:"Product created successfully"});
          navigate('/dashboard/admin/products');
        
    }catch(error){
       console.log(error)
    }
}  

  return (
    <Container className='mt-20'>
      <Row>

        <Col md={3}>
            <AdminMenu/>
        </Col>

        <Col md={9}>
          <h1> Create Product</h1>
          <div className="m-1 w-108">
            <Select bordered={false}
              size='large'
              placeholder='Select a category'
              showSearch
              className='form-select mb-3' onChange={(value) => { setCategory(value) }}>
              {categories.map(c => (
                <Option key={c._id} value={c._id}>
                  {c.name}</Option>
              ))}
            </Select>

            <div className="mb-3">
              <label className='btn btn btn-secondary col-md-12'>
                {photo ? photo.name : "upload photo"}
                <input type='file'
                  name='photo'
                  accept='image/*'
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>

            <div className="mb-3">
              {photo && (
                <div className='text-center'>
                  <img src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                    className='img img-responsive' />
                </div>
              )}
            </div>

            <div className="mb-3">
              <input type="text"
                value={name}
                placeholder='Write a title'
                className='form-control'
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <textarea
                value={description}
                placeholder='Write a description'
                className='form-control'
                onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="mb-3">
              <input type="text"
                value={price}
                placeholder='Write a price'
                className='form-control'
                onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="mb-3">
              <input type="text"
                value={label}
                placeholder='Write a label'
                className='form-control'
                onChange={(e) => setLabel(e.target.value)} />
            </div>

            <div className="mb-3">
            <input type="text"
                value={duration}
                placeholder='Duration'
                className='form-control'
                onChange={(e) => setDuration(e.target.value)} />
            </div>

            <div className="mb-3">
                <button className='btn btn-primary' onClick={handleCreate}>CREATE PRODUCT</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default CreateProduct;