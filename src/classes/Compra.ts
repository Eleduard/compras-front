import { Base } from "./Base";
import { Comercio } from "./Comercio";

export class Compra extends Base {
	fecha: Date = new Date();
	comercio: Comercio | null = null;
}

const aliasAtributos: Record<keyof (Base & Compra), string> = {
	id: "Id",
	comercio: "Comercio",
	eliminado: "Eliminado",
	fecha: "Fecha de compra"
}
