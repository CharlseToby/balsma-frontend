import React from 'react'
import Carousel from '../carousel/Carousel'
import reviewer from '../../assets/images/reviewer.png'

type reviewItem = {
  name: string,
  work: string,
  image: string,
  review: string,
}

const reviewData = [
  {
    name: "janet jason",
    work: "CEO Inspiro",
    image: reviewer,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet? Similique ipsam temporibus numquam quisquam magni inventore quae id, veritatis blanditiis quam quos voluptas laudantium odio doloremque exercitationem. Eligendi"
  },
  {
    name: "janet logan",
    work: "CEO Inspiro",
    image: reviewer,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet? Similique ipsam temporibus numquam quisquam magni inventore quae id, veritatis blanditiis quam quos voluptas laudantium odio doloremque exercitationem. Eligendi"
  },
  {
    name: "manet logan",
    work: "CEO Inspiro",
    image: reviewer,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet? Similique ipsam temporibus numquam quisquam magni inventore quae id, veritatis blanditiis quam quos voluptas laudantium odio doloremque exercitationem. Eligendi"
  }
]

const reviewArray = reviewData.map((item: reviewItem) => {
  const { name, work, image, review } = item;

  return (
    <article className="carousel__item" key={name + work}>
      <p className="carousel__item__review">
        {review}
      </p>
      <figure className="carousel__item__reviewer">
        <img src={image} alt={name + work} />
        <figcaption className="carousel__item__reviewer__about">
          <p className="reviewer-name">{name}</p>
          <p className="reviewer-work">{work}</p>
        </figcaption>
      </figure>
    </article>
  )
})

const ReviewLogic = () => {
  return (
    <>
      <Carousel slideCount={1} goRight={false} itemsArray={reviewArray}/>
    </>
  )
}

export default ReviewLogic