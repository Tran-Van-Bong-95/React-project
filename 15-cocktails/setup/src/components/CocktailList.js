import React from 'react'
import Cocktail from './Cocktail'
import { GlobalContext } from '../context'
import Loading from './Loading'
const CocktailList = () => {
  const { list, loading } = GlobalContext()

  if (loading) {
    return <Loading />
  }
  if (list.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }

  // const newList = list.map((item) => <Cocktail {...item} key={item.id} />)

  // console.log(newList)

  return (
    <div className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {list.map((item) => (
          <Cocktail {...item} key={item.id} />
        ))}
        {/* {newList} */}
      </div>
    </div>
  )
}

export default CocktailList
