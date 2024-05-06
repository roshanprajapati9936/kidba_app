import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinnerrr = ({path = "/login"}) => {
    const [count, setCount] = useState(5);

    const navigate = useNavigate()

    const location = useLocation();

    useEffect(()=>{
        const interval = setInterval(()=>{
          setCount((prevValue)=> --prevValue)
          count === 0 &&
            navigate(`${path}`
          //   ,{
          //   state : location.pathname,
          // }
          );
          return ()=> clearInterval(interval)
        },1000)
    },[count,navigate,location, path])
  return (
    <>
       <div className='spinner flex-column'> 
        <h2> Redirecting to you in {count} second</h2>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
       </div>
    </>
  );
};

export default Spinnerrr;
