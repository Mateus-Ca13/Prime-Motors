import React from 'react'
import styled from 'styled-components'

const PesquisaEstilizada = styled.div`
display: flex;

input {
    font-size: 14px;
    padding: 7px 12px;
    border-radius: 10px;
    color: #fff;
    border: none;
    background-color: #008d0c;
}
input:focus {
    outline: none;
}
input::placeholder {
    color: #fdfdfd99;
}

.sm {
    width: 320px
}

.lg {
    width: 640px
}

`

export default function BarraDePesquisa({placeholder, tamanho}) {

  return (
   <PesquisaEstilizada>
    <input
        className={tamanho} 
        type="text" 
        placeholder={placeholder} />
   </PesquisaEstilizada>
  )
}
