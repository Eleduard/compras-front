import { Marca } from "../classes/Marca";

export const getMarcaXId = async (id: number) => {
  try {
    const resp = await fetch("http://localhost:8080/marcas/" + id);

    if (!resp.ok) {
      throw new Error("No se encuentra el registro.");
    }

    const marca = resp.json;
		console.log("Registro creado con éxito.")
    return marca;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const crearMarca = async (nuevaMarca: Marca) => {
  try {
    const resp = await fetch("http://localhost:8080/marcas", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(nuevaMarca),
    });

    if (!resp.ok) {
      throw new Error("Error al crear la marca.");
    }
  } catch (error) {
    console.error(error);
  }
};
