import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import SelectPokemon from "../SelectPokemon";
import CampoCep from "../CampoCep";

const Formulario = ({aoReferenciaCadastrada}) => {

    const series = [
        'Lost',
        'The Office',
        'Game of Thrones',
        'Gossip Girl',
        'The O.C.',
        'Silicon Valley',
        'Shameless',
        'Friends',
        'Yellowjackets',
        'Todo Mundo Odeia o Chris',
        'Enxame',
        'Atlanta'
    ]

    //useState
    const [serie, setSerie] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [pokemonEscolhido, setPokemonEscolhido] = useState(''); //Estado para armazenar o Pokémon escolhido
    const[cep, setCep] = useState('');
    const[endereco, setEndereco] = useState('');
    const[bairro, setBairro] = useState('');

    const aoSalvar = (evento) => {
        //Pique na tela
        evento.preventDefault();
        const novoCard = {
            nome,
            cargo,
            imagem,
            serie,
            pokemonEscolhido,
            cep,
            endereco,
            bairro
        }
        aoReferenciaCadastrada(novoCard);
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha com os dados mulher referência para criar um card</h2>

                <CampoTexto
                    obrigatorio = {true}
                    label = 'Nome'
                    placeholder ='Digite seu nome'
                    valor = {nome}
                    aoAlterarCampo={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio = {true}
                    label = 'Cargo'
                    placeholder ='Digite seu cargo'
                    valor = {cargo}
                    aoAlterarCampo ={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio = {true}
                    label = 'Imagem'
                    placeholder ='Digite o endereço da sua imagem'
                    valor = {imagem}
                    aoAlterarCampo ={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label  = 'Série'
                    itens = {series}
                    valor = {serie}
                    aoAlterarCampo = {valor => setSerie(valor)}
                />
                <SelectPokemon
                    label = 'Escolha um Pokemon'
                    aoSelecionarPokemon={setPokemonEscolhido}
                />
                <CampoCep
                    label = 'CEP'
                    obrigatorio = {true}
                    placeholder = 'Digite um cep'
                    aoAlterarCampo = {setCep} 

                    labelEndereco = 'Endereço'
                    aoPreencherEndereco = {setEndereco}

                    labelBairro = 'Bairro'
                    aoPreencherBairro = {setBairro}
                />
                <Botao>Salvar</Botao>
            </form>
        </section>
    )
}

export default Formulario;