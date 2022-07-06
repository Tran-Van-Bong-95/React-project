import React from 'react'

const Categories = ({ categories, filterItem }) => {
  return (
    <div className='categories'>
      {categories.map((categorie) => (
        <button className='category' onClick={() => filterItem(categorie)}>
          {categorie}
        </button>
      ))}
    </div>
  )
}

export default Categories

// nhớ là return chỉ trả về 1 giá trị
