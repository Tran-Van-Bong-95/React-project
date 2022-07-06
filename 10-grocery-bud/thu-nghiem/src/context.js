import React, { createContext, useReducer, useContext, useEffect } from 'react'
// import reducer from './reducer'

const myContext = createContext()

const initalValue = {
  value: '',
  list: [],
  edit: false,
  editId: null,
  showAlert: { show: false, msg: '', type: '' },
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalValue)

  function remove(id) {
    dispatch({ type: 'remove', payload: id })
  }

  function add(text) {
    dispatch({ type: 'add', payload: text })
  }

  function edit(id) {
    dispatch({ type: 'edit', payload: id })
  }

  function clearALl() {
    dispatch({ type: 'remove all' })
  }

  function show(show = false, msg = '', type = '') {
    dispatch({ type: 'back original status', payload: { show, msg, type } })
  }

  useEffect(() => {
    show()
  }, [state.list])

  return (
    <myContext.Provider value={{ remove, edit, clearALl, ...state, show, add }}>
      {children}
    </myContext.Provider>
  )
}

function useGlobalVariable() {
  return useContext(myContext)
}

export { AppProvider, useGlobalVariable }
