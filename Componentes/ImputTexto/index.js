
import "./ImputTexto.css"

const ImputText = (props) => {
    
    return(
        <div className="card-imput-text" >
            <label htmlFor="">{props.label}</label>
            <input onChange={props.alterarValor} required={props.obrigatorio} minLength={props.tamanhoMinimo} placeholder={props.placeholder} type={props.type} />
        </div>
    )
}

export default ImputText