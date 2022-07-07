import React from 'react'
import './Footer.scss'
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__content">
        <h2 className="footer__content__logo">
          logo here
        </h2>
        <p className="footer__content__text">
          Live the life you want
        </p>
      </section>
      <section className="footer__socials">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </section>
    </footer>
  )
}

export default Footer