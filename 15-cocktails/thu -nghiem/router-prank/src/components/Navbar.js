import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='./about'>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
