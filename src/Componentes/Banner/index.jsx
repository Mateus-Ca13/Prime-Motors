import React from 'react'
import styled from 'styled-components'
import BotaoPadrao from '../BotaoPadrao'

const BannerEstilizado = styled.div`
padding: 3em 5em;
gap: 2em;
background-color: #222222;
display: flex;
justify-content: space-around;
align-items: center;

div {
    margin: 1em;
    text-align: center;


h1 {
    margin-bottom: 0.5em;
    font-size: 26px;
    font-weight: 700;
    color: #2e9937;
}

p {
    font-size: 20px;
    color: #fff;
    margin-bottom: 1em;
}
}

img {
    width: 45%
}
`

export default function Banner() {
  return (
    <BannerEstilizado>
        <img src="../src/assets/carro-banner.png" alt="" />
        <div>
            <h1>CARROS 0KM COM DESCONTO ESPECIAL</h1>
            <p>Confira nossa seleção de ofertas para veículos vindo direto de fábrica!</p>
            <BotaoPadrao to={"/"}>Conferir seleção de ofertas</BotaoPadrao>
        </div>
        
    </BannerEstilizado>
    
  )
}
