import data from './data'
import React, { createContext, useState, useContext, useEffect } from 'react'

const myContext = createContext()

export function AppProvider({ children }) {
  const [list, setList] = useState(data)
  const [counter, setCounter] = useState(list.length)

  function remove(id) {
    const newData = list.filter((item) => item.id !== id)
    setList(newData)
  }

  function clearAll() {
    setList([])
    setCounter(0)
  }

  function refresh() {
    setList(data)
  }
  useEffect(() => {
    setCounter(list.length)
  }, [list])

  return (
    <myContext.Provider value={{ counter, remove, list, clearAll, refresh }}>
      {children}
    </myContext.Provider>
  )
}

export function useGlobal() {
  return useContext(myContext)
}
