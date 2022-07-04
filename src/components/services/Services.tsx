import React from 'react'
import './Services.scss'
import {ReactComponent as ServiceIcon} from '../../assets/images/service.svg'

const Services = () => {
  return (
    <section className="services">
      <header className="services__header">
        <h2 className='services__header__title'>services</h2>
      </header>
        <hr />
      <div className="container">
        <article className="services__service">
          <ServiceIcon />
          <h3 className="service__title">web design</h3>
          <p className="service__details">
            We help your business achieve outstanding solutions by applying industry standard tools and solutions
          </p>
        </article>
        <article className="services__service">
           <ServiceIcon />
          <h3 className="service__title">web design</h3>
          <p className="service__details">
            We help your business achieve outstanding solutions by applying industry standard tools and solutions
          </p>
        </article>
        <article className="services__service">
           <ServiceIcon />
          <h3 className="service__title">graphics design</h3>
          <p className="service__details">
            We help your business achieve outstanding solutions by applying industry standard tools and solutions
          </p>
        </article>
        <article className="services__service">
           <ServiceIcon />
          <h3 className="service__title">graphics design</h3>
          <p className="service__details">
            We help your business achieve outstanding solutions by applying industry standard tools and solutions
          </p>
        </article>
      </div>
    </section>
  )
}

export default Services