import React, { useEffect, useState } from 'react'
import './index.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experiencia from './components/Experiencia/Experiencia'
import Servico from './components/Serviços/Servico'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)
  const [name, setName] = useState('')
  const [visitorName, setVisitorName] = useState('')
  const [typedText, setTypedText] = useState('')

  const fullText = 'Warlen Tavares'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)

      const savedName = localStorage.getItem('visitor_name')

      if (savedName) {
        setVisitorName(savedName)
      } else {
        setShowWelcome(true)
      }
    }, 2600)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) return

    let index = 0

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++

      if (index === fullText.length) {
        clearInterval(typing)
      }
    }, 120)

    return () => clearInterval(typing)
  }, [loading])

  useEffect(() => {
    if (loading) return

    const reveals = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.18 }
    )

    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault()

    const finalName = name.trim()
    if (!finalName) return

    localStorage.setItem('visitor_name', finalName)
    setVisitorName(finalName)
    setShowWelcome(false)
  }

  if (loading) {
    return (
      <div className="loading__screen">
        <div className="loading__box">
          <span className="loading__tag">WT SYSTEM</span>
          <h1>Inicializando Portfólio</h1>
          <p>Carregando interface neural...</p>

          <div className="loading__bar">
            <span></span>
          </div>

          <small>ACCESS_GRANTED.exe</small>
        </div>
      </div>
    )
  }

  return (
    <main className="app">
      {showWelcome && (
        <div className="welcome__overlay">
          <form className="welcome__modal" onSubmit={handleSubmit}>
            <span className="welcome__tag">WT PROJECTS</span>

            <h2>Qual é o seu nome?</h2>

            <p>
              Para uma experiência melhor, recomendo acessar pelo computador.
              Este portfólio mostra alguns dos meus projetos e evoluções.
            </p>

            <input
              type="text"
              placeholder="Digite seu nome..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />

            <button type="submit" className="btn btn-primary">
              Entrar no portfólio
            </button>
          </form>
        </div>
      )}

      {visitorName && (
        <div className="visitor__badge">
          Bem-vindo, <strong>{visitorName}</strong>
        </div>
      )}

      <Header typedName={typedText} />

      <Nav />

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Experiencia />
      </div>

      <div className="reveal">
        <Servico />
      </div>

      <div className="reveal">
        <Portfolio />
      </div>

      <div className="reveal">
        <Testimonials />
      </div>

      <div className="reveal">
        <Contato />
      </div>

      <Footer />
    </main>
  )
}

export default App