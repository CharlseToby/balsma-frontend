import React from 'react'
import './Team.scss'
import TeamLogic from './TeamLogic'

const OurTeam = () => {
  return (
    <section className="team">
      <header className="team__header">
        <h2 className='team__header__title'>our team</h2>
        <hr />
        <p className="team__header__text">
          We have an impressive team of professionals and seasoned business experts.
        </p>
      </header>
      <section className="team__members">
        <TeamLogic />
      </section>
    </section>
  )
}

export default OurTeam