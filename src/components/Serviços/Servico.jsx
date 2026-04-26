import React from 'react'
import './Servico.css'

import { FaUserCheck } from 'react-icons/fa'

const Servico = () => {
  return (
    <section id="servicos">
      <h5>O que eu faço</h5>
      <h2>Serviços</h2>

      <div className="container servico__container">

        {/* DESENVOLVIMENTO WEB */}
        <article className="servico">
          <div className="servico__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className="servico__list">
            <li>
              <FaUserCheck className="icon" />
              <p>Criação de sites modernos e responsivos</p>
            </li>
            <li>
              <FaUserCheck className="icon" />
              <p>Aplicações com React</p>
            </li>
            <li>
              <FaUserCheck className="icon" />
              <p>Interfaces profissionais (UI/UX)</p>
            </li>
          </ul>
        </article>

        {/* SUPORTE E TECNOLOGIA */}
        <article className="servico">
          <div className="servico__head">
            <h3>Suporte Técnico</h3>
          </div>

          <ul className="servico__list">
            <li>
              <FaUserCheck className="icon" />
              <p>Formatação e configuração de notebooks</p>
            </li>
            <li>
              <FaUserCheck className="icon" />
              <p>Instalação de sistemas e programas</p>
            </li>
            <li>
              <FaUserCheck className="icon" />
              <p>Manutenção básica e otimização</p>
            </li>
          </ul>
        </article>

        {/* SISTEMAS E REDES */}
        <article className="servico">
          <div className="servico__head">
            <h3>Sistemas e Redes</h3>
          </div>

          <ul className="servico__list">
            <li>
              <FaUserCheck className="icon" />
              <p>Implantação de sistemas (TOTVS)</p>
            </li>
            <li>
              <FaUserCheck className="icon" />
              <p>Configuração de redes</p>
            </li>
            <li>
              <FaUserCheck className="icon" />
              <p>Suporte técnico empresarial</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Servico