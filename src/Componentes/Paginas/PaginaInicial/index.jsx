import React from 'react'
import Banner from '../../Banner'
import BuscaPorCarros from '../../BuscaPorCarros'
import ListaDeVeiculos from '../../ListaDeVeiculos'
import styled from 'styled-components'

const LayoutEstilizado = styled.main`
margin: 2em 5em;
`

export default function PaginaInicial() {
  return (
    <>
      <Banner />
      <LayoutEstilizado>
      <BuscaPorCarros />
      <ListaDeVeiculos/>
      </LayoutEstilizado>
    </>
  )
}
