import React from 'react'
import imagemDelacruz from './imagemDelacruz.jpg'
import './MenuContainer.css'

export default function MenuContainer() {
  return (
    <div className='content-menu'>
      <section className='content-card'>
        <img className='imagem-card' src={imagemDelacruz} alt='imagem'></img>
        <h2 className='title-card'>Delacruz</h2>
        <p className='descricao'>Cantor-Compositor</p>
      </section>
      <section className='content-card'>
        <img className='imagem-card' src={imagemDelacruz} alt='imagem'></img>
        <h2 className='title-card'>Delacruz</h2>
        <p className='descricao'>Cantor-Compositor</p>
      </section>
      <section className='content-card'>
        <img className='imagem-card' src={imagemDelacruz} alt='imagem'></img>
        <h2 className='title-card'>Delacruz</h2>
        <p className='descricao'>Cantor-Compositor</p>
      </section>  
    </div>
  )
}
