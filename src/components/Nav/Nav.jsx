import React, { useState } from 'react'
import './Nav.css'

import { AiFillHome } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { AiOutlineBook } from 'react-icons/ai'
import { MdHomeRepairService, MdOutlineContacts } from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav className="nav">

      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiFillHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiSolidUser />
      </a>

      <a
        href="#experiencia"
        onClick={() => setActiveNav('#experiencia')}
        className={activeNav === '#experiencia' ? 'active' : ''}
      >
        <AiOutlineBook />
      </a>

      <a
        href="#servicos"
        onClick={() => setActiveNav('#servicos')}
        className={activeNav === '#servicos' ? 'active' : ''}
      >
        <MdHomeRepairService />
      </a>

      <a
        href="#contato"
        onClick={() => setActiveNav('#contato')}
        className={activeNav === '#contato' ? 'active' : ''}
      >
        <MdOutlineContacts />
      </a>

    </nav>
  )
}

export default Nav