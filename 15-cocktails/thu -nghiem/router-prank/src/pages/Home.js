import React from 'react'
import SearchForm from '../components/SearchForm'
import CoocktailsList from '../components/CoocktailsList'

import { useGlobalVariable } from '../context'
function Home() {
  const { list } = useGlobalVariable()

  return (
    <main>
      <SearchForm />
      <CoocktailsList list={list} />
    </main>
  )
}

export default Home
