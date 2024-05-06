import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { notification } from 'antd'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Select } from 'antd'
import AdminMenu from './AdminMenu'
const { Option } = Select


const UpdateProducts = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [label, setLabel] = useState("")
  const [duration, setDuration] = useState("")
  const [photo, setPhoto] = useState("")
  const [avatar, setAvatar] = useState("")
  const [path, setPath] = useState("")

  // console.log("aaaaa",categories)

  // get single products
  const getSingleData = async () => {
    try {
      const token = localStorage.getItem("token")
      await axios.get(`http://localhost:8002/get-popularclasses/${params.id}`,
        {
          headers: {
            'Authorization': token
          }
        }
      ).then((data) => {
        console.log("ddddddd", data)
        setCategory(data.data.data.category)
        setName(data.data.data.title)
        setDescription(data.data.data.description)
        setPrice(data.data.data.price)
        setLabel(data.data.data.label)
        setDuration(data.data.data.duration)
        setAvatar(data.data.data.image);
        setPath(data.data.filepath);
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleData();
  }, [])

  useEffect(() => {
    setAvatar(photo);
  }, [photo])

  // get all category
  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("http://localhost:8002/get-catergories",
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
        notification.error({ message: "Something went wrong while getting all category" })
      })
  }, [])

  // update product
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData()
      productData.append("name", name)
      productData.append("description", description)
      productData.append("price", price)
      productData.append("category", category)
      productData.append("label", label)
      productData.append("duration", duration)
      productData.append("avatar", photo)

      const token = localStorage.getItem("token")
      axios.put(`http://localhost:8002/update-popularclasses/${params.id}`, productData,
        {
          headers: {
            'Authorization': token
          }
        })

      notification.success({ message: "Product Updated Successfully" });
      navigate('/dashboard/admin/products')

    } catch (error) {
      console.log(error)
    }
  }

  // delete product
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      axios.delete(`http://localhost:8002/delete-popularclasses/${params.id}`, {
        headers: {
          Authorization: token,
        },
      });
      notification.success({ message: 'Deleted Product Successfully' });
      navigate('/dashboard/admin/products')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className='mt-20'>
      <Row>
        <Col md={3}>
          <AdminMenu />
        </Col>


        <Col md={9}>
          <h1> Update Products </h1>
          <div className="m-1 w-108">
            <select bordered={false}
              size='large'
              placeholder='Select a category'
              showSearch
              value={category}
              className='form-select mb-3'
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            >
              {
                categories &&
                categories.map((c) => {
                  return (
                    <option key={c._id} value={c._id} selected={category == c._id ? true : false}>
                      {c.categories_name}
                    </option>
                  )
                })
              }

            </select>
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
              {photo ? (
                <div className='text-center'>
                  <img src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    className='img img-responsive h-[100px]' />
                </div>
              ) : (

                <div className='text-center'>
                  <img src={path + "/" + avatar}
                    alt="product_photo"
                    height={"100px"}
                    className='img img-responsive h-[100px]' />
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
              <button className='btn btn-primary' onClick={handleUpdate}>UPDATE PRODUCT</button>
              <button className='btn btn-danger ml-3' onClick={handleDelete}>DELETE PRODUCT</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default UpdateProducts