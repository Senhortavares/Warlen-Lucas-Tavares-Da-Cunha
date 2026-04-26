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

const WHATSAPP_LINK = 'https://wa.me/+5561996941014'
const INSTAGRAM_LINK = 'https://www.instagram.com/wtaaaa_1/'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: BLOKV,
      title: 'Sistema de Vendas (Blok-Z)',
      description:
        'Alguns dos meus sites ainda não estão hospedados para acesso público, pois só serão lançados quando estiverem totalmente finalizados.',
      github: 'https://github.com/Senhortavares',
      projeto: '#',
    },
    {
      id: 2,
      image: BLOKZ,
      title: 'Blok-Z',
      description:
        'Criei o Blok-Z para jogar com amigos. Hoje, deixamos de usar o grupo do WhatsApp e passamos a nos conectar apenas pelo Discord.',
      github: 'https://github.com/Senhortavares',
      projeto: 'https://blok-z.vercel.app/',
    },
    {
      id: 3,
      image: WTPORT,
      title: 'Site Portfólio',
      description:
        'Este é o meu portfólio profissional, utilizado também no meu Instagram oficial para divulgação de trabalhos.',
      github: 'https://github.com/Senhortavares',
      projeto: 'https://wtport.vercel.app/',
    },
    {
      id: 4,
      image: BLOKB,
      title: 'Bot para Discord',
      description: 'Bot com sistema de controle e automação para servidores.',
      github: 'https://github.com/Senhortavares',
      projeto: 'https://github.com/Senhortavares/botBlokz-b',
    },
    {
      id: 5,
      image: PGO,
      title: 'Sistema de Bater Ponto',
      description:
        'Estou desenvolvendo um sistema para gerenciar o bater ponto dos funcionários.',
      github: 'https://github.com/Senhortavares',
      projeto: 'https://ponto-go-prototipo.vercel.app/',
    },
        {
      id: 6,
      image: PT01,
      title: 'Portfólio',
      description:
        'Este é um projeto acadêmico/experimental que desenvolvi como parte dos meus estudos.',
      github: 'https://github.com/Senhortavares',
      projeto: 'https://portfolio-ten-sigma-57.vercel.app/',
    },
    {
      id: 7,
      image: SENATUS,
      title: 'Senatus',
      description:
        'O Senatus foi desenvolvido para nossa comunidade, criada após mudanças importantes no conselho. O site serve como ponto de acesso para novos membros conhecerem nossas regras, diretrizes e informações essenciais.',
      github: 'https://github.com/Senhortavares',
      projeto: 'https://senatus-vite.vercel.app/',
    },
    {
      id: 8,
      image: INFRA,
      title: 'Configuração de Redes',
      description:
        'Projetos de redes e infraestrutura básica.',
      whatsapp: WHATSAPP_LINK,
      instagram: INSTAGRAM_LINK,
    },
    {
      id: 9,
      image: INFRAN,
      title: 'Manutenção de Notebooks',
      description:
        'Formatação, instalação de sistemas, otimização, configuração de programas e suporte básico para notebooks.',
      whatsapp: WHATSAPP_LINK,
      instagram: INSTAGRAM_LINK,
    },
  ]

  return (
    <section id="portfolio">
      <h5>Meus Trabalhos</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <p className="portfolio__desc">{item.description}</p>

            <div className="portfolio__item-cta">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
              )}

              {item.projeto && item.projeto !== '#' && (
                <a
                  href={item.projeto}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Ver Projeto
                </a>
              )}

              {item.whatsapp && (
                <a
                  href={item.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-w"
                >
                  WhatsApp
                </a>
              )}

              {item.instagram && (
                <a
                  href={item.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-i"
                >
                  Instagram
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