import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return(
        <div className = 'lista-suspensa'>
            <label>{props.label}</label>
            <select onChange = {evento => props.aoAlterarCampo(evento.target.value)} required = {props.required}>
            <option value="">Selecione uma série...</option>
                {
                    props.itens.map(item => {
                        //key = vai ser único
                        return <option key= {item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default ListaSuspensa;