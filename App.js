import { useState } from "react";
import Formulario from "./Componentes/Formulario";
import Time from "./Componentes/Time";


function App() {

  const times = [
    {nome: "Gestão", corPrimaria:"#FFD700", corSecundaria:"#F0F8FF"},
    {nome: "Recursos Humanos", corPrimaria:"#FF1493", corSecundaria:"#F8F8FF"},
    {nome: "Marketing", corPrimaria:"#87CEEB", corSecundaria:"#FFFAFA"}
  ]

  let bdColaboradores = JSON.parse(localStorage.getItem('colaboradores')) || []
  //bdColaboradores = [...[],bdColaboradores]
  console.log(bdColaboradores)
  const[colaboradores, setColaboradores]  = useState(bdColaboradores)

  const cadastrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores,colaborador])
  }

  console.log(colaboradores)
  
  return (
    <div className="App">
      <Formulario colaboradores={colaboradores} cadastrarColaborador={(colaborador) => cadastrarColaborador(colaborador) } times={times} />
      {times.map(time => <Time colaboradores={colaboradores} key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} /> )}
      
    </div>
  );
}

export default App;
