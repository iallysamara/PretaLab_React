import './Banner.css';

/* ´É .jsx porque podemos usar HTML + JS */
const Banner = () => {
    return(
        <header className="banner">
            <img src="/imagens/banner.jpg" alt="Banner principal da minha aplicação"/>
        </header>
    )
}

export default Banner; // Para usar em outros arquivos da nossa estrutura usando import
