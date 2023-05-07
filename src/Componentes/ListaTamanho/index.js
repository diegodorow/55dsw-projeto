import './lista-tamanho.css'

const ListaTamanho = ({label, items,  valor, aoAlterado, obrigatorio = false}) => {
    return (<div className="lista-tamanho">
        <label>{label}</label>
        <select required={obrigatorio} value={valor}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaTamanho