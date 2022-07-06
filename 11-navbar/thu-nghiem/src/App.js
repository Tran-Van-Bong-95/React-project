import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'
import logo from './logo.svg'

function App() {
  const navbarRef = useRef(null)
  const sectionRef = useRef(null)

  const [status, setStatus] = useState(false)

  useEffect(() => {
    let sectionHeight = sectionRef.current.getBoundingClientRect().height
    console.log(sectionHeight)
    if (status) {
      navbarRef.current.style.height = `${sectionHeight}px`
    } else {
      navbarRef.current.style.height = '0px'
    }
    // get height of an element:  element. getBoundingClientRect().height
  }, [status])

  return (
    <div className='navbar'>
      <div className='title'>
        {' '}
        <img src={logo} />
        <button className='absolute-icon'>
          <FaBars onClick={() => setStatus(!status)} />{' '}
        </button>
      </div>

      <div className={`sections ${status ? 'all-over' : ''}`} ref={navbarRef}>
        <ul className='container-items' ref={sectionRef}>
          {links.map((link) => {
            const { id, url, text } = link

            return (
              <li>
                <span key={id}>
                  <a href={url}>{text}</a>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='icon'>
        {social.map((item) => {
          const { id, url, icon } = item
          return (
            <span key={id}>
              <a href={url}>
                {' '}
                <span> {icon}</span>
              </a>
            </span>
          )
        })}
      </div>
    </div>
  )
}
export default App

// bài này cái khó là CSS liên quan đến cấp bậc trong CSS
