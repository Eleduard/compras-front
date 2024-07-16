import './App.css'
import { Base } from './classes/Base'
import { Categoria } from './classes/Categoria'
import { FormularioCategoria } from './components/FormularioCategoria'
import { TablaGenerica } from './components/genericos/GenericGrid'

function App() {
  const aliasAtributos: Record<keyof (Base & Categoria), string> = {
    id: "Id",
    eliminado: "Eliminado",
    nombreCategoria: "Nombre"
}
  return (
    <>
      <TablaGenerica constructor={Categoria} alias={aliasAtributos} url={"http://localhost:8080/categorias"} onSubmit={() => console.log("Hola")} />
    </>
  )
}

export default App
