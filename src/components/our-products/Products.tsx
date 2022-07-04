import React from 'react'
import './Products.scss'
import {ReactComponent as ProductOne} from '../../assets/images/flower1.svg'
import {ReactComponent as ProductTwo} from '../../assets/images/flower2.svg'
import { ArrowUpRight } from '../../assets/svg/Svg'

const OurProducts = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className='products__title'>our products</h2>
        <hr />
        <article className="products__product">
          <figure className="product__image">
            <ProductOne />
          </figure>
          <div className="product__details">
            <h3 className="product__details--title">
              something great about your company
            </h3>
            <p className="product__details--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, commodi. Ab libero vel quasi minima. Aspernatur soluta vel, sequi vitae nihil, tempore ipsum incidunt sit sapiente cupiditate veritatis minima similique.</p>
            <button className="product__details--btn">view <ArrowUpRight /></button>
          </div>
        </article>

        <article className="products__product">
          <div className="product__details">
            <h3 className="product__details--title">
              something great about your company
            </h3>
            <p className="product__details--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, commodi. Ab libero vel quasi minima. Aspernatur soluta vel, sequi vitae nihil, tempore ipsum incidunt sit sapiente cupiditate veritatis minima similique.</p>
            <button className="product__details--btn">view <ArrowUpRight /></button>
          </div>
          <figure className="product__image">
            <ProductTwo />
          </figure>
        </article>
      </div>
      
    </section>
  )
}

export default OurProducts