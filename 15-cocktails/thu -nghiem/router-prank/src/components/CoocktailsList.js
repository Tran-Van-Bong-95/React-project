import React from 'react'

import { useGlobalVariable } from '../context'
import Coocktail from './Coocktail'

function CoocktailsList() {
  const { list } = useGlobalVariable()
  return (
    <div className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {list.map((item) => {
          return <Coocktail {...item} />
        })}
      </div>
    </div>
  )
}

export default CoocktailsList
