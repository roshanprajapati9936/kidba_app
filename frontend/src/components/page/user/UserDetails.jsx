import React from 'react'
import { useAuth } from '../../../context/auth';

const UserDetails = () => {
  const [auth] =useAuth()

  return (
    <div>
           <div className='Card w-70 text-center border userDashboard mb-28 mt-12'>
                  <h3 className='mt-4'> User Name : {auth?.user.name}</h3>
                 
                  <h3 className='mt-4'> Last Name :{auth?.user.lastName}</h3>

                  <h3 className='mt-4 '> UserName : {auth?.user.userName}</h3>
                
                  <h3 className='mt-4'> Email : {auth?.user.email}</h3>  

                                 
                </div>
    </div>
  )
}

export default UserDetails