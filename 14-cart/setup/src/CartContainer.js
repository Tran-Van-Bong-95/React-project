import React, { useContext } from 'react'
import { amountData } from './context'
import CartItem from './CartItem'
function CartContainer() {
  //  CONTEXT
  const { list, getTotal, clearAll, toggleButton, remove } =
    useContext(amountData)

  const { priceTotal } = getTotal()

  if (list.length) {
    return (
      <div className='cartContainer'>
        {list.map((item) => {
          const { id, title, img, amount, price } = item
          return (
            <CartItem
              id={id}
              title={title}
              img={img}
              amount={amount}
              price={price}
              toggleButton={toggleButton}
              remove={remove}
              price={price}
            />
          )
        })}

        <div className='total'>
          {' '}
          Total Price<span> {priceTotal} $ </span>{' '}
        </div>
        <div className='clearAll'>
          <button onClick={() => clearAll()}> clear All </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='refresh'>
        <button onClick={() => window.location.reload()}> refresh </button>
      </div>
    )
  }
}

export default CartContainer
/*

In most/all web browsers, location.reload(), for example, is an alias for its fully-qualified name window.location.reload().

You can test it in your browser by opening the dev tools pane console and typing in:

location.reload()
and

window.location.reload()
Both will trigger the page to refresh.

The ES Lint warning is effectively warning you that your code is relying on this alias, so it is plausible that in the future, the code could break suddenly, maybe if the alias became deprecated or some part of your tool chain operated in a manner that required usage of window.

In JavaScript, weird things can happen due to variable-shadowing and closure. It is possible that a location reference could be declared after and then such a reference to something like location.reload() would break with a message such as "no such method reload". This would be less likely to occur if you called the fully-qualified name window.location.reload().
*/
