import React, { useState } from 'react'
import { ArrowUpRight, CheveronDown, HamburgerMenu } from '../../assets/svg/Svg'
import './Header.scss'

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const navControl = () => {
    setShowNav(showNav => !showNav);
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <p className="header__logo">denrele <br />paul</p>
        <ul className="header__navlinks">
          <li><a href="#">home</a></li>
          <li><a href="#">about me</a></li>
          <li><a href="#">projects</a></li>
          <li>
            <a href="#">contact me</a>
            <ArrowUpRight />
          </li>
        </ul>
        <ul className={showNav ? "nav-show" : "nav-hide"}>
          <li><a href="#">home</a></li>
          <li><a href="#">about me</a></li>
          <li><a href="#">projects</a></li>
          <li>
            <a href="#">contact me</a>
            <ArrowUpRight />
          </li>
        </ul>
        <figure className="header__header__nav__hamburger" onClick={navControl}>
          <HamburgerMenu />
        </figure>
      </nav>
      <article className="header__text">
        <h1 className="header__text--title">trendy <br/>fashion</h1>
        <CheveronDown />
      </article>
    </header>
  )
}

export default Header