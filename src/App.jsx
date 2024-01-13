import { useState } from "react"
import Banner from "./componentes/Banner/index"
import Formulario from "./componentes/Formulario"
import Card from "./componentes/Card"

function App() {
  // Criar um estado para receber o card
  const [referencias, setReferencias] = useState([])

  //função para cadastrar o card
  const aoNovaReferenciaAdicionada = (referencia) => {
    setReferencias([...referencias, referencia])
  }

  return (
    <div>
      <Banner />
      <Formulario aoReferenciaCadastrada={aoNovaReferenciaAdicionada}/>
      <div className="cards-container">
        {referencias.map((referencia, index) => (
          <Card key={index} referencia={referencia}/>
        ))}
      </div>
    </div>
  )
}

export default App
