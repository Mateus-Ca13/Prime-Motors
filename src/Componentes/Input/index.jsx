import React from 'react'
import styled from 'styled-components'

const InputPersonalizado = styled.input`
border-radius: 10px;
background-color: #fff;
font-size: 20px;
border: none;
box-shadow: 1px 1px 5px #ccc;
padding: 0.4em 0.8em;
`

export default function Input({ placeholder, type, required }) {
  return (
    <InputPersonalizado required={required} type={type} placeholder={placeholder}/>
  )
}
