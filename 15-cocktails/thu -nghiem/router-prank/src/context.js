import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react'

const myContext = createContext()

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('a')
  const [list, setList] = useState([])

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`

  const fetchAPI = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      const { drinks } = data
      const newList = drinks.map((item) => {
        const {
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = item

        const ingredients = {
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        }
        const {
          idDrink,
          strDrink,
          strCategory,
          strAlcoholic,
          strIntructions,
          strDrinkThumb,
        } = item

        return {
          id: idDrink,
          name: strDrink,
          category: strCategory,
          info: strAlcoholic,
          instructors: strIntructions,
          image: strDrinkThumb,
          ingredients: ingredients,
        }
      })
      if (!drinks) {
        return new Error('not found that data')
      }
      if (drinks.length !== 0) {
        setList(newList)
      } else {
        setList([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(true)
      console.log(error)
    }
  }, [searchValue])

  // trong mỗi lần searchValue thay đổi =>  useCallback được gọi và vì state thay đổi nên rerender.
  // Thì nếu giá trị trước đây đã từng được  sử dụng usecallback sẽ nhớ lại function instance đó và trả về function instance đó và thì component chứa function instance đó sẽ  không cần phải rerender. Còn lại sẽ render

  useEffect(() => {
    fetchAPI()
  }, [searchValue, fetchAPI])

  // useEffect được gọi sau mỗi lần rerender. useEffect () được gọi => fetchAPI () được gọi => useCallback () được gọi

  // tại sao thêm function instance fetchAPI vào là để chúng ta biết rằng fetchAPI là 1 arrow function cái sẽ tạo ra 1 new reference mới mỗi lần được rerender => fetchAPI reference luôn là 1 difference reference mỗi khi rerender điều này tạo ra 1 infinitive loop. Để tránh infinitie loop ta lồng fetchAPI vào 1 useCallback nơi mà fetchAPI is defined

  // nếu ta không lồng fetchAPI vào dependencies thì không cần dùng useCallback

  return (
    <myContext.Provider
      value={{ loading, setLoading, searchValue, setSearchValue, list }}
    >
      {children}
    </myContext.Provider>
  )
}

function useGlobalVariable() {
  return useContext(myContext)
}
export { AppProvider, useGlobalVariable }

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a
