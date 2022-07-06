import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getItem = () => {
  const list = localStorage.getItem('items')

  if (list) {
    return JSON.parse(list)
  } else {
    return []
  }
}

function App() {
  const [list, setList] = useState(getItem)
  const [value, setValue] = useState('')
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const clearList = () => {
    showAlert(true, 'clear all item successfuly', 'success')
    setList([])
  }

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
    showAlert(true, 'remove item successfuly', 'success')
  }

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id)
    setEdit(true)
    setEditId(id)
    setValue(editItem.title)
  }
  console.log(typeof list)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      // show alert empty
      showAlert(true, 'please add data', 'danger')
    } else if (value && edit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            item.title = value
          }
          return item
        })
      )

      setValue('')
      setEdit(false)
      setEditId(null)
      // show alert of edit
    } else {
      // setList
      const newItem = {
        id: new Date().getTime().toString(),
        title: value,
      }
      setList([...list, newItem])
      // show alert
      showAlert(true, 'add data success', 'success')
      setValue('')
    }
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>
      {alert.show && <Alert alert={alert} setAlert={setAlert} list={list} />}
      <form className='grocery-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          {' '}
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='submit-btn'> {edit ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <section className='grocery-container'>
          <List item={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearList} className='clear-btn'>
            clear all
          </button>
        </section>
      )}
    </section>
  )
}
export default App
