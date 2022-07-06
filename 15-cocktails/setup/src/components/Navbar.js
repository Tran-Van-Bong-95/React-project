import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>

        <ul>
          <li>
            {' '}
            <Link to='/'>Home</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to='/about'> About</Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
