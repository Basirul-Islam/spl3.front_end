import React from 'react';
import { Link } from 'react-router-dom';

const DefaultRout = () => (

  <div className='position-absolute top-40 start-50 translate-middle' style={{marginTop: '20em'}}>
      <div className='p-2'>
        <h1>404 - Not Found!</h1>
      </div>
    <div className='p-2' style={{marginLeft: '6em'}}>
        <h5>
            <Link to="/"> Go Home</Link>
        </h5>
    </div>
    
    
  </div>
);

export default DefaultRout;