import React from 'react'

const Menu = ({ menu }) => {
  return (
    <section className='section-center'>
      {menu.map((item) => {
        const { id, title, category, price, img, desc } = item
        return (
          <article key={id} className='article'>
            <div className='image'>
              <img src={img} alt={category} />
            </div>
            <div className='info'>
              <div className='title'>
                <span>{title}</span>
                <span>${price}</span>
              </div>
              <div>
                <p>{desc}</p>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Menu
