import { Base } from "./Base";
import { Categoria } from "./Categoria";

export class Subcategoria extends Base {
  nombreSubcategoria: string = "";
  categoriaPadre: Categoria | null = null;
}