import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-center'>
        <a>
          <img src={logo} alt='logo' />
        </a>

        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='./about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
