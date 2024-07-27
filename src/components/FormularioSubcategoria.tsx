import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Subcategoria } from "../classes/Subcategoria";
import { crearSubcategoria } from "../services/SubcategoriaService";
import { Button, Container, Form } from "react-bootstrap";
import { Categoria } from "../classes/Categoria";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getCategoriaXId } from "../services/CategoriaService";

export const FormularioSubcategoria = () => {
  const formulario = useForm<Subcategoria>();
  const { register, control, handleSubmit } = formulario;
  const instSubcategoria = new Subcategoria();
	const [categorias, setCategorias] = useState<Categoria[]>([]);
	const fetchValues = useFetch("http://localhost:8080/categorias");

	useEffect(() => {
		try {
      console.log("Recuperando datos: ", fetchValues)
      fetchValues.data && setCategorias(fetchValues.data);
    } catch {
      console.error(fetchValues.error);
    }
	}, [fetchValues.data, fetchValues.error]);

	const manejarEnvio = async (subcategoria: any) => {
		console.log(subcategoria);
		const categoria: Categoria = await getCategoriaXId(subcategoria.categoriaPadre);
		subcategoria.categoriaPadre = categoria;
		crearSubcategoria(subcategoria);
		console.log(subcategoria);
	}

  return (
    <Container>
      <header className="h2">Subcategoría</header>
      <Form onSubmit={handleSubmit(manejarEnvio)}>
        <Form.Group
          className="col-4 mb-2"
          key={instSubcategoria.nombreSubcategoria}
        >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" {...register("nombreSubcategoria")} />
        </Form.Group>
        <Form.Group
          className="col-4 mb-2"
          key={instSubcategoria.categoriaPadre?.id}
        >
          <Form.Label>Categoria superior</Form.Label>
          <Form.Select {...register("categoriaPadre")}>
						<option key={0} value={0}>(Elija una categoría)</option>
						{
							categorias.map((cat) => (
								<option key={cat.id?.toString()} value={cat.id}>{cat.nombreCategoria}</option>
							))
						}
					</Form.Select>
        </Form.Group>
        <Form.Group
          className="col-4 mb-2"
          key="eliminado"
        >
          <Form.Label>¿Eliminado?</Form.Label>
          <Form.Check type="checkbox" {...register("eliminado")} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
			<DevTool control={control}/>
    </Container>
  );
};

/*const aliasAtributos: Record<keyof (Subcategoria), string> = {
    id: "Id",
    nombreSubcategoria: "Nombre",
    categoriaPadre: "Categoría",
    eliminado: "Eliminado"
  }

export const FormularioSubcategoria = () => {
    const subcategoria = new Subcategoria();

    const manejarEnvio = async (valores: Subcategoria) => {
        await crearSubcategoria(valores);
        console.log("Valores enviados:", valores);
    }

    return(
        <FormularioGenerico instancia={subcategoria} alias={aliasAtributos} onSubmit={manejarEnvio}
        camposAMostrar={["categoriaPadre", "eliminado", "nombreSubcategoria"]} />
    )
}*/
