import React from 'react'
import './Contato.css'

import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'

const Contato = () => {
  return (
    <section id="contato">
      <h5>Entre em contato</h5>
      <h2>Fale comigo</h2>

      <div className="container contato__container">

        {/* OPÇÕES */}
        <div className="contato__options">

          <article className="contato__option">
            <MdEmail className="contato__option-icon" />
            <h4>Email</h4>
            <h5>warlen99dom99@gmail.com</h5>
            <a href="mailto:warlen99dom99@gmail.com">
              Enviar mensagem
            </a>
          </article>

          <article className="contato__option">
            <AiFillInstagram className="contato__option-icon" />
            <h4>Instagram</h4>
            <h5>@wtaaaa_1</h5>
            <a 
              href="https://www.instagram.com/wtaaaa_1/" 
              target="_blank" 
              rel="noreferrer"
            >
              Visitar perfil
            </a>
          </article>

          <article className="contato__option">
            <RiWhatsappFill className="contato__option-icon" />
            <h4>WhatsApp</h4>
            <h5>(61) 99694-1014</h5>
            <a 
              href="https://wa.me/+5561996941014" 
              target="_blank" 
              rel="noreferrer"
            >
              Conversar
            </a>
          </article>

          <article className="contato__option">
            <BsLinkedin className="contato__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Warlen Tavares</h5>
            <a 
              href="https://www.linkedin.com/in/warlen-tavares-a1b883257/" 
              target="_blank" 
              rel="noreferrer"
            >
              Ver perfil
            </a>
          </article>

        </div>

        {/* FORM */}
        <form 
          action="https://api.sheetmonkey.io/form/iziVhEVnyfdt4iw9uBMHgd" 
          method="post"
          className="contato__form"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Seu nome" 
            required 
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Seu email" 
            required 
          />

          <textarea 
            name="mensagem" 
            rows="6" 
            placeholder="Digite sua mensagem..." 
            required
          />

          <button type="submit" className="btn btn-primary">
            Enviar mensagem
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contato