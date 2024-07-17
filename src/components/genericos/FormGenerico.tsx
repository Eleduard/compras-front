import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState, ChangeEvent } from "react";

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

export function FormularioGenerico<T extends object>({
  instancia,
  alias,
  onSubmit,
  camposAMostrar
}: FormularioGenericoProps<T>) {
  const [valores, setValores] = useState(instancia);

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

  const atributos = obtenerNombresYTipos(instancia, alias, camposAMostrar);

  return (
    <Dialog maxWidth="sm" fullWidth open={false}>
      <DialogTitle>{instancia.constructor.name}</DialogTitle>
      <DialogContent>
        {
          atributos.map(({ nombre, tipo, alias }) => {
            <TextField autoFocus margin="dense" id={nombre.toString()} label={alias} type={tipo === "boolean" ? "checkbox" : "text"} fullWidth value={tipo === "boolean" ? undefined : (valores as any)[nombre]} onChange={manejarCambio} />
          })
        }
      </DialogContent>
    </Dialog>
    
  );
}

/*
<form onSubmit={manejarEnvio}>
      {atributos.map(({ nombre, tipo, alias }) => (
        <div key={String(nombre)}>
          <label>
            {alias}:
            <input
              type={tipo === "boolean" ? "checkbox" : "text"}
              name={String(nombre)}
              value={tipo === "boolean" ? undefined : (valores as any)[nombre]}
              checked={
                tipo === "boolean" ? (valores as any)[nombre] : undefined
              }
              onChange={manejarCambio}
            />
          </label>
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
     */
