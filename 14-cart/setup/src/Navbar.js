import React, { useContext } from 'react'
import { amountData } from './context'
function Navbar() {
  const { getTotal } = useContext(amountData)
  const { totalAmount } = getTotal()
  return (
    <div className='Navbar'>
      Reducer <span className='displat-total'> {totalAmount}</span>
    </div>
  )
}

export default Navbar
