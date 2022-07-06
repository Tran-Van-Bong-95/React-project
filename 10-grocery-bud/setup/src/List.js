import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
// import Alert from './Alert'
const List = ({ item, removeItem, editItem }) => {
  return (
    <>
      {item.map((a) => {
        const { id, title } = a
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn'>
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
