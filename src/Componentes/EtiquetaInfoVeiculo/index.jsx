import React from 'react'
import styled from 'styled-components'

const EtiquetaEstilizada = styled.div`
    display: flex;
    background-color: #d9ffd0;
    padding: 0.4em 0.5em;
    border-radius: 10px;

    label {
        color: #008d0c;
        font-weight: 700;
    }
    p {
        margin-top: 0.2em;
        padding: 0 0.2em;
        font-size: 16px;
    }

    .icon {
      font-size: 28px;
      color: #008d0c;
      padding:0 6px;
      margin-right: 0.3em;
      display: flex;
      align-items: center;
      border-right: 2px solid #008d0c
    }
`

export default function EtiquetaInfoVeiculo({ label, children, icone }) {
  return (
    <EtiquetaEstilizada>
      <div className='icon'>
      {icone}
      </div>
      <div>
        <label>{label}</label>
        <p>{children}</p>
      </div>
    </EtiquetaEstilizada>
  )
}
