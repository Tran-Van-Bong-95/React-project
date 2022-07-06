import React from 'react'

function CartItem({ id, img, amount, price, title, remove, toggleButton }) {
  return (
    <div className='CartItem' key={id}>
      <div className='image'>
        <img src={img} alt={title} />
        <div className='info'>
          <p>{title}</p>
          <br />
          <p>${price}</p>
          <br />
          <button onClick={() => remove(id)}> remove </button>
        </div>
      </div>

      <div className='amount'>
        <button onClick={() => toggleButton('increase', id)}> + </button>
        {amount}
        <button onClick={() => toggleButton('decrease', id)}>
          {' '}
          {/* vì thực hiện click xong nó mới trừ, tức là click nó mới trừ 1 nên ta sẽ để amount - 1 xem như nó sẽ gọi remove() mà không cần click 1 lần nữa  */}
          -
        </button>
      </div>
    </div>
  )
}

export default CartItem
