import React, { useState, useEffect } from 'react'
import { useGlobalVariable } from '../context'
import Loading from './Loading'
import { Link, useParams } from 'react-router-dom'

function SinglePage() {
  const [loading, setLoading] = useState(false)
  const { setSearchValue } = useGlobalVariable()
  const { id } = useParams()
  const [items, setItems] = useState(null)

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      const data = await response.json()
      console.log(data)

      if (data.drinks) {
        const {
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strCategory,
          strGlass,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]

        //  vì data này chỉ chứa 1 phần tử nên để lấy ra ta dùng data.drinks[0]

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]

        const newCocktail = {
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          category: strCategory,
          glass: strGlass,
          instructors: strInstructions,
          ingredients,
        }

        setItems(newCocktail)
        console.log(items)
      } else {
        setItems(null)
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchAPI()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!items) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const { name, image, category, info, glass, instructors, ingredients } =
      items

    return (
      <div>
        <button>
          {' '}
          <Link to='/' onClick={() => setSearchValue('')}>
            Back Home
          </Link>
        </button>

        <h1>{name}</h1>
        <div className='container'>
          <div className='image'>
            <img src={image} alt='name' />
          </div>

          <div className='content'>
            <p>Name: {name} </p>
            <p>Category: {category}</p>
            <p>Info: {info}</p>
            <p>Glass: {glass}</p>
            <p>Instructons: {instructors}</p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SinglePage
