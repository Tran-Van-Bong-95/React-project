import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  function handleSubmit(e) {
    e.preventDefault()
    try {
      let colors = new Values(value).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  console.log(list)
  return (
    <div>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='#f15025'
          />
          <button type='submit' className='btn'>
            {' '}
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => (
          <SingleColor {...color} index={index} hexColor={color.hex} />
        ))}
      </section>
    </div>
  )
}

export default App
