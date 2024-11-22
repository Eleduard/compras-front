import "bootstrap/dist/css/bootstrap.min.css";
import { Categoria } from "./classes/Categoria";
import { Marca } from "./classes/Marca";
import { MasterPage } from "./pages/MasterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormularioCategoria } from "./components/FormularioCategoria";
import { Inicio } from "./pages/Inicio";

function App() {
  const aliasCategoria: Record<keyof Categoria, string> = {
    id: "Id",
    nombreCategoria: "Nombre",
    eliminado: "Eliminado",
  };

  const aliasMarca: Record<keyof Marca, string> = {
    id: "Id",
    nombreMarca: "Marca",
    eliminado: "Eliminado",
  };

  return (
    <Router>
      <MasterPage />
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/formcategoria" element={<FormularioCategoria />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
