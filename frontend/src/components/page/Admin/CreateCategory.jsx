import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import axios from 'axios'
import CategoryForm from '../../form/CategoryForm'
import { Modal } from 'antd'
import {notification} from 'antd'
import AdminMenu from './AdminMenu'

const CreateCategory = () => {
   const [categories, setCategories] = useState([])
   const [name, setName] = useState("")
   const [load, setLoad] = useState(0)
   const [visible, setVisible] = useState(false)
   const [selected, setSelected] =useState(null)
   const [updatedName , setUpdatedName] = useState("")

   // handle Form
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const token = localStorage.getItem("token")
         //console.log("rrr",token);
         const  data  = await axios.post("http://localhost:8002/create-category", { name },
            {
               headers: {
                  'Authorization': token
               }
            }
         );
         setLoad(load +1);
         console.log(data.data);
         if (data?.data?.message == "created Successfully") {
             notification.success({message:" Created Successfully"});
         } else {
            notification.error({message:"Error while creating"});
         }
      } catch (error) {
         console.log(error);
         notification.error({message:"Something is wrong in input form"});
      }
   }
   // get  all category
   useEffect(() => {
      axios.get("http://localhost:8002/category"
      )
         .then((res) => {

            setCategories(res.data.category)
         })
         .then((err) => {
            console.log(err)
         })
   }, [load])
 
   // upadate category
   const handleUpdate = async(e)=>{
      e.preventDefault()
      try{
         const token = localStorage.getItem("token")
       const {data} = await axios.put(`http://localhost:8002/update-category/${selected._id}`,
      {name:updatedName} ,
      {
         headers: {
            'Authorization': token
         }
      })
      if(data.success){
         setLoad(load +1);
          notification.success({message:data.message})
         setSelected(null)
         setUpdatedName("")
         setVisible(false)
      }else{
         notification.error({message:data.message})
      }
      }catch(error){
         console.log(error)
      }
   }
   
   // delete category
   const handleDelete = async(id)=>{
      console.log("eeeeeeeeee",id)
      try{
           const token = localStorage.getItem("token")
         const {data} = await axios.delete(`http://localhost:8002/deletee-category/${id}`,  
        {
           headers: {
              'Authorization': token
           }
        })
        if(data.success){
          setLoad(load +1);
            notification.success({message:data.message})
        }else{
            notification.error({message:data.message})
        }
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
               <h1>Manage Category</h1>
               <div className="p3">
                  <CategoryForm
                     handleSubmit={handleSubmit}
                     value={name}
                     setValue={setName} />
               </div>
               <div>
                  <Table>
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           categories &&
                           categories?.map((elem, ind) => {
                              return (
                                 <tr key={ind}>
                                    <td>{elem.name}</td>
                                    <td>
                                       <Button className='btn btn-primary' onClick={() => {setVisible(true); 
                                       setUpdatedName(elem.name)
                                       setSelected(elem)
                                       }}
                                       >
                                          Edit</Button>
                                       <Button className='btn btn-danger ml-4 '
                                       onClick={()=> {handleDelete(elem._id)}}
                                       >Delete</Button>
                                    </td>
                                 </tr>
                              )
                           })
                        }
                     </tbody>
                  </Table>
                  <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
                         <CategoryForm value={updatedName} setValue={setUpdatedName} 
                         handleSubmit={handleUpdate}/> 
                  </Modal>

               </div>
            </Col>
         </Row>
      </Container>
   )
}
export default CreateCategory
