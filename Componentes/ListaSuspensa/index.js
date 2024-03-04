import React from 'react'
import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
  return (
    <div className='container-lista-suspensa' >
        <label>{props.nome}</label>
        <select onChange={ (event) => props.alterarValor(event.target.value)} >
          <option className='opcao-selecione' value="">Selecione</option>
        {props.opcoes.map(opcao => <option key={opcao}>{opcao}</option> )}
            
        </select>
    </div>
    
  )
}

export default ListaSuspensa