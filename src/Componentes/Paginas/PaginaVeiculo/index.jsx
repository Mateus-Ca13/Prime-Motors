import React from 'react'
import { useParams } from 'react-router-dom'
import veiculos from "../../../json/veiculos.json"
import styled from 'styled-components';
import DescricaoVeiculo from '../../DescricaoVeiculo';
import AbaContatoVeiculo from '../../AbaContatoVeiculo';
import VeiculosRecomendados from '../../VeiculosRecomendados';

const PaginaVeiculoEstilizada = styled.main`
margin: 2em 5em;

`

export default function PaginaVeiculo() {

  const parametros = useParams();
  const veiculo = veiculos.find((veiculo) => {return veiculo.id === Number(parametros.id)})
  
  return (
    <PaginaVeiculoEstilizada>
      <DescricaoVeiculo veiculo={veiculo}/>
      <AbaContatoVeiculo/>
      <VeiculosRecomendados veiculo={veiculo}/>
    </PaginaVeiculoEstilizada>
  )
}
