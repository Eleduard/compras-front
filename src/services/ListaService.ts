import { Lista } from "../classes/Lista";

export const crearLista = async (lista: Lista) => {
  const response = await fetch("http://localhost:8080/listas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lista),
  });

  if (!response.ok) {
    throw new Error("Error al crear la lista");
  }

  return await response.json();
}