import React, { useState } from 'react'
import './Testimonials.css'

import Avatar01 from '../../assets/avatar01.jpg'
import Avatar02 from '../../assets/avatar02.jpg'
import Avatar03 from '../../assets/avatar03.png'
import Avatar04 from '../../assets/avatar04.jpg'
import Avatar05 from '../../assets/avatar05.png'
import Avatar06 from '../../assets/avatar06.png'
import Avatar07 from '../../assets/avatar07.png'
import Avatar08 from '../../assets/avatar08.jpg'

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const initialData = [
  {
    avatar: Avatar01,
    name: 'Rosy Santos',
    review: 'Muito bom!'
  },
  {
    avatar: Avatar02,
    name: 'Rosimar Tavares',
    review: 'Muito bom, meu sobrinho.'
  },
  {
    avatar: Avatar03,
    name: '__.anynha.__',
    review: 'Seu trabalho é muito bom, amigo. Ficou ótimo. Parabéns!'
  },
  {
    avatar: Avatar04,
    name: 'Claudia Antonia',
    review: 'Você é um grande exemplo. Continue se esforçando, você é capaz. Meu orgulho!'
  },
  {
    avatar: Avatar05,
    name: 'Daniele Benfica',
    review: 'Projeto muito bacana e bem estruturado. Parabéns, ficou incrível!'
  },
  {
    avatar: Avatar06,
    name: 'Rauan',
    review: 'Show! Ficou muito bom.'
  },
  {
    avatar: Avatar07,
    name: 'Rony Fonseca',
    review: 'Site bastante interativo. Achei realmente show, você está de parabéns!'
  },
  {
    avatar: Avatar08,
    name: 'Thais Pereira',
    review: 'Muito top!'
  }
]

const Testimonials = () => {
  const [comments, setComments] = useState(initialData)
  const [form, setForm] = useState({
    name: '',
    review: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.review.trim()) {
      return
    }

    const newComment = {
      avatar: Avatar01,
      name: form.name,
      review: form.review
    }

    setComments([newComment, ...comments])
    setForm({ name: '', review: '' })
  }

  return (
    <section id="testimonials">
      <h5>Avaliações</h5>
      <h2>Comentários</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
      >
        {comments.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>

            <h5 className="client__name">{name}</h5>

            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>

      <form className="comment__form" onSubmit={handleSubmit}>
        <h3>Deixe seu comentário</h3>

        <input
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          placeholder="Escreva seu comentário..."
          value={form.review}
          onChange={(e) => setForm({ ...form, review: e.target.value })}
        />

        <button type="submit" className="btn btn-primary">
          Enviar comentário
        </button>
      </form>
    </section>
  )
}

export default Testimonials