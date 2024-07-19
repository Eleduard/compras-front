import { Subcategoria } from "../classes/Subcategoria";

export const crearSubcategoria = async (
    nuevaSubcategoria: Subcategoria
  ): Promise<void> => {
      try {
          const resp = await fetch("http://localhost:8080/subcategorias", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(nuevaSubcategoria)
          });
          if(!resp.ok) {
              throw new Error("Error al crear la subcategoría");
          }
      } catch (error) {
          console.error(error, "1")
      }
  };