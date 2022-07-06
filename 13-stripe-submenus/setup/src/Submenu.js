import React, { useState, useRef, useEffect } from 'react'

const Submenu = ({ page, links }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div
      className='submenu'
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className='title'>
        <span>{page}</span>
        {isShow && <div className='decoration'></div>}
      </div>
      {isShow && (
        <div className='container1'>
          {links.map((link) => {
            const { label, icon, url } = link
            return (
              <div className='info'>
                <span>{icon}</span>
                <span>
                  <a href={url}>{label}</a>
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Submenu
