import { Categoria } from "../classes/Categoria";

export const getCategoriaXId = async (id: number): Promise<Categoria> => {
  try {
    const resp = await fetch("http://localhost:8080/categorias/" + id);

    if (!resp.ok) {
      throw new Error("No se encuentra el registro.");
    }

    const categoria = await resp.json();
    return categoria;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCategoriasActivas = async (): Promise<Categoria[]> => {
  try {
    const resp = await fetch("http://localhost:8080/categorias");

    if (!resp.ok) {
      throw new Error("Error al obtener las categorías.");
    }

    const categorias: Categoria[] = await resp.json();
    return categorias.filter((categoria) => !categoria.eliminado);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const crearCategoria = async (
  nuevaCategoria: Categoria
): Promise<void> => {
  try {
    const resp = await fetch("http://localhost:8080/categorias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaCategoria),
    });
    if (!resp.ok) {
      throw new Error("Error al crear la categoría");
    }
  } catch (error) {
    throw error;
  }
};
