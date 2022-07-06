import React from 'react'
import { GlobalContext } from '../context'
function SearchForm() {
  const { setSearchForm } = GlobalContext()
  const value = React.useRef('')

  const searchForm = () => {
    return setSearchForm(value.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={value}
            onChange={searchForm}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
