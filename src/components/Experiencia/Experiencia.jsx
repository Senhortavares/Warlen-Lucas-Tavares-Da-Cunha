
import './Experiencia.css'

import { HiBadgeCheck } from 'react-icons/hi'

const Experiencia = () => {
  return (
    <section id="experiencia">
      <h5>Habilidades</h5>
      <h2>Minha Experiência</h2>

      <div className="container experiencia__container">

        {/* FRONTEND */}
        <div className="experiencia__box">
          <h3>Front-End</h3>

          <div className="experiencia__content">

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>HTML5</h4>
                <small>Intermediário</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>CSS3</h4>
                <small>Intermediário</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>JavaScript</h4>
                <small>Intermediário</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>React</h4>
                <small>Intermediário</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>TypeScript</h4>
                <small>Intermediário</small>
              </div>
            </article>

          </div>
        </div>

        {/* BACKEND */}
        <div className="experiencia__box">
          <h3>Back-End</h3>

          <div className="experiencia__content">

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>Node.js</h4>
                <small>Intermediário</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>PHP</h4>
                <small>Intermediário</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>MySQL</h4>
                <small>Intermediário</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>Python</h4>
                <small>Intermediário</small>
              </div>
            </article>

          </div>
        </div>

        {/* EXTRA (SEU DIFERENCIAL) */}
        <div className="experiencia__box">
          <h3>Outras Experiências</h3>

          <div className="experiencia__content">

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>TOTVS</h4>
                <small>Experiência prática</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>Redes</h4>
                <small>Configuração e suporte</small>
              </div>
            </article>

            <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>Suporte Técnico</h4>
                <small>Hardware e sistemas</small>
              </div>
            </article>

                        <article className="experiencia__item">
              <HiBadgeCheck className="icon ok" />
              <div>
                <h4>Instalação de Equipamentos</h4>
                <small>Cameras de Segurança</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experiencia