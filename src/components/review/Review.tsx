import React from 'react'
import './Review.scss'
import ReviewLogic from './ReviewLogic'
import { ReactComponent as FullStar } from '../../assets/images/full-star.svg'
import { ReactComponent as HalfStar } from '../../assets/images/half-star.svg'


const Review = () => {
  return (
    <section className="review">
      <header className="review__header">
        <h2 className='review__header__title'>review</h2>
        <p className="review__header__text">
          We have an impressive collection of oustanding products for you and your family.
        </p>
        <figure className="review__header__rating">
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <HalfStar />
        </figure>
      </header>
      <ReviewLogic />
    </section>
  )
}

export default Review