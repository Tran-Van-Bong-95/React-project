import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const filterCatergories = [
    'all',
    ...new Set(items.map((item) => item.category)),
  ]

  const [menu, setMenu] = useState(items)

  const filterItem = (category) => {
    if (category === 'all') {
      setMenu(items)
    } else {
      const newItems = items.filter((item) => item.category === category)

      setMenu(newItems)
    }
  }

  return (
    <div className='container'>
      <div className='title'>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <Categories categories={filterCatergories} filterItem={filterItem} />
      <Menu menu={menu} />
    </div>
  )
}

export default App
