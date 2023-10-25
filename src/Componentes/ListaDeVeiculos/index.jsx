import React from 'react'
import styled from 'styled-components'
import GridDeVeiculos from '../GridDeVeiculos'
import listaVeiculos from '../../json/veiculos.json'
const ListaDeVeiculosEstilizada = styled.section`
margin-top: 2em;


h2 {
  color: #008d0c;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1em;
}

`


export default function ListaDeVeiculos() {
  return (
    <ListaDeVeiculosEstilizada>
    <h2>Veículos em destaque</h2>

    <GridDeVeiculos listaDeVeiculos={listaVeiculos}/>
    </ListaDeVeiculosEstilizada>

  )
}
