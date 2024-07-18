import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
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
  camposAMostrar,
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
    <Box sx={{
      maxWidth: 400,
      maxHeight: 200,
      marginX: 50
    }}>
      <Typography variant="h2" component="header" mb={5} maxWidth="sm">
        {instancia.constructor.name}
      </Typography>

      {atributos.reverse().map(({ nombre, tipo, alias }) => (
        
          <Grid container direction="row" spacing={2} justifyContent="center">
            <Grid item>
              {tipo === "boolean" ? (
                <>
                  <Typography variant="body1" component="label">
                    ¿{alias}?
                  </Typography>
                  <Checkbox value={false} aria-label={alias} />
                </>
              ) : (
                <Input error={false} name={alias} />
              )}
            </Grid>
          </Grid>
        
      ))}
    </Box>
  );
}
