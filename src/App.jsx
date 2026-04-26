import React from 'react'

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
  return (
    <main className="app">
      <Header />
      <Nav />
      <About />
      <Experiencia />
      <Servico />
      <Portfolio />
      <Testimonials />
      <Contato />
      <Footer />
    </main>
  )
}

export default App