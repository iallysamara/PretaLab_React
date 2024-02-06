import './Banner.Module.css';
import Menu from './Menu';

/* ´É .jsx porque podemos usar HTML + JS */
const Banner = () => {
    return(
        <div>        
            <Menu />
            <header className="banner">
                <img src="/imagens/banner.jpg" alt="Banner principal da minha aplicação"/>
            </header>
        </div>
    )
}

export default Banner; // Para usar em outros arquivos da nossa estrutura usando import
