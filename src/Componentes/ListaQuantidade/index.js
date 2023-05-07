import './lista-quantidade.css'

const ListaQuantidade = ({label, items,  valor, aoAlterado, obrigatorio = false}) => {
    return (<div className="lista-quantidade">
        <label>{label}</label>
        <select required={obrigatorio} value={valor}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaQuantidade