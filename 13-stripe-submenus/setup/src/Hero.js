import React from 'react'
import phoneImg from './images/phone.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <article className='info'>
        <h3>Payments infrastructure for the internet</h3>
        <div className='title'>
          <p>
            Millions of companies of all sizes - from startups to Fortune 500s -
            use Stripe's software and APIs to accept payments, and manage their
            businesses online
          </p>
        </div>
        <button>Start now </button>
      </article>

      <article className='image'>
        <img src={phoneImg} />
      </article>
    </div>
  )
}

export default Hero
