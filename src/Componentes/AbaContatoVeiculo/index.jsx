import React from 'react'
import styled from 'styled-components'
import Input from '../Input'

const AbaContatoEstilizada = styled.main`
    margin-top: 2em;
    border-radius: 20px;
    box-shadow: 1px  5px 10px #ccc;
    padding: 3em;
    background-color: #d9ffd0;

h2 {
    font-size: 28px;
    line-height: 1.4em;
    color: #008d0c;
    font-weight: 700;
}

h3 {
    font-size: 20px;
    line-height: 1.4em;
    font-weight: 700;
}
form {
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;

    input[type=submit] {
        background-color: #008d0c;
        border: none;
        color: #fff;
        font-size: 22px;
        padding: 0.5em 1em;
        border-radius: 10px;
        transition: 0.4s all;
        cursor: pointer;

        &:hover {
            transition: 0.4s all;
            background-color: #31b43c;
        }
    }
}
`

export default function AbaContatoVeiculo() {
    return (
        <AbaContatoEstilizada>
            <h2>Se interessou por esse veículo?</h2>
            <h3>Mande uma mensagem para o vendedor!</h3>
            <form>
                <Input required type={"text"} placeholder="Nome*" />
                <Input required type={"email"} placeholder="E-mail*" />
                <Input required type={"tel"} placeholder="Telefone*" />
                <Input required type={"text"} placeholder="Sua mensagem*" />
                
                <input type='submit' value={"Enviar mensagem"}/>
            </form>
        </AbaContatoEstilizada>
    )
}
