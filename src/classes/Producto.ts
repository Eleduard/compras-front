import { Base } from "./Base";
import { Categoria } from "./Categoria";

export class Producto extends Base {
  categoria: Categoria | null = null;
  eliminado: boolean = false;
  descripcion: string = "";
  esSinTacc: boolean = false;
  
}

const aliasAtributos: Record<keyof (Base & Producto), string> = {
  id: "Id",
  categoria: "Categoría",
  eliminado: "Eliminado",
  descripcion: "Descripción",
  esSinTacc: "Sin TACC",
}
