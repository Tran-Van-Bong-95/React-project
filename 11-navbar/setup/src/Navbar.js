import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [status, setStatus] = useState(false)

  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const linksHeight = titleRef.current.getBoundingClientRect().height
    if (status) {
      sectionRef.current.style.height = `${linksHeight}px`
    } else {
      sectionRef.current.style.height = '0px'
    }
  }, [status])

  return (
    <nav>
      <section className='navbar'>
        <div className='image'>
          <img src={logo} />
          <button className='btn'>
            <FaBars onClick={() => setStatus(!status)} />
          </button>
        </div>
        <div className='title' ref={sectionRef}>
          <div ref={titleRef} className='linkRef'>
            {links.map((link) => {
              const { id, url, text } = link

              return (
                <p>
                  <span key={id}>
                    <a href={url}>{text}</a>
                  </span>
                </p>
              )
            })}
          </div>
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
      </section>
    </nav>
  )
}

export default Navbar
