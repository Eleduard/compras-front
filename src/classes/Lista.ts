import { Base } from "./Base";

export class Lista extends Base {
	fecha: Date = new Date();
}

const aliasAtributos: Record<keyof (Base & Lista), string> = {
	id: "Id",
	eliminado: "Eliminado",
	fecha: "Fecha de compra"
}
