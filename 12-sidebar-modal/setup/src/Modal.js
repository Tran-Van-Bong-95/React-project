import React, { useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = ({ status, setStatus }) => {
  const modalRef = useRef(null)

  const handle = (e) => {
    console.log(modalRef.current)
    if (e.target === modalRef.current) {
      setStatus(false)
    }
  }

  return (
    status && (
      <div className='container' ref={modalRef} onClick={(e) => handle(e)}>
        <div className={status ? 'modal' : ''}>
          <button className='btn1' onClick={() => setStatus(false)}>
            <FaTimes />
          </button>
          <p>Modal Content</p>
        </div>
      </div>
    )
  )
}

export default Modal
