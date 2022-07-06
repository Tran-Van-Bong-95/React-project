import React, { createContext, useState } from 'react'
const myVariable = createContext()

function ContextComponent({ children }) {
  const [status1, setStatus1] = useState(false)

  return (
    <myVariable.Provider value={{ status1, setStatus1 }}>
      {children}
    </myVariable.Provider>
  )
}

export { ContextComponent, myVariable }
