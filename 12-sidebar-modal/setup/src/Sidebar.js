import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { myVariable } from './context/ContextComponent'

const Sidebar = () => {
  // CONTEXT
  const { status1, setStatus1 } = useContext(myVariable)
  return (
    <div className={`sidebar ${status1 ? 'showSidebar' : 'hideSidebar'}   `}>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <button onClick={() => setStatus1(false)}>
          <FaTimes />
        </button>
      </div>

      <div className='links'>
        {links.map((item) => {
          const { id, url, text, icon } = item
          return (
            <div key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </div>
          )
        })}
      </div>

      <div className='social'>
        {social.map((item) => {
          const { id, url, icon } = item
          return (
            <div key={id}>
              <a href={url}>{icon}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
