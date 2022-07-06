import React from 'react'
import { useGlobalVariable } from './context'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  const { doOpenSubMenu, setOpenSidebar, openSidebar } = useGlobalVariable()

  const displaySubmenu = (e) => {
    const text = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2

    const top = tempBtn.bottom - 3
    doOpenSubMenu(text, { center, top })
  }

  return (
    <div className='navbar'>
      <div className='image'>
        <img src={logo} alt='title' />
      </div>

      <ul className='content'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            developers
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>

      <div className='sign-in'>
        <button>sign in</button>
        <span className='absolute' onClick={() => setOpenSidebar(!openSidebar)}>
          {' '}
          <FaBars />
        </span>
      </div>
    </div>
  )
}

export default Navbar
