import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BotaoEstilizado = styled.button`
color: #fff;
background-color: #008d0c;
border:none;
border-radius: 10px;
padding: 1em 4em;
font-size: 18px;
margin: 0.5em;
transition: 0.4s all;

&:hover {
  background-color: #43994a;
  transition: 0.4s all
}

.link {
  color: #fff;
}

`

export default function BotaoPadrao({children, to}) {
  return (
    <BotaoEstilizado><Link className='link' to={to}>{children}</Link></BotaoEstilizado>
  )
}
