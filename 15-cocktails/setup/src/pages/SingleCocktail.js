import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { GlobalContext } from '../context'
function SingleCocktail() {
  const [loading, setLoading] = useState(false)
  const { setSearchForm } = GlobalContext()
  const { id } = useParams()
  const [list, setList] = useState(null)

  console.log(id)

  const fetchAPI = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      console.log(data)
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
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

// nếu tên property trùng với tên value tức là tương ứng thì ta có thể viết như bên dưới . Đây là  cách viết tắt  
        const newCocktail = {
          name,   // name: name 
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }

        setList(newCocktail)
      } else {
        setList(null)
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
  // ở đây không có sự thay đổi của fetchAPI mà chỉ id thay đổi, nếu muốn dùng fetchAPI như dependency ta dùng useCallback

  if (loading) {
    return <Loading />
  }
  if (!list) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      list

    return (
      <section className='section cocktail-section'>
        <Link
          to='/'
          className='btn btn-primary'
          onClick={() => setSearchForm('')}
        >
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail
