// import React from 'react'
// import { useState, useEffect } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import axios from 'axios'
// import { useAuth } from '../../../context/auth'

// const Orders = () => {
//    const [order, setOrders] = useState([]);
//    const [auth, setAuth] = useAuth()

//    const getOrders = async () => {
//     try {
//       const token = localStorage.getItem("token")
      
//       const { data } = await axios.get("http://localhost:8002/get-orderss",
//         {
//           headers: {
//             'Authorization': token
//           },
//         })
//       setOrders(data);

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     if (auth?.token) getOrders()
//   }, [auth?.token])
//   return (
//     <>
//        <Container>
//         <h1 className='text-center'> All Orders</h1>
//         <p>
//           {order?.map((o, i) => {
//             return (
//               <div className='border shadow'>
//                 <table className='table'>
//                   <thead>
//                     <tr>
//                       <td scope='col'>#</td>
//                       <td scope='col'>Status</td>
//                       <td scope='col'>Buyer</td>
//                       <td scope='col'>Date</td>
//                       <td scope='col'>Payment</td>
//                       <td scope='col'>Quantity</td>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     <tr>
//                       <th> {i + 1}</th>
//                       <th> {o?.status}</th>
//                       <th> {o?.buyer?.name}</th>
//                       <th>  </th> 
//                       <th> {o?.payment?.success ? "Success" : "Failed"}</th>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <Container>
//                   <Row>
//                     <Col md={12}>
//                       {o?.popular?.map((p,i) => {
                       
//                         return (
//                           <Row>
//                             <Col md={6}>
//                               <div className='mb-6'>
//                                 <img src={`http://localhost:8002/uploads/popularclasses/${p.image}`} />
//                               </div>

//                             </Col>
//                             <Col md={6}>
//                               <div className='border mb-6 p-4'>
//                                 <h5> {p.title}</h5>
//                                 <h5> {p.description} </h5>
//                                 <h5> Fees : {p.price}</h5>
//                                 <h5> Duration : {p.duration}</h5>
//                                 <h5>  {p.label}</h5>
//                               </div>
//                             </Col>
//                           </Row>
//                         )
//                       })}
//                     </Col>
//                   </Row>
//                 </Container>
//               </div>

//             )
//           })}
//         </p>
//       </Container> 
//     </>
//   )
// }

// export default Orders