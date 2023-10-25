import React from 'react'
import styled from 'styled-components'

const CardEstilizado = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
border-radius: 15px 15px 0 0;

img {
    width: 100%;
    transition: 1s all;

    &:hover {
      opacity: 0.8;
      transform: scale(1.03);
      transition: 1s all;
    }
}

h3 {
    text-align: center;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #008d0c;
    color: #fff;
    padding: 14px 0%;
    border-radius: 0 0 15px 15px ;

}
` 

export default function CardCategoria({imagem, children, to}) {
  return (
    <CardEstilizado>
        <img src={imagem} alt={`Foto de um veículo da categoria ${children}`} />
        <h3>{children}</h3>
    </CardEstilizado>
  )
}
