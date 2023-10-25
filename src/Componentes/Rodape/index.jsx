import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RodapeEstilizado = styled.section`
    background-color: #333;
    display: flex;
    flex-direction: column;
    text-align:center;
    padding: 1.5em 0;
    color: #fff;

    h2{
        color: #fff;
        font-size: 24px;
        margin-bottom: 1em;
        

        span {
            color: #008d0c;
        }
    }
    div {
        display: flex;
        justify-content: center;
        gap: 1em;
        margin-bottom: 2em;
       
        .link {
            color: #fff;
            border-bottom: 1px solid transparent;
            transition: 0.4s all;

            &:hover {
                color: #ccc;
                transition: 0.4s all;
                border-bottom: 1px solid #0b6d01
            }
        }
    }
`

export default function Rodape() {
    return (
        <RodapeEstilizado>

            <Link to={"/"}>
                <h2><span>P</span>RIME <span>M</span>OTORS</h2>
            </Link>
            <div>
                <Link className='link' to={"/"}>Comprar veículo</Link>
                <Link className='link' to={"/"}>Vender veículo</Link>
                <Link className='link' to={"/"}>Unidades</Link>
                <Link className='link' to={"/"}>Contato</Link>
            </div>

            <p>© 2023 Prime Motors - Todos os direitos reservados.</p>

        </RodapeEstilizado>
    )
}
