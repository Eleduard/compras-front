import { Categoria } from "../classes/Categoria";
import { crearCategoria } from "../services/CategoriaService";
import { FormularioGenerico } from "./genericos/FormGenerico";

const aliasAtributos: Record<keyof (Categoria), string> = {
    id: "Id",
    eliminado: "Eliminado",
    nombreCategoria: "Nombre"
}

export const FormularioCategoria = () => {
    const categoria1 = new Categoria();

    const manejarEnvio = async (valores: Categoria) => {
        await crearCategoria(valores);
        console.log("Valores enviados:", valores);
    }

    return(
        <FormularioGenerico instancia={categoria1} alias={aliasAtributos} onSubmit={manejarEnvio}
        camposAMostrar={["eliminado", "nombreCategoria"]} />
    )
}