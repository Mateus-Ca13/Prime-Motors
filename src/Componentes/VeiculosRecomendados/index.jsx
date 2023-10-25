import React from 'react'
import styled from 'styled-components'
import veiculos from "../../json/veiculos.json"
import GridDeVeiculos from '../GridDeVeiculos'

const VeiculosRecomendadosEstilizado = styled.section`
margin: 3em 0;

h1 {
  font-size: 36px;
    font-weight: 700;
    color: #008d0c;
    margin-bottom: 0.5em;
}
`

export default function VeiculosRecomendados({ veiculo }) {
  console.log(veiculo.carroceria)
  const veiculosRecomendados = veiculos.filter((veiculoLista) => {if(veiculo.carroceria === veiculoLista.carroceria && veiculo.id != veiculoLista.id) {return veiculoLista}})
  console.log(veiculosRecomendados)
  return (

    <VeiculosRecomendadosEstilizado>

      <h1>Carros semelhantes a esse...</h1>
      <GridDeVeiculos limiteDeCarros={4} listaDeVeiculos={veiculosRecomendados}/>


    </VeiculosRecomendadosEstilizado>
  )
}
