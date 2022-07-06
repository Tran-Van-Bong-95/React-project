import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import data from './data'
import Submenu from './Submenu'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='image'>
        <img src={logo} />
      </div>
      <div className='info-title'>
        {data.map((sublink) => (
          <Submenu {...sublink} />
        ))}
      </div>

      <div className='icon'>
        <button className='btn'>
          <FaBars />
        </button>
        <button>sign in </button>
      </div>
    </div>
  )
}

export default Navbar
