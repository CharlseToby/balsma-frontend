import React from 'react'
import useWindowDimensions from '../../hooks/useWindowsDimensions';
import Card from '../card/Card'

type fact = {
  name: string,
  amount: number,
  id: number
};

// type factsLogicProp = fact[];

const factsArray = [
  {
    name: "client",
    amount: 15,
    id: 1
  },
  {
    name: "awards",
    amount: 1000,
    id: 2
  },
  {
    name: "projects",
    amount: 10000,
    id: 3
  },

]

const FactsArray = () => {
  const { width } = useWindowDimensions();
  let cardWidth = '289px';
  let cardHeight = '289px';

  if (width <= 800 ) {
    cardHeight = '237px';
    cardWidth = '237px';
  }
  return (
    <div className='facts__container'>
      {factsArray.map((fact:fact) => {
        const { name, amount, id } = fact
        return ( 
          <Card width={cardWidth} height={cardHeight} borderRadius='10px' itemClass={name} key={id}>
            <p className="fact-amount">
              {(amount >= 1000) ? 
              (amount/1000).toFixed(0).toString() + "k" : `${amount}+`}
            </p>
            <p className="fact-name">{name}</p>
          </Card>
        )
      })}
    </div>
  )
}

export default FactsArray