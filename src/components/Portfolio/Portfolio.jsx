import React from 'react'
import './Portfolio.css'

import IMG1 from '../../assets/GitHub-2.png'
import WTPORT from '../../assets/wtport..png'
import BLOKZ from '../../assets/blokz.png'
import BLOKB from '../../assets/blokb.png'
import BLOKV from '../../assets/blokv.png'
import PGO from '../../assets/pgo.png'
import INFRA from '../../assets/infra.png'
import INFRAN from '../../assets/infran.png'
import PT01 from '../../assets/pt01.png'
import SENATUS from '../../assets/senatus.png'

const WHATSAPP_LINK = 'https://wa.me/5561996941014'
const INSTAGRAM_LINK = 'https://www.instagram.com/wtaaaa_1/'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: BLOKV,
      title: 'Sistema de Vendas (Blok-Z)',
      description:
        'Alguns dos meus sistemas ainda não estão públicos. Eles só serão liberados quando estiverem totalmente finalizados.',
      github: 'https://github.com/Senhortavares',
    },
    {
      id: 2,
      image: BLOKZ,
      title: 'Blok-Z',
      description:
        'Projeto criado para comunidade. Evoluímos de grupo WhatsApp para integração com Discord.',
      github: 'https://github.com/Senhortavares',
      projeto: 'https://blok-z.vercel.app/',
    },
    {
      id: 3,
      image: WTPORT,
      title: 'Site Principal (Portfólio)',
      description:
        'Este é meu site principal, usado para apresentar meus serviços profissionais.',
      projeto: 'https://wtport.vercel.app/',
      destaque: true,
    },
    {
      id: 4,
      image: BLOKB,
      title: 'Bot Discord',
      description: 'Bot com automação e controle para servidores.',
      github: 'https://github.com/Senhortavares',
    },
    {
      id: 5,
      image: PGO,
      title: 'Sistema de Ponto',
      description:
        'Sistema em desenvolvimento para controle de funcionários.',
      projeto: 'https://ponto-go-prototipo.vercel.app/',
    },
    {
      id: 6,
      image: PT01,
      title: 'Portfólio (Estudos)',
      description: 'Projeto experimental usado para aprendizado.',
      projeto: 'https://portfolio-ten-sigma-57.vercel.app/',
    },
    {
      id: 7,
      image: SENATUS,
      title: 'Senatus',
      description:
        'Sistema criado para organização de comunidade e onboarding de membros.',
      projeto: 'https://senatus-vite.vercel.app/',
    },
    {
      id: 8,
      image: INFRA,
      title: 'Redes',
      description: 'Configuração e suporte de redes.',
      whatsapp: WHATSAPP_LINK,
    },
    {
      id: 9,
      image: INFRAN,
      title: 'Manutenção',
      description: 'Formatação, instalação e suporte técnico.',
      whatsapp: WHATSAPP_LINK,
    },
  ]

  return (
    <section id="portfolio">
      <h5>Projetos e Trabalhos</h5>
      <h2>Portfólio</h2>

      <p className="portfolio__top-info">
        Aqui estão alguns dos meus projetos. Nem todos estão disponíveis publicamente.
        Para ver minha apresentação completa de serviços, acesse o site principal.
      </p>

      <div className="portfolio__main-link">
        <a
          href="https://wtport.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Ir para site principal
        </a>
      </div>

      <div className="container portfolio__container">
        {data.map((item) => (
<article
  key={item.id}
  className={`portfolio__item ${item.destaque ? 'portfolio__highlight' : ''}`}
  onClick={(e) => {
    const card = e.currentTarget

    card.classList.remove('scan-active')

    setTimeout(() => {
      card.classList.add('scan-active')
    }, 10)

    setTimeout(() => {
      card.classList.remove('scan-active')
    }, 1300)
  }}
>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <p className="portfolio__desc">{item.description}</p>

            <div className="portfolio__item-cta">
              {item.github && (
                <a href={item.github} target="_blank" rel="noreferrer" className="btn">
                  GitHub
                </a>
              )}

              {item.projeto && (
                <a href={item.projeto} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Ver Projeto
                </a>
              )}

              {item.whatsapp && (
                <a href={item.whatsapp} target="_blank" rel="noreferrer" className="btn-w">
                  WhatsApp
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio