import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BarraDePesquisa from '../BarraDePesquisa'

const HeaderEstilizado = styled.header`
align-items: center;
padding: 1em 2em;
display: flex;
justify-content:space-between;
box-shadow: 1px 1px 15px #ccc;

h2 {
    font-size: 24px
}
span {
    color: #008d0c
}
nav {
display: flex;
gap: 2.5em;
align-items: center;
}
.link {
  font-size: 15px;
  transition: 0.3s all;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  border-bottom: 2px solid #fff;

  &:hover {
    opacity: 0.8;
    border-bottom: 2px solid #008d0c6c;
    transition: 0.3s all
  }
}


`

export default function Header() {
  return (
    <HeaderEstilizado>

      <Link to={"/"}>
      <h2><span>P</span>RIME <span>M</span>OTORS</h2>
      </Link>
      
      <nav>
        <Link className='link' to="/">Comprar veículo </Link>
        <Link className='link' to="/">Vender veículo </Link>
        <Link className='link' to="/">Unidades </Link>
        <Link className='link' to="/">Contato </Link>

        <BarraDePesquisa tamanho='sm' placeholder={'Pesquise por uma marca ou modelo...'} />
      </nav>
    </HeaderEstilizado>
  )
}
