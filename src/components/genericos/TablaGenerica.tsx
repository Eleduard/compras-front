import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Table } from "react-bootstrap";

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
    
      <Table striped bordered hover>
        <thead>
          <tr>
            {atributos.reverse().map(({ nombre, alias }) => (
              <th key={nombre.toString()}>{alias}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {valores.reverse().map((row, rowIndex) => (
            <tr key={rowIndex}>
              {atributos.map(({ nombre }) => (
                <td key={nombre.toString()}>
                  {(row as any)[nombre]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
  );
}
