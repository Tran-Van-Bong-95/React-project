import React, { useRef, useEffect } from 'react'
import { useGlobalVariable } from './context'

function SubMenu() {
  const { location, page, openSubMenu } = useGlobalVariable()
  const { center, top } = location
  const { title, content } = page

  const sideRef = useRef(null)

  useEffect(() => {
    const submenu = sideRef.current
    submenu.style.position = 'absolute'
    submenu.style.left = center + 'px'
    submenu.style.top = top + 'px'
  }, [location, content, page])

  return (
    <div className={openSubMenu ? 'submenu show' : 'submenu'} ref={sideRef}>
      <div className='triangle'></div>
      {/* style vs getBoundingClientRect cung 1 luc nen xay ra loi  */}
      <div className='main'>
        <p> {title}</p>
        {content.map((item) => {
          const { icon, url, label } = item

          return (
            <>
              <span> {icon}</span>
              <span>
                <a href={url}> {label} </a>
              </span>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default SubMenu
