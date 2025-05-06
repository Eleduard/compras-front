import "bootstrap/dist/css/bootstrap.min.css";
import { MasterPage } from "./pages/MasterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormularioCategoria } from "./components/FormularioCategoria";
import { Inicio } from "./pages/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterPage />}>
          <Route index element={<Inicio />} />
          <Route path="/formcategoria" element={<FormularioCategoria />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
