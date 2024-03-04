import Colaborador from "../Colaborador"
import "./Time.css"


const Time = (props) => {
  let colaboradoresSomenteTime = props.colaboradores.filter( (colaborador) => colaborador.time === props.nome )
  console.log(props.nome)
  console.log(colaboradoresSomenteTime)
  return (
     0 < colaboradoresSomenteTime.length && <div className='containerTime' style={{backgroundColor : props.corSecundaria}} >
      <h2 style={{borderColor : props.corPrimaria}} className='nome-time' >{props.nome}</h2>
      <div className="lista-colaboradores" >
        {colaboradoresSomenteTime.map(colaborador => <Colaborador key={colaborador.email} fotoPerfil={colaborador.fotoPerfil} nome={colaborador.nome}  email={colaborador.email}/> ) }
      </div>
    </div>
  )
}

export default Time