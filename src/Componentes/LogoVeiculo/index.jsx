import React from 'react'
import styled from 'styled-components'

const LogotipoEstilizada = styled.img`
    max-height: 110px; 
    max-width: 110px;
`

export default function LogoVeiculo({ marca }) {
  return (
    <LogotipoEstilizada src={`/assets/logoVeiculos/${marca}.png`} alt={`Logotipo da ${marca}`} />
  )
}
