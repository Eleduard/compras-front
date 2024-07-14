import { Base } from "./Base";
import { Categoria } from "./Categoria";

export class Subcategoria extends Base {
  nombreSubcategoria: string = "";
  categoriaPadre: Categoria | null = null;
}

const aliasAtributos: Record<keyof (Base & Subcategoria), string> = {
  id: "Id",
  nombreSubcategoria: "Nombre",
  categoriaPadre: "Categoría",
  eliminado: "Eliminado"
}