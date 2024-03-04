import Botao from "../Botao"
import ImputCheckBox from "../ImputCheckBox"
import ImputText from "../ImputTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import { useState } from "react"

const Formulario = ({colaboradores,cadastrarColaborador}) => {
  const listaEstados = [   
     'Acre',
     'Alagoas',
     'Amapá',
     'Amazonas',
     'Bahia',
     'Ceará',
     'Distrito Federal',
     'Espírito Santo',
     'Goías',
     'Maranhão',
     'Mato Grosso',
     'Mato Grosso do Sul',
     'Minas Gerais',
     'Pará',
     'Paraíba',
     'Paraná',
     'Pernambuco',
     'Piauí',
     'Rio de Janeiro',
     'Rio Grande do Norte',
     'Rio Grande do Sul',
     'Rondônia',
     'Roraíma',
     'Santa Catarina',
     'São Paulo',
     'Sergipe',
     'Tocantins'
]

const times = ["Gestão", "Recursos Humanos", "Marketing"]

const [nome, setNome] = useState("")
const [estado, setEstado] = useState("")
const [time, setTime] = useState("")
const [fotoPerfil, setFotoPerfil] = useState("")
const [rg, setRg] = useState("")
const [cpf, setCpf] = useState("")
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [confirmarSenha, setConfirmarSenha] = useState("")

console.log(cpf,email,confirmarSenha,senha,estado)

const submeterFormulario = (evento) => {
  evento.preventDefault()
  const usuario = {
    nome,
    estado,
    time,
    fotoPerfil,
    rg,
    cpf,
    email,
    senha,
    confirmarSenha,
  }
  //console.log("Enviou o formulário => usuario:"+usuario)
  let bdColaboradores = JSON.parse(localStorage.getItem('colaboradores')) || []
  //bdColaboradores = [...[],bdColaboradores]
  cadastrarColaborador(usuario)
  bdColaboradores = [...bdColaboradores, usuario]
  console.log(colaboradores)
  localStorage.setItem('colaboradores', JSON.stringify(bdColaboradores))
}
  return (
    <section className="card-formulario" > 
        <form onSubmit={submeterFormulario} >
            <ImputText  
              obrigatorio={true} 
              tamanhoMinimo={3} 
              label="Nome" 
              placeholder="Digite seu nome" 
              type="text" 
              valor={nome}
              alterarValor={(event) => setNome(event.target.value)}
              />

            <ListaSuspensa 
              nome="Estados"
              opcoes={listaEstados} 
              valor={estado}
              alterarValor={setEstado}
            />

            <ListaSuspensa 
              nome="Times"
              opcoes={times} 
              valor={time}
              alterarValor={setTime}
            />

            <ImputText 
              obrigatorio={true} 
              tamanhoMinimo={5} 
              label="Foto perfil" 
              placeholder="Coloque a url da sua foto de perfil" 
              type="text" 
              valor={fotoPerfil}
              alterarValor={(evento) => setFotoPerfil(evento.target.value) }
            />  

            <ImputText 
              obrigatorio={true} 
              tamanhoMinimo={8} 
              label="Rg" 
              placeholder="Digite seu Rg" 
              type="text" 
              valor={rg}
              alterarValor={(evento) => setRg(evento.target.value) }
            />

            <ImputText 
              obrigatorio={true} 
              tamanhoMinimo={11} 
              label="Cpf" 
              placeholder="Digite seu Cpf" 
              type="text" 
              valor={cpf}
              alterarValor={(evento) => setCpf(evento.target.value)}
            />

            <ImputText 
              obrigatorio={true} 
              tamanhoMinimo={1} 
              label="Email" 
              placeholder="Digite seu email" 
              type="email" 
              valor={email}
              alterarValor={(evento) => setEmail(evento.target.value)}
            />

            <ImputText 
              obrigatorio={true} 
              tamanhoMinimo={6} 
              label="Senha" 
              placeholder="Digite sua senha" 
              type="password" 
              valor={senha}
              alterarValor={(evento) => setSenha(evento.target.value) }
            />
            <ImputText 
              obrigatorio={true} 
              tamanhoMinimo={6} 
              label="Confirmar Senha" 
              placeholder="Digite sua senha" 
              type="password" 
              valor={confirmarSenha}
              alterarValor={(evento) => setConfirmarSenha(evento.target.value)}
            />
            <ImputCheckBox/>
            <Botao>
              Criar Conta {/*children é passado para o componente Botao*/}
            </Botao>
        </form>
    </section>
  )
}

export default Formulario