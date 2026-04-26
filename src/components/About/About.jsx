import React from 'react'
import './About.css'

import ME from '../../assets/PicsArt_09.jpg'
import { FaAward, FaUserAstronaut } from 'react-icons/fa'
import { VscProject } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Warlen Tavares" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>+1 ano na área de tecnologia</small>
            </article>

            <article className="about__card">
              <FaUserAstronaut className="about__icon" />
              <h5>Habilidades</h5>
              <small>HTML, CSS, JS, React, TypeScript</small>
            </article>

            <a 
              href="https://github.com/Senhortavares" 
              target="_blank" 
              rel="noreferrer"
              className="about__card"
            >
              <VscProject className="about__icon" />
              <h5>Projetos</h5>
              <small>Veja meus projetos</small>
            </a>

          </div>

          <p>
            Sou apaixonado por tecnologia e desenvolvimento web. 
            Tenho experiência com HTML, CSS, JavaScript, React e TypeScript,
            além de conhecimentos em suporte técnico, redes e implantação de sistemas.
          </p>

          <p>
            Já atuei com sistemas como TOTVS e continuo evoluindo constantemente,
            buscando criar soluções modernas, eficientes e bem estruturadas.
          </p>

          <p>
            Meu objetivo é crescer profissionalmente, participar de projetos reais
            e contribuir com empresas através da tecnologia.
          </p>

          <a href="#contato" className="btn btn-primary">
            Fale comigo
          </a>

        </div>
      </div>
    </section>
  )
}

export default About