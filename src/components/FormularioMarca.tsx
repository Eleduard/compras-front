import { useForm } from "react-hook-form";
import { Marca } from "../classes/Marca";
import { crearMarca } from "../services/MarcaService";
import { Button, Form } from "react-bootstrap";

/*const aliasAtributos: Record<keyof (Marca), string> = {
    id: "Id",
    eliminado: "Eliminado",
    nombreMarca: "Nombre"
}*/

export const FormularioMarca = () => {
    //const marca = new Marca();
    const { register, formState: {errors}, handleSubmit } = useForm<Marca>();

    const manejarEnvio = async (valores: Marca) => {
        await crearMarca(valores);
        //console.log("Valores enviados:", valores);
        return
    }

    return(
        <Form onSubmit={handleSubmit(manejarEnvio)}>
            <Form.Group>
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" { ...register('nombreMarca', {required: true}) }></Form.Control>
                {errors?.nombreMarca && <p><small>Campo requerido.</small></p>}
                <Form.Label>¿Eliminar?</Form.Label>
                <Form.Check { ...register('eliminado') }/>
            </Form.Group>
            <Button variant="primary" type="submit">Agregar</Button>
        </Form>
    )
}