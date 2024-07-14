import { Base } from "./Base";

export class Marca extends Base {
  nombreMarca: string = "";
}

const aliasAtributos: Record<keyof (Base & Marca), string> = {
  id: "Id",
  eliminado: "Eliminado",
  nombreMarca: "Marca"
}
