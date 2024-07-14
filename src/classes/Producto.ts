import { Base } from "./Base";
import { Compra } from "./Compra";
import { Marca } from "./Marca";
import { Subcategoria } from "./Subcategoria";
import { UnidadMedida } from "./UnidadMedida";

export class Producto extends Base {
  nombreProducto: string = "";
  subcategoria: Subcategoria | null = null;
  marca: Marca | null = null;
  unidadMedida: UnidadMedida | null = null;
}

const aliasAtributos: Record<keyof (Base & Producto), string> = {
  id: "Id",
  subcategoria: "Subcategoría",
  nombreProducto: "Nombre",
  marca: "Marca",
  unidadMedida: "U. M.",
  eliminado: "Eliminado" 
}
