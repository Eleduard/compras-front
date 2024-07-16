import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, ChangeEvent, useEffect, useRef, forwardRef } from "react";
import { useFetch } from "../../hooks/useFetch";

type AtributosConTiposYAlias<T> = {
  [K in keyof T]: { nombre: K; tipo: string; alias: string };
};

function obtenerNombresYTipos<T extends object>(
  obj: T,
  alias: Record<keyof T, string>
): AtributosConTiposYAlias<T>[keyof T][] {
  return Object.keys(obj).map((key) => ({
    nombre: key as keyof T,
    tipo: typeof (obj as any)[key],
    alias: alias[key as keyof T],
  }));
}

type TablaGenericaProps<T extends object> = {
  constructor: new () => T;
  alias: Record<keyof T, string>;
  onSubmit: (valores: T) => void;
  url: string | URL | Request;
};

export function TablaGenerica<T extends object>({
  constructor,
  alias,
  onSubmit,
  url,
}: TablaGenericaProps<T>) {
  const instancia = new constructor();
  const [valores, setValores] = useState<T[]>([]);
	const fetchValues = useFetch(url);
  const TableCellConRef = forwardRef((props, ref) => (
    <TableCell ref={ref} {...props} />
  ));
  const columnaRef = useRef(null);

  useEffect(() => {
		
		if(fetchValues.data) {
			setValores(fetchValues.data);
		} else {
			console.log(fetchValues.error)
		}
		}, [fetchValues.data, fetchValues.error]);

  /*const handleChange = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = evento.target;
    setValores((prevValores) => ({
      ...prevValores,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const manejarEnvio = (evento: React.FormEvent) => {
    evento.preventDefault();
    onSubmit(valores);
  };*/

  const atributos = obtenerNombresYTipos(instancia, alias);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {atributos.map(({ nombre, tipo, alias }) => (
              <TableCellConRef key={nombre.toString() ref={columnaRef}}>{alias}</TableCellConRef>
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
