import React, {
  useEffect,
  useState,
  createContext,
  useCallback,
  useContext,
} from 'react'

const MyContext = createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function AppProvider({ children }) {
  const [list, setList] = useState([])
  const [searchForm, setSearchForm] = useState('a')
  const [loading, setLoading] = useState(true)

  const fetchAPI = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchForm}`)
      const data = await response.json()

      const { drinks } = data

      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setLoading(false)
        setList(newDrinks)
      } else {
        setList([])
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }, [searchForm])

  useEffect(() => {
    fetchAPI()
  }, [searchForm, fetchAPI])

  // ở đây ta phải thêm callback fetchAPI trong useEffect vì ta dùng useCallback

  return (
    <MyContext.Provider
      value={{
        loading,
        list,
        setSearchForm,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export function GlobalContext() {
  return useContext(MyContext)
}
export { AppProvider }

//  tại sao trong bài này ta dùng useCallback vì mỗi lần rerender vì
// sự thay đổi của searchForm thì lại fetchDrinks lại được gọi và nó sẽ thực hiện
// lại từ đầu những item đã tải trước đó vì vậy không đạt hiệu quả tối ưu
//  ở đây ta sẽ dùng useCallback lên hàm callback này hàm này sẽ chỉ chạy
// khi searchForm thay đổi Còn không thay đổi nó sẽ không cần load lại cái vốn đã được nhớ
// Tức là các item đã load trước đó rồi sẽ được nhớ và lần sau khi mà
// searchForm thay đổi các item này sẽ không load lại nữa mà sẽ chỉ
// fetch để load cái mới

// (returns a memorized callback when the dependency values deps do not change
// between renderings. (memoized here refers to caching the object for future
// use).
// )
