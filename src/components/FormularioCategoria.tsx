import { Base } from "../classes/Base";
import { Categoria } from "../classes/Categoria";
import { FormularioGenerico } from "./genericos/FormGenerico";

const aliasAtributos: Record<keyof (Categoria), string> = {
    id: "Id",
    eliminado: "Eliminado",
    nombreCategoria: "Nombre"
}

export const FormularioCategoria = () => {
    const categoria1 = new Categoria();
    return(
        <FormularioGenerico instancia={categoria1} alias={aliasAtributos} onSubmit={() => console.log("Hola")}
        camposAMostrar={["eliminado", "nombreCategoria"]} />
    )
}