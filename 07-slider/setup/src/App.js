import React, { useReducer } from 'react'
import data from './data.js'
import reducer from './reducer.js'

function App() {
  const initalValue = {
    counter: 1,
  }
  const slides = data
  const [state, dispatch] = useReducer(reducer, initalValue)

  function preV() {
    dispatch({ type: 'prev', payload: 1 })
  }

  function nextV() {
    dispatch({ type: 'next', payload: 1 })
  }

  const { counter } = state

  console.log(counter)

  return (
    <div className='app'>
      <div className='title'> / Reviews </div>
      <div className='container'>
        {slides.map((item, index) => {
          const { id, image, title, quote, name } = item

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
                <p> {name} </p>
                <p> {title} </p>
                <p> {quote} </p>
              </div>
            </div>
          )
        })}
        <button className='prevBtn' onClick={preV}>
          1
        </button>
        <button className='nextBtn' onClick={nextV}>
          2
        </button>
      </div>
    </div>
  )
}

export default App

/*
Remember the cases we not use state 
1. is it passed in from a parent via props
2. Does it remain unchanged over time ?
3. Can you compute it based on any other state or props in your components 
*/
