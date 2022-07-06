import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className='Error'>
      <p>Error </p>
      <button>
        <Link to='/'>Back to Home Page</Link>{' '}
      </button>
    </div>
  )
}

export default Error
