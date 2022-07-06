import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(true)
  return (
    <div className='single-tour' key={id}>
      <img src={image} />
      <footer>
        <div className='tour-info'>
          <span>{name}</span>
          <span className='tour-price'>$ {price}</span>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'showLess' : 'readMore'}
          </button>
        </p>

        <button
          type='button'
          onClick={() => removeTour(id)}
          className='delete-btn'
        >
          Not interested
        </button>
      </footer>
    </div>
  )
}

export default Tour
