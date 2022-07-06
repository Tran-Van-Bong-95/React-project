import React, { useState, useContext, createContext } from 'react'
import data from './data'

const myContext = createContext()

const AppProvider = ({ children }) => {
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ title: '', content: [] })
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)

  function doOpenSubMenu(text, coordinate) {
    setOpenSubMenu(true)
    setLocation(coordinate)

    const sublink = data.find((item) => item.title === text)
    setPage(sublink)

    console.log(sublink)
  }

  const openSide = () => {
    setOpenSidebar(true)
  }

  const closeSide = () => {
    setOpenSidebar(false)
  }

  const closeSub = () => {
    setOpenSubMenu(false)
  }
  return (
    <myContext.Provider
      value={{
        doOpenSubMenu,
        page,
        openSidebar,
        openSubMenu,
        openSide,
        closeSide,
        closeSub,
        setOpenSidebar,
        openSidebar,
        location,
      }}
    >
      {children}
    </myContext.Provider>
  )
}

const useGlobalVariable = () => {
  return useContext(myContext)
}

export { AppProvider, useGlobalVariable }
