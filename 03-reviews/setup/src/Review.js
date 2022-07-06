import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from './data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = reviews[index]

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      number = 0
    }

    if (number < 0) {
      number = reviews.length - 1
    }
    return number
  }

  const prev = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const next = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomNumber = () => {
    let random = Math.floor(Math.random(reviews.length))
    if (random === index) {
      random = random + 1
    }
    return random
  }
  return (
    <div className='review' key={id}>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>

      <div className='authour'>
        <p>{name}</p>
      </div>
      <div className='job'>
        <p>{job}</p>
      </div>

      <div className='info'>
        <p>{text}</p>
      </div>
      <span className='prev-btn' onClick={() => prev()}>
        <FaChevronLeft />
      </span>
      <span className='next-btn' onClick={() => next()}>
        <FaChevronRight />
      </span>
      <button
        className='random-btn'
        onClick={() => {
          checkNumber(randomNumber())
        }}
      ></button>
    </div>
  )
}

export default Review
