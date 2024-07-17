import { useEffect, useState } from "react";

export const useFetch = (url: string | URL | Request) => {
  const [data, setData] = useState(null);
  const [pendiente, setPendiente] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getData(url: string | URL | Request) {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw {
            err: true,
            status: resp.status,
            statusText: resp.statusText || "Error desconocido"
          };
        }

        const datos = await resp.json();

        setData(datos);
        setPendiente(false);
      } catch (err) {
        setPendiente(false);
        setError(err);
      }
    }

    getData(url);
  }, []);

  return { data, pendiente, error };
};
