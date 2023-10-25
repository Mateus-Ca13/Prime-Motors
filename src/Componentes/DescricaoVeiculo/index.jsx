import React from 'react'
import styled from 'styled-components'
import EtiquetaInfoVeiculo from '../EtiquetaInfoVeiculo'
import { GiRoad, GiGearStickPattern } from 'react-icons/gi'
import { PiEngine } from 'react-icons/pi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { MdOutlineDirectionsCar, MdOutlineColorLens, MdOutlineLocationOn } from 'react-icons/md'
import LogoVeiculo from '../LogoVeiculo'

const DescricaoEstilizado = styled.main`

.descricaoVeiculo {
display: flex;
gap: 2em;

.cardInfo {
    padding: 3em;
    border-radius: 20px;
    box-shadow: -2px 5px 10px #ccc;

    .IDVeiculo {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;

    }

}
.imagemVeiculo {
    width: 50%;
    border-radius: 20px;
    box-shadow: 1px 5px 10px #ccc;
    }
h1 {
    font-size: 36px;
    font-weight: 700;
    color: #008d0c;
}
h2 {    
    font-size: 24px;
    font-weight: 500;
}

h3 {
    margin: 0.2em 0 1em;
    font-size: 38px;
    font-weight: 700;
}

@media screen and (max-width: 1000px){
    display: block;

    .imagemVeiculo {
        width: 100%;
    }
}

.gridInfo {
    margin: 1em 0;
    display: grid;
  
    grid-template-columns: 1fr 1fr ;
    gap: 1em;
}
}
`

export default function DescricaoVeiculo({ veiculo }) {
    return (
        <DescricaoEstilizado>
            <section className='descricaoVeiculo'>
                <img className='imagemVeiculo' src={veiculo.imagem} alt={veiculo.marca + " " + veiculo.modelo} />
                <div className='cardInfo'>
                    <span className='IDVeiculo'>
                        <div>
                            <h2>{veiculo.marca}</h2>
                            <h1>{veiculo.modelo}</h1>
                            <h3>R$ {veiculo.preco},00</h3>
                        </div>
                        <LogoVeiculo marca={veiculo.marca}/>

                    </span>
                    <span className='gridInfo'>
                        <EtiquetaInfoVeiculo icone={<GiRoad />} label="KM Rodados">{veiculo.KMrodados}</EtiquetaInfoVeiculo>
                        <EtiquetaInfoVeiculo icone={<PiEngine />} label="Motor">{veiculo.motor}</EtiquetaInfoVeiculo>
                        <EtiquetaInfoVeiculo icone={<AiOutlineCalendar />} label="Ano de Fabricação">{veiculo.anoFabricacao}</EtiquetaInfoVeiculo>
                        <EtiquetaInfoVeiculo icone={<GiGearStickPattern />} label="Câmbio">{veiculo.cambio}</EtiquetaInfoVeiculo>
                        <EtiquetaInfoVeiculo icone={<MdOutlineDirectionsCar />} label="Carroceria">{veiculo.carroceria}</EtiquetaInfoVeiculo>
                        <EtiquetaInfoVeiculo icone={<MdOutlineColorLens />} label="Cor">{veiculo.cor}</EtiquetaInfoVeiculo>
                        <EtiquetaInfoVeiculo icone={<MdOutlineLocationOn />} label="Localização">{veiculo.localizacao}</EtiquetaInfoVeiculo>
                    </span>

                </div>
            </section>
        </DescricaoEstilizado>
    )
}
