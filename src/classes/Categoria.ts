import { Base } from "./Base";

export class Categoria extends Base {
  nombreCategoria: string = "";
}

const aliasAtributos: Record<keyof (Base & Categoria), string> = {
  id: "Id",
  eliminado: "Eliminado",
  nombreCategoria: "Nombre"
}
