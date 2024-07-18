import { Categoria } from "../classes/Categoria";

export const crearCategoria = async (
  nuevaCategoria: Categoria
): Promise<void> => {
	try {
		const resp = await fetch("http://localhost:8080/categorias", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(nuevaCategoria)
		});
		if(!resp.ok) {
			throw new Error("Error al crear la categoría");
		}
	} catch (error) {
		console.error(error, "1")
	}
};