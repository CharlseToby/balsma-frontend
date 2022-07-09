import React from 'react'
import './Gallery.scss'
import image1 from '../../assets/images/gallery-image1.png'
import image2 from '../../assets/images/gallery-image2.png'
import image3 from '../../assets/images/gallery-image3.png'
import image4 from '../../assets/images/gallery-image4.png'
import image5 from '../../assets/images/gallery-image5.png'
import Carousel from '../carousel/Carousel'

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image4,
  image2,
  image1,
  image3,
]

const galleryArray = imageArray.map((image: string) => {
  return (
    <picture className="carousel__item">
      <img src={image} alt="flower in the gallery" />
    </picture>
  )
});

const Gallery = () => {
  return (
    <section className="gallery">
      <header className="gallery__header">
        <h2 className="gallery__header__title">
          gallery
        </h2>
        <hr />
      </header>
      <Carousel slideCount={2.4} itemsArray={galleryArray} autoSlide={true} goRight={false} />
      <Carousel slideCount={2.4} itemsArray={galleryArray} autoSlide={true} goRight={true} />
    </section>
  )
}

export default Gallery