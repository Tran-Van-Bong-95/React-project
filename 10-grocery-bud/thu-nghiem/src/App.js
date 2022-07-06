import React, { useReducer, useEffect } from 'react'
import reducer from './reducer'
function App() {
  const getItem = () => {
    const items = localStorage.getItem('items')

    const list = JSON.parse(items)
    if (items) {
      return list
    } else {
      return []
    }
  }
  const initalValue = {
    value: '',
    list: getItem(),
    edit: false,
    editId: null,
    showAlert: { show: false, msg: '', type: '' },
  }

  const [state, dispatch] = useReducer(reducer, initalValue)

  const { value, list, edit, showAlert } = state
  function remove(id) {
    dispatch({ type: 'remove', payload: id })
    setTimeout(() => {
      dispatch({ type: 'back original status' })
    }, 2000)
  }

  function editItem(id) {
    dispatch({ type: 'edit', payload: id })
  }

  function clearAll() {
    dispatch({ type: 'remove all' })
    setTimeout(() => {
      dispatch({ type: 'back original status' })
    }, 2000)
  }

  function handleSubmit(e) {
    e.preventDefault()

    dispatch({ type: 'add', payload: value })

    setTimeout(() => {
      dispatch({ type: 'back original status' })
    }, 2000)
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(list))
  }, [list])
  return (
    <div className='app'>
      <div className='alert'>
        <p className={showAlert.type}>{showAlert.msg}</p>
      </div>
      <div className='form'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            name='text'
            value={value}
            onChange={(e) =>
              dispatch({ type: 'change value', payload: e.target.value })
            }
          />
          <button>{edit ? 'Edit' : 'Submit'}</button>
        </form>
      </div>

      <div className='list'>
        {list.length > 0 && (
          <div className='container'>
            {list.map((item) => {
              const { text, id } = item
              return (
                <div className='item' key={id}>
                  <span>{text}</span>
                  <span onClick={() => remove(id)}>delete</span>
                  <span onClick={() => editItem(id)}>edit</span>
                </div>
              )
            })}
            <button onClick={() => clearAll()} className='clear-all'>
              {' '}
              clear all{' '}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
