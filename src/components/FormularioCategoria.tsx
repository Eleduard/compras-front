import { useState } from "react";
import { Categoria } from "../classes/Categoria";
import { crearCategoria } from "../services/CategoriaService";
import { FormularioGenerico } from "./genericos/FormGenerico";
import { Alert } from "react-bootstrap";

const aliasAtributos: Record<keyof Categoria, string> = {
  id: "Id",
  eliminado: "Eliminado",
  nombreCategoria: "Nombre",
};

export const FormularioCategoria = () => {
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const categoria = new Categoria();

  const manejarEnvio = async (valores: Categoria) => {
    try {
      await crearCategoria(valores);
      setMensaje("Categoría creada con éxito.");
      setError(null);
      console.log("Valores enviados:", valores);
    } catch (err) {
      setError("Error al crear la categoría.");
      setMensaje(null);
    }
  };

  return (
    <div>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <FormularioGenerico
        instancia={categoria}
        alias={aliasAtributos}
        onSubmit={manejarEnvio}
        camposAMostrar={["eliminado", "nombreCategoria"]}
      />
    </div>
  );
};
