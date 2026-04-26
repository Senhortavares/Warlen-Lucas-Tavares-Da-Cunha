import React from 'react'
import './Header.css'


import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/warlen.png.jpeg'

const Header = ({ typedName }) => {
  return (
    <header id="home">
      <div className="container header__container">

        <div className="header__content">

          <span className="header__badge">WT PROJECTS</span>

          <h1>{typedName}</h1>

          <h5 className="text-light">
            Desenvolvedor Front-End | Tecnologia | Projetos Digitais
          </h5>

          <p className="header__description">
            Este site apresenta alguns dos meus projetos e evoluções na área de tecnologia.
          </p>

          <div className="header__cta-group">
            <CTA />

            <a
              href="https://wtport.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Ver site principal
            </a>
          </div>

          <span className="header__mini-info">
            Quer ver meus serviços completos? Acesse o site principal
          </span>

        </div>

        <div className="me">
          <img src={ME} alt="Warlen Tavares" />
        </div>

        <HeaderSocials />

        <a href="#portfolio" className="scroll__down">
          Ver projetos ↓
        </a>

      </div>
    </header>
  )
}

export default Header