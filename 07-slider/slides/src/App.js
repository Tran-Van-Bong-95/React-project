import React, { useState } from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import data from './data'

function App() {
  const [slides, setSlides] = useState(data)

  const [counter, setCounter] = useState(0)

  function preV() {
    let number = counter - 1

    setCounter(() => {
      if (number < 0) {
        return slides.length - 1
      }
      return number
    })
  }

  function nextV() {
    let number = counter + 1

    setCounter(() => {
      if (number > slides.length - 1) {
        return 0
      }

      return number
    })
  }

  console.log(counter)
  return (
    <div className='app'>
      <div className='title'>
        {' '}
        <h1>/ Reviews</h1>{' '}
      </div>
      <div className='container'>
        {slides.map((item, index) => {
          const { id, image, name, title, quote } = item
          return (
            <div
              className={`slider ${
                counter - index == 1 ||
                (counter == 0 && index == slides.length - 1)
                  ? 'prev'
                  : index - counter === 1 ||
                    (counter == slides.length - 1 && index == 0)
                  ? 'next'
                  : index - counter == 0
                  ? 'current'
                  : ''
              }`}
              key={id}
            >
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <p> {title} </p>
                <p> {name} </p>
                <p> {quote} </p>
              </div>
            </div>
          )
        })}
        <button className='prevBtn' onClick={() => preV()}>
          {' '}
          <FaLessThan />{' '}
        </button>
        <button className='nextBtn' onClick={() => nextV()}>
          {' '}
          <FaGreaterThan />{' '}
        </button>
      </div>
    </div>
  )
}

export default App
