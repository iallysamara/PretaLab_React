import React from "react";
import './Card.css';

const Card = ({referencia}) => {
    return(
        <div className = 'card'>
            <img src={referencia.imagem} alt="Imagem do Card" />
            <p>Nome: {referencia.nome}</p>
            <p>Cargo: {referencia.cargo}</p>
            <p>Série: {referencia.serie}</p>
            <p>Endereço: {referencia.endereco}</p>
            <p>Bairro: {referencia.bairro}</p>
            {referencia.pokemonEscolhido && (
                <div className='pokemon-container'>
                    <p>Pokémon Escolhido: </p>
                    <img src={referencia.pokemonEscolhido} alt= 'Pokémon'/>
                </div>
            )}
        </div>
    )
}

export default Card;