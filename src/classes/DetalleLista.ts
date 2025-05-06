import { Base } from "./Base";
import { Lista } from "./Lista";
import { Producto } from "./Producto";

export class DetalleLista extends Base {
    cantidadAComprar: number = 0;
    cantidadComprada: number = 0;
    precio: number = 0;
    producto: Producto | null = null;
    lista: Lista | null = null;
}

const aliasAtributos: Record<keyof (Base & DetalleLista), string> = {
    id: "Id",
    eliminado: "Eliminado",
    cantidadAComprar: "Cantidad necesaria",
    cantidadComprada: "Cantidad comprada",
    producto: "Producto",
    precio: "Precio",
    lista: "Lista"
}