import React from 'react'

import { useGlobalVariable } from '../context'
import Coocktail from './Coocktail'

function CoocktailsList() {
  const { list } = useGlobalVariable()
  return (
    <div className='CoocktailList'>
      {list.map((item) => {
        return <Coocktail {...item} />
      })}
    </div>
  )
}

export default CoocktailsList
