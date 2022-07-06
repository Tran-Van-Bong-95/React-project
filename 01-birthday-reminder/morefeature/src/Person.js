import React from 'react'

function Person({ id, name, age, image, remove }) {
  return (
    <div className='person' key={id}>
      <div className='image'>
        <img src={image} />
        <div className='content'>
          <p>{name}</p>
          <p>{age} years</p>
        </div>
      </div>

      <button>learn More</button>
      <button className='remove' onClick={() => remove(id)}>
        {' '}
        X{' '}
      </button>
    </div>
  )
}

export default Person
