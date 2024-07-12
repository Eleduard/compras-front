import { Base } from "./Base";
import { Compra } from "./Compra";
import { Marca } from "./Marca";
import { Subcategoria } from "./Subcategoria";
import { UnidadMedida } from "./UnidadMedida";

export class Producto extends Base {
  nombreProducto: string = "";
  subcategoria: Subcategoria | null = null;
  compras: Compra[] = [];
  marca: Marca | null = null;
  unidadMedida: UnidadMedida | null = null;
}
