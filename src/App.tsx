import './App.css'
import { Base } from './classes/Base'
import { Categoria } from './classes/Categoria'
import { Marca } from './classes/Marca'
import { FormularioCategoria } from './components/FormularioCategoria'
import { TablaGenerica } from './components/genericos/GenericGrid'

function App() {
  const aliasCategoria: Record<keyof Categoria, string> = {
    id: "Id",
    nombreCategoria: "Nombre",
    eliminado: "Eliminado"
  }

  const aliasMarca: Record<keyof Marca, string> = {
    id: "Id",
    nombreMarca: "Marca",
    eliminado: "Eliminado"
  }

  return (
    <>
      <TablaGenerica constructor={Categoria} alias={aliasCategoria} url={"http://localhost:8080/categorias"} 
      onSubmit={() => console.log("Hola")} camposAMostrar={["nombreCategoria"]}/>
      <TablaGenerica constructor={Marca} alias={aliasMarca} url={"http://localhost:8080/marcas"}
      onSubmit={() => console.log("Hola")} camposAMostrar={["nombreMarca"]} />
    </>
  )
}

export default App
