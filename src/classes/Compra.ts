import { Base } from "./Base";
import { Producto } from "./Producto";

export class Compra extends Base {
	fecha: Date = new Date();
}

const aliasAtributos: Record<keyof (Base & Compra), string> = {
	id: "Id",
	eliminado: "Eliminado",
	fecha: "Fecha de compra"
}
