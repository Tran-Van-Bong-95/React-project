import React, { useState } from 'react'
import { useGlobalVariable } from '../context'
function SearchForm() {
  const [value, setValue] = useState('')
  const { setSearchValue } = useGlobalVariable()

  function handleSubmit() {
    setSearchValue(value)
  }
  return (
    <div className='searchForm'>
      <h1>Search Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchForm
