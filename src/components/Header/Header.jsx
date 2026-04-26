import React from 'react'
import './Header.css'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/warlen.png.jpeg'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__content">
          <span className="header__badge">Olá, eu sou</span>

          <h1>Warlen Tavares</h1>

          <h5 className="text-light">
            Desenvolvedor Front-End | Tecnologia | Suporte | Projetos Digitais
          </h5>

          <p className="header__description">
            Crio interfaces modernas, sites responsivos e soluções digitais com foco em tecnologia,
            organização e experiência do usuário.
          </p>

          <CTA />
        </div>

        <div className="me">
          <img src={ME} alt="Foto de Warlen Tavares" />
        </div>

        <HeaderSocials />

        <a href="#contato" className="scroll__down">
          Fale comigo
        </a>
      </div>
    </header>
  )
}

export default Header