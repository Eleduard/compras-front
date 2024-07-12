import { Base } from "./Base";
import { Producto } from "./Producto";

export class Compra extends Base {
	fecha: Date = new Date();
	precio: number = 0;
	cantidad: number = 0;
	productos: Producto[] = []
}