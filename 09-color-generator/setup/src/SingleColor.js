import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const timecount = setInterval(() => {
      setStatus(false)
    }, 3000)

    return () => clearInterval(timecount)
  }, [status])
  const color = rgb.join(',')
  const bcg = rgbToHex(...rgb)

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      key={index}
      style={{ backgroundColor: `rgb(${color})` }}
      onClick={() => {
        setStatus(true)
        navigator.clipboard.writeText(`#` + hexColor)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
      {status && <p className='alert'>COPY CLIPBORD</p>}
    </article>
  )
}

export default SingleColor
