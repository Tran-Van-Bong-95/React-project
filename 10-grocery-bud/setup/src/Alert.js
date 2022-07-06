import React, { useEffect } from 'react'

const Alert = ({ alert, list, setAlert }) => {
  useEffect(() => {
    setInterval(() => {
      setAlert(false, '', '')
    }, 3000)
  }, [list])
  const { show, msg, type } = alert
  return <div className={`alert alert-${type}`}>{msg}</div>
}
export default Alert
