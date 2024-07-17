import './App.css'
import { Categoria } from './classes/Categoria'
import { Marca } from './classes/Marca'
import { FormularioCategoria } from './components/FormularioCategoria'
import { TablaGenerica } from './components/genericos/TablaGenerica'

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
      camposAMostrar={["nombreCategoria"]}/>
      <TablaGenerica constructor={Marca} alias={aliasMarca} url={"http://localhost:8080/marcas"}
      camposAMostrar={["nombreMarca"]} />
      <FormularioCategoria />
    </>
  )
}

export default App
