import { Button} from 'react-bootstrap'
import React from 'react'
import { SiNike } from "react-icons/si";

const About = () => {
  return (
    <>
     <div className='aboutImg-1'>
        <div className='aboutMain'>
        <h2 className='text-6xl bold w-90 text-white font-medium'> About Kindergarten School</h2>
        <p>Enthusastcay deminate competitive oportunities through transparent and Compelngly seize andvirschemas through intermandated.</p>
        <p>Enthusastcay deminate competitive oportunities through transparent and action Compelngly seize andvirschemas through intermandated creative adiea sources Enthusiasticay plagiarize clientcentered and relationships.</p>
           <div className='d-flex'>
                <SiNike /> <p className='ml-2'>Donec facilisis aliquet ultrices. Cras ut ultricies.</p>
           </div>
           <div className='d-flex'>
                <SiNike /> <p className='ml-2'>Fusce euismod at massa eget blandit quisque.</p>
           </div>
              
           <Button className='btn-1' href=''> ADMISSION NOW </Button>
             
        </div>
     </div>
    
    </>
  )
}

export default About