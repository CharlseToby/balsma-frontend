import React from 'react'
type cardProps = {
  width: string,
  height: string,
  borderRadius: string,
  children: React.ReactNode,
  itemClass?: string,
}
const Card = ({ width, height, borderRadius, children, itemClass = 'card-item' }: cardProps) => {
  return (
    <div className={`card--${itemClass}`} 
      style={{width, height, borderRadius }}>
      {children}
    </div>
  )
}

export default Card