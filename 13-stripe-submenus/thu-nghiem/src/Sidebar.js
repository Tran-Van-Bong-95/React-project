import React from 'react'
import data from './data'
import { useGlobalVariable } from './context'
function Sidebar() {
  const { openSidebar, setOpenSidebar } = useGlobalVariable()
  return (
    <div className='sidebar'>
      {openSidebar && (
        <div className='content-sidebar'>
          <button
            onClick={() => setOpenSidebar(false)}
            className='close-sidebar'
          >
            {' '}
            X{' '}
          </button>
          <div className='main-content'>
            {data.map((item) => {
              const { title, content } = item
              return (
                <div>
                  <div> {title} </div>{' '}
                  {content.map((item) => {
                    const { icon, label, url } = item
                    return (
                      <div>
                        <span className='icon'> {icon}</span>
                        <span>
                          {' '}
                          <a href={url}> {label}</a>
                        </span>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
