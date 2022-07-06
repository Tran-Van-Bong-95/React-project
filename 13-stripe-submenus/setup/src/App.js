import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <Navbar></Navbar>
      </div>

      <div className='hero'>
        <Hero></Hero>
      </div>
    </div>
  )
}

export default App
