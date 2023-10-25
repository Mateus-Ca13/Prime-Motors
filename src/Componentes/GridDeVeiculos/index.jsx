import React from 'react'

import CardDeVeiculo from '../CardDeVeiculo'
import styled from 'styled-components'

const GridEstilizado = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 1em;

@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
}
`

export default function GridDeVeiculos({listaDeVeiculos, limiteDeCarros}) {

    limiteDeCarros ? listaDeVeiculos = listaDeVeiculos.slice(0, limiteDeCarros) : "" ;

    return (
        <>
            <GridEstilizado>
                {listaDeVeiculos.map(veiculo => <CardDeVeiculo key={veiculo.id} veiculo={veiculo} />)}
            </GridEstilizado>

        </>
    )
}
