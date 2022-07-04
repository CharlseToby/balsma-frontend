import React from 'react'
import './Facts.scss'
import Card from '../card/Card'
import FactsArray from './FactsLogic'

export const FactsAndFigures = () => {
  return (
    <section className="facts">
      <h2 className='facts__title'>facts and figures</h2>
      <hr />
      <FactsArray />
    </section>
  )
}

export default FactsAndFigures
