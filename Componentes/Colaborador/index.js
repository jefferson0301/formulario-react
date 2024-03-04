import "./Colaborador.css"

const Colaborador = ({nome, email, fotoPerfil}) => {
  return (
    <div className='card-colaborador' >
        <img className='card-colaborador-foto-colaborador'  src={fotoPerfil} />
        <h2 className='card-colaborador-nome' >{nome}</h2>
        <h3 className='card-colaborador-email' >{email}</h3>
    </div>
  )
}

export default Colaborador