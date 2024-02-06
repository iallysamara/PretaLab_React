import React, { useEffect, useState } from "react";
import  Axios  from 'axios'; // Importando Axios para fazer a requisição HTTP
import './SelectPokemon.css';

// Criar a const com a props
const SelectPokemon = (props) => {
    // o estado será iniciado com um array vazio, Estado para armazenar os Pokémons
    const [pokemons, setPokemons] = useState([]); //Pega o Pokemon
    const [selectedPokemon, setSelectedPokemon] = useState(null); // Estado que armazena o Pokemon selecionado

    //vamos usar o hook do useEfect (que executa código após o componente ser renderizado) para buscar os Pokémons da API ao montar o componente
    useEffect(() => { // vamos usar para consumir a API - Cada vez que o usuário entrar na página, a lista de Pokemons dele vai tá lá carregada
        // Função assíncrona para buscar a lista de Pokémons da API
        const fetchPokemons = async () => {
            try{
                const response = await Axios.get('https://pokeapi.co/api/v2/pokemon');
                setPokemons(response.data.results); //Atualiza o estado com a lista de Pokémons retornados pela API
            } catch(error){
                console.log('Erro ao buscar os Pokemons', error);
            }
        };
        fetchPokemons(); // Chama a função para buscar os Pokémons ao montar o componente
    }, []); // Array vazio para garantir que o useEffect execute apenas uma vez

    // Função assíncrona para buscar os detalhes de um Pokémon específico
    const  fetchPokemonDetails = async (pokemonName) => { // é assicrona, porque depende do usuário está usando
        try{
            // Requisição para a API de Pokémon usando Axios, passando o nome do Pokémon desejado
            const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // Pega um a um dos Pokemons

            // Define a URL da imagem do Pokémon selecionado no estado
            setSelectedPokemon(response.data.sprites.front_default); //front_default seleciona um a um

            // Retorna a URL da imagem do Pokémon para o componente pai usando a função passada como prop
            props.aoSelecionarPokemon(response.data.sprites.front_default);
        } catch(error) {
            // Em caso de erro na requisição, exibe uma mensagem de erro no console
            console.log('Erro ao buscar os Pokemons', error)
        }     
    };

    // Renderiza o select com os Pokémons disponíveis
    return(
        <div className='select-pokemon'>
            <label>{props.label}</label> 
            <select onChange={(event) => fetchPokemonDetails(event.target.value)} required={props.required}>
            <option value="">Selecione...</option> {/*Opção inicial para indicar ao usuário que ele deve escolher um Pokémon */}
                {/* Itera sobre a lista de Pokémons para criar as opções no select */}
                {pokemons.map((pokemon, index) => (
                    // Cria uma opção para cada Pokémon na lista
                    <option key={index} value={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectPokemon;