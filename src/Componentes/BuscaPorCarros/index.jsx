import React from 'react'
import styled from 'styled-components'
import BarraDePesquisa from '../BarraDePesquisa'
import CardCategoria from '../CardCategoria'

const BuscaPorCarrosEstilizada = styled.section`
padding: 2em;
box-shadow: 1px 2px 15px 5px #ddd;
border-radius: 20px;
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;

h2 {
    font-size: 24px;
    font-weight: 700;
    color: #008d0c;
    margin-bottom: 12px;
}

p {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 1em;
}

input {
    font-size: 20px;
    padding: 12px 16px;
    margin-bottom: 1em
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1em;
}

@media screen and (max-width: 1200px){
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
`

export default function BuscaPorCarros() {
  return (
    <BuscaPorCarrosEstilizada>
        <h2>Que tipo de veículo você está procurando?</h2>
        <BarraDePesquisa tamanho='lg' placeholder={'Pesquise por uma marca, modelo ou estilo de veículo...'}/>
        <p>Ou busque por nossas categorias...</p>
        <div className='grid'>
            <CardCategoria imagem={"../../src/assets/categoria1.png"} to={"/"}>Sedãs</CardCategoria>
            <CardCategoria imagem={"../../src/assets/categoria2.png"} to={"/"}>Hatchbacks</CardCategoria>
            <CardCategoria imagem={"../../src/assets/categoria3.png"} to={"/"}>SUV's</CardCategoria>
            <CardCategoria imagem={"../../src/assets/categoria4.png"} to={"/"}>Peruas</CardCategoria>
            <CardCategoria imagem={"../../src/assets/categoria5.png"} to={"/"}>Esportivos</CardCategoria>
            <CardCategoria imagem={"../../src/assets/categoria6.png"} to={"/"}>Clássicos</CardCategoria>
        </div>
    </BuscaPorCarrosEstilizada>
  )
}
