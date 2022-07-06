import React from 'react'
import { Link } from 'react-router-dom'
function Coocktail({ image, id, category, name, info }) {
  return (
    <div key={id} className='Coocktail'>
      <div className='image'>
        <img src={image} alt='name' />
      </div>
      <div className='main-content'>
        <p>{name}</p>
        <p>{info}</p>
        <p>{category}</p>
      </div>
      <button>
        {' '}
        <Link to={`/singlePage/${id}`}> details</Link>
      </button>
    </div>
  )
}

export default Coocktail
