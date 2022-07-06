import React, { useState } from 'react'
import Modal from './Modal'

function Main() {
  const [status, setStatus] = useState(false)

  return (
    <div className='main'>
      <button className='btn' onClick={() => setStatus(true)}>
        modal
      </button>

      <Modal status={status} setStatus={setStatus} />
    </div>
  )
}

export default Main
