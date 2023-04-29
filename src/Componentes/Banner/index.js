import React from 'react'
import banner from './banner.png'

export default function Banner() {
  return (
    <div >
        <h1>A galeria mais completa do espaço</h1>
        <img src={banner} alt="Imagem da terra vista do espaço" />
    </div>
  )
}