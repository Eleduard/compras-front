import { Base } from "./Base";
import { DetalleLista } from "./DetalleLista";

export class Lista extends Base {
	fecha: Date = new Date();
	detalle: DetalleLista[] = [];
}

export const aliasAtributos: Record<keyof (Base & Lista), string> = {
	id: "Id",
	eliminado: "Eliminado",
	fecha: "Fecha de compra",
	detalle: "Detalle",
}
