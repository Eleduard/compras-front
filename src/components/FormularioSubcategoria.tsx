import { Subcategoria } from "../classes/Subcategoria";
import { getCategoriaXId } from "../services/CategoriaService";
import { crearSubcategoria } from "../services/SubcategoriaService";
import { FormularioGenerico } from "./genericos/FormGenerico";

const aliasAtributos: Record<keyof (Subcategoria), string> = {
    id: "Id",
    nombreSubcategoria: "Nombre",
    categoriaPadre: "Categoría",
    eliminado: "Eliminado"
  }

export const FormularioSubcategoria = () => {
    const subcategoria = new Subcategoria();

    const manejarEnvio = async (valores: Subcategoria) => {
        await crearSubcategoria(valores);
        console.log("Valores enviados:", valores);
    }

    return(
        <FormularioGenerico instancia={subcategoria} alias={aliasAtributos} onSubmit={manejarEnvio}
        camposAMostrar={["categoriaPadre", "eliminado", "nombreSubcategoria"]} />
    )
}