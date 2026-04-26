import React from 'react'
import './Footer.css'

import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id="footer">

      <a href="#" className="footer__logo">
        Warlen Tavares
      </a>

      <ul className="permalinks">
        <li><a href="#homer">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Comentários</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <div className="footer__socials">

        <a 
          href="https://www.instagram.com/wtaaaa_1/" 
          target="_blank" 
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>

        <a 
          href="https://wa.me/5561996941014" 
          target="_blank" 
          rel="noreferrer"
        >
          <RiWhatsappFill />
        </a>

        <a 
          href="https://www.linkedin.com/in/warlen-tavares-a1b883257/" 
          target="_blank" 
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>

      </div>

      <div className="footer__copyright">
        <small>
          © {new Date().getFullYear()} Warlen Tavares — Todos os direitos reservados
        </small>
      </div>

    </footer>
  )
}

export default Footer