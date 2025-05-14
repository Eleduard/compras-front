import { useState } from "react";
import { aliasAtributos, Lista } from "../classes/Lista";
import { Alert } from "react-bootstrap";
import { FormularioGenerico } from "./genericos/FormGenerico";
import { crearLista } from "../services/ListaService";

export const FormularioLista = () => {
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const lista = new Lista();
  
  const manejarEnvio = async (valores: Lista) => {
    try {
      await crearLista(valores);
      setMensaje("Lista creada con éxito.");
      setError(null);
      console.log("Valores enviados:", valores);
    } catch (err) {
      setError("Error al crear la lista.");
      setMensaje(null);
    }
  };
  
  return (
    <div>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <FormularioGenerico
        instancia={lista}
        alias={aliasAtributos}
        onSubmit={manejarEnvio}
        camposAMostrar={["eliminado", "fecha", "detalle"]}
      />
    </div>
  );
}