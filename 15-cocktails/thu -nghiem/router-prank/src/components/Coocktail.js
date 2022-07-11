import React from 'react'
import { Link } from 'react-router-dom'
function Coocktail({ image, id, category, name, info }) {
  return (
    <div key={id} className='coocktail'>
      <div className='image-container'>
        <img src={image} alt='name' />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{info}</h4>
        <p>{category}</p>
        <button className='btn btn-primary btn-details'>
          {' '}
          <Link to={`/singlePage/${id}`}> details</Link>
        </button>
      </div>
    </div>
  )
}

export default Coocktail
