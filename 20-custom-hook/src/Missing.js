import React from 'react'
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='Missing container p-2 mt-3'>
       <div className="row justify-content-center">
        <h1>Page Not Found</h1>
        <p>Sorry 😭💔</p>
        <p>
          <Link to="/">Return to Homepage</Link>
        </p>
        </div>
    </div>
  )
}

export default Missing