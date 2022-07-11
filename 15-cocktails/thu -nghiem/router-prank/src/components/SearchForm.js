import React, { useState } from 'react'
import { useGlobalVariable } from '../context'
function SearchForm() {
  const [value, setValue] = useState('')
  const { setSearchValue } = useGlobalVariable()

  function handleSubmit() {
    setSearchValue(value)
  }
  return (
    <div className='section search'>
      <h1>Search Form</h1>

      <div className='search-form'>
        <form onSubmit={handleSubmit} className='form-control'>
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchForm
