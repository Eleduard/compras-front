import { Base } from "./Base";

export class UnidadMedida extends Base {
  denominacion: string = "";
  abreviatura: string = ""
}

const aliasAtributos: Record<keyof (Base & UnidadMedida), string> = {
  id: "Id",
  denominacion: "Denominación",
  eliminado: "Eliminado",
  abreviatura: "Abreviatura"
}
