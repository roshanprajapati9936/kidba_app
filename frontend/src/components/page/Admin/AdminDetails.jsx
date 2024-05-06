import React from 'react'
import { useAuth } from '../../../context/auth';

const AdminDetails = () => {
    const [auth] = useAuth()
    return (
        <div>
            <div className='Card w-70 text-center border userDashboard mb-28 mt-12'>

                <h2> Admin Name : {auth?.user?.name}</h2>
                <h2> Email: {auth?.user?.email}</h2>

            </div>
        </div>
    )
}

export default AdminDetails;