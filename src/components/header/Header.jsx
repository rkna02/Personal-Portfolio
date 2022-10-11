import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/myimage.png'
import Socials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Peter Na</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        <Socials /> 

        <div className="me">
          <img src={ME} alt="Photo of me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll to Bottom</a>
      </div>
    </header>
  )
}

export default Header