import React, { useState, useEffect } from 'react'
import data from './data'
function App() {
  const [value, setValue] = useState(0)
  const [item, setItem] = useState([])
  let amount = value

  useEffect(() => {
    if (amount < 0) {
      amount = 0
    }

    if (amount > 8) {
      amount = 8
    }
  }, [value])

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='container'>
      <section className='section-center'>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <input
              type='number'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type='button'
              onClick={() => setItem(data.slice(0, amount))}
              className='btn'
            >
              Generate
            </button>
          </form>
        </div>
        <div>
          {item.map((a) => (
            <p className='result'>{a} </p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
