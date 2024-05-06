import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const iconArray = [
  {
    icon: <FaFacebookF className='hidev-1'/>
  },
  {
    icon: <FaTwitter className='hidev-1'/>
  },
  {
    icon: <FaLinkedinIn className='hidev-1'/>
  },
  {
    icon: <IoLogoInstagram className='hidev-1'/>
  },
]
const Header = () => {
  return (
    <>
      <div className='parent-header' >

        <div className='hdev-1'>

          <div className='hcdev-1'>
          <CiClock2/> <li className='ml-2'> Our Opening Hours Mon-Fri </li>
          </div>

          <div className='hcdev-2'>
          <IoIosCall/>  <li className='ml-2'> +800-123-4567-6587 </li>
          </div>

          <div className='hcdev-3'>
          <CiLocationOn/>  <li className='ml-2'>  103 Road Kagpur , Dhaka</li>
          </div>
        </div>

        <div className='hdev-2'>
          {
           iconArray && iconArray.map((item)=>(
                <li><a href="" style={{color:"white"}}> {item.icon} </a></li>
            ))
          }
        </div>
      </div> 
    </>
   
  )
}
export default Header;