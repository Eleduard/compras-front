import 'bootstrap/dist/css/bootstrap.min.css';
import { Categoria } from './classes/Categoria'
import { Marca } from './classes/Marca'
import { FormularioCategoria } from './components/FormularioCategoria'
import { TablaGenerica } from './components/genericos/TablaGenerica'
import { FormularioMarca } from './components/FormularioMarca';
import { MasterPage } from './pages/MasterPage';

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
    /*<>
      <FormularioCategoria />
      <FormularioMarca />
      <TablaGenerica constructor={Categoria} alias={aliasCategoria} url="http://localhost:8080/categorias" camposAMostrar={["nombreCategoria", "eliminado"]}/>
    </>*/
    <>
      <MasterPage />
    </>
  )
}

export default App
