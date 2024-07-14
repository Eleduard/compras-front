import { Base } from "./Base";
import { Compra } from "./Compra";
import { Producto } from "./Producto";

export class DetalleCompra extends Base {
    precio: number = 0;
	cantidad: number = 0;
    producto: Producto | null = null;
    compra: Compra | null = null;
}

const aliasAtributos: Record<keyof (Base & DetalleCompra), string> = {
    id: "Id",
    eliminado: "Eliminado",
    precio: "Precio unitario",
    cantidad: "Cantidad",
    producto: "Descripción",
    compra: "Compra"
}