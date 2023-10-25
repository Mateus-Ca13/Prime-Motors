import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiRoad, GiGearStickPattern } from 'react-icons/gi'
import { PiEngine } from 'react-icons/pi'
import { MdOutlineLocationOn } from 'react-icons/md'


const CardDeVeiculoEstilizado = styled.div`
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 15px;
  transition: 0.3s all;

  &:hover {
    transition: 0.3s all;
    opacity: 0.8;
  }

   img {
    width: 100%;
    border-radius: 15px 15px 0 0 ;
   }

   .corpoCard {
    padding: 0 1em 1em 1em;
   }

.nomeVeiculo  {
  padding: 0.5em 0;;
  font-weight: 700;
 
  h3 {
    margin-top: 0.1em;
    font-size: 1.2em;
    color: #555;
    
  }

  h2 { 
     font-size: 22px;
     margin-top: 0.3em;
     color: #008d0c;
    }
}
.atributoVeiculo {
  display: flex;
  gap: 1em;
  

  span {
    font-size:12px;
    line-height: 1.3;
   
  }

  .icon {
    font-size: 16px;
    margin-right: 5px;
    padding-right: 4px;
    border-right: 2px solid #008d0c;
  }
}


`

export default function CardDeVeiculo({ veiculo }) {
  return (
    <Link to={`/veiculo/${veiculo.id}`}>
    <CardDeVeiculoEstilizado>
      <img src={veiculo.imagem} alt={`${veiculo.marca} ${veiculo.modelo}`} />

    <div className='corpoCard'>
      <div className='nomeVeiculo'>
        <h4>{veiculo.marca}</h4>
        <h3>{veiculo.modelo} {veiculo.anoFabricacao}</h3>
        <h2>R$ {veiculo.preco},00</h2>
      </div>
      <div className='atributoVeiculo'>
        <span>
          <p><GiRoad className='icon'/>{veiculo.KMrodados} KM</p>
          <p><GiGearStickPattern className='icon'/>{veiculo.cambio}</p>
        </span>
        <span>
          <p><PiEngine className='icon'/>{veiculo.motor}</p>
          <p><MdOutlineLocationOn className='icon'/>{veiculo.localizacao}</p>
        </span>

      </div>
      </div>

    </CardDeVeiculoEstilizado>
    </Link>
  )
}
