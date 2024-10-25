import { Base } from "./Base";
import { Categoria } from "./Categoria";
import { Marca } from "./Marca";
import { TipoEnvase } from "./TipoEnvase";
import { UnidadMedida } from "./UnidadMedida";

export class Producto extends Base {
  nombreProducto: string = "";
  descripcion: string = "";
  cantidadPorEnvase: number = 0;
  esSinTacc: boolean = false;
  tipoEnvase: TipoEnvase | null = null;
  categoria: Categoria | null = null;
  marca: Marca | null = null;
  unidadMedida: UnidadMedida | null = null;
}

const aliasAtributos: Record<keyof (Base & Producto), string> = {
  id: "Id",
  categoria: "Categoría",
  nombreProducto: "Nombre",
  marca: "Marca",
  unidadMedida: "U. M.",
  eliminado: "Eliminado",
  descripcion: "Descripción",
  cantidadPorEnvase: "Cantidad",
  esSinTacc: "Sin TACC",
  tipoEnvase: "Presentación"
}
