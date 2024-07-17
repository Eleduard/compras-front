import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

type AtributosConTiposYAlias<T> = {
  [K in keyof T]: { nombre: K; tipo: string; alias: string };
};

type TablaGenericaProps<T extends object> = {
  constructor: new () => T;
  alias: Record<keyof T, string>;
  url: string | URL | Request;
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

export function TablaGenerica<T extends object>({
  constructor,
  alias,
  url,
  camposAMostrar,
}: TablaGenericaProps<T>) {
  const instancia = new constructor();
  const [valores, setValores] = useState<T[]>([]);
  const fetchValues = useFetch(url);
  const atributos = obtenerNombresYTipos(instancia, alias, camposAMostrar);

  useEffect(() => {
    try {
      console.log("Recuperando datos: ", fetchValues)
      fetchValues.data && setValores(fetchValues.data);
    } catch {
      console.error(fetchValues.error);
    }
  }, [fetchValues.data, fetchValues.error]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {atributos.map(({ nombre, alias }) => (
              <TableCell key={nombre.toString()}>{alias}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {valores.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {atributos.map(({ nombre }) => (
                <TableCell key={nombre.toString()}>
                  {(row as any)[nombre]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
