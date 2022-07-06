import React, { useState, useEffect, createContext } from 'react'

const url = 'https://course-api.com/react-useReducer-cart-project'

const amountData = createContext()

const getItem = () => {
  const list = localStorage.getItem('phones')

  if (list) {
    return JSON.parse(list)
  } else {
    return []
  }
}

function AppContext({ children }) {
  const [list, setList] = useState(getItem)

  const remove = (id) => {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
  }

  // const increase = (id) => {
  //   const newList = list.map((item) => {
  //     if (item.id === id) {
  //       item.amount += 1
  //     }
  //     return item
  //   })
  //   setList(newList)
  // }

  // const decrease = (id) => {
  //   const newList = list.map((item) => {
  //     if (item.id === id) {
  //       item.amount -= 1
  //     }

  //     return item
  //   })
  //   setList(newList)
  // }

  const toggleButton = (type, id) => {
    if (type === 'increase') {
      const newList = list.map((item) => {
        if (item.id === id) {
          item.amount += 1
        }
        return item
      })
      setList(newList)
    }

    if (type === 'decrease') {
      const newList = list
        .map((item) => {
          if (item.id === id) {
            item.amount -= 1
          }

          return item
        })
        .filter((item) => item.amount !== 0)
      setList(newList)
    }
  }
  const clearAll = () => {
    setList([])
  }

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    if (list.length === 0) {
      setList(data)
    }
  }

  useEffect(() => {
    console.log('useEffect')
    fetchData()
  }, [url])

  useEffect(() => {
    localStorage.setItem('phones', JSON.stringify(list))
  }, [list])

  function getTotal() {
    let { totalAmount, priceTotal } = list.reduce(
      (total, value) => {
        const { amount, price } = value
        total.totalAmount += amount
        total.priceTotal += price * amount
        return total
      },

      {
        totalAmount: 0,
        priceTotal: 0,
      }
    )

    priceTotal = parseFloat(priceTotal.toFixed(2))
    return { totalAmount, priceTotal }
  }
  // const total = list.reduce((total, value) => {
  //   return total + value.amount
  // }, 0)

  // const priceTotal = list.reduce((total, value) => {
  //   return total + Number(value.price) * value.amount
  // }, 0)

  return (
    <amountData.Provider
      value={{ list, getTotal, clearAll, toggleButton, remove }}
    >
      {children}
    </amountData.Provider>
  )
}

export { AppContext, amountData }
