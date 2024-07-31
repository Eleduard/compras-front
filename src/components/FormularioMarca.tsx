import { Marca } from "../classes/Marca";
import { crearMarca } from "../services/MarcaService";
import { FormularioGenerico } from "./genericos/FormGenerico";

const aliasAtributos: Record<keyof (Marca), string> = {
    id: "Id",
    eliminado: "Eliminado",
    nombreMarca: "Nombre"
}

export const FormularioMarca = () => {
    const marca = new Marca();

    const manejarEnvio = async (valores: Marca) => {
        await crearMarca(valores);
        console.log("Valores enviados:", valores);
    }

    return(
        <FormularioGenerico instancia={marca} alias={aliasAtributos} onSubmit={manejarEnvio}
        camposAMostrar={["eliminado", "nombreMarca"]} />
    )
}