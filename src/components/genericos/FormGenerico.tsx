import React, { useState, ChangeEvent } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type AtributosConTiposYAlias<T> = {
  [K in keyof T]: { nombre: K; tipo: string; alias: string };
};

type FormularioGenericoProps<T extends object> = {
  instancia: T;
  alias: Record<keyof T, string>;
  onSubmit: (valores: T) => void;
  camposAMostrar?: (keyof T)[];
};

function obtenerNombresYTipos<T extends object>(
  obj: T,
  alias: Record<keyof T, string>,
  camposAMostrar?: (keyof T)[]
): AtributosConTiposYAlias<T>[keyof T][] {
  return Object.keys(obj)
    .filter((key) => !camposAMostrar || camposAMostrar.includes(key as keyof T))
    .map((key) => ({
      nombre: key as keyof T,
      tipo: typeof (obj as any)[key],
      alias: alias[key as keyof T],
    }));
}

const { register, formState: {errors}, handleSubmit } = useForm();

export function FormularioGenerico<T extends object>({
  instancia,
  alias,
  onSubmit,
  camposAMostrar,
}: FormularioGenericoProps<T>) {
  const [valores, setValores] = useState(instancia);
  const atributos = obtenerNombresYTipos(instancia, alias, camposAMostrar);

  const manejarCambio = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = evento.target;
    setValores((prevValores) => ({
      ...prevValores,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const manejarEnvio = (evento: React.FormEvent) => {
    evento.preventDefault();
    onSubmit(valores);
  };

  return (
    <Container>
      <header className="h2">{instancia.constructor.name}</header>
      <Form onSubmit={manejarEnvio}>
        {atributos.reverse().map(({ nombre, tipo, alias }) => (
          <Form.Group className="col-4 mb-2" key={nombre.toString()}>
            {tipo === "boolean" ? (
              <Form.Check type="checkbox" label={alias} name={nombre.toString()} checked={(valores as any)[nombre]} onChange={manejarCambio} />
            ) : (
              <>
                <Form.Label>{alias}</Form.Label>
                <Form.Control type={tipo==='number' ? 'number' : 'text'} name={nombre.toString()} value={(valores as any)[nombre]} onChange={manejarCambio} />
              </>
            )}
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">Agregar</Button>
      </Form>
    </Container>
  );
}
