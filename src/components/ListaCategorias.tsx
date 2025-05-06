import React, { useEffect, useState } from "react";
import { getCategoriasActivas } from "../services/CategoriaService";
import { Categoria } from "../classes/Categoria";
import { Container, ListGroup, Alert, Spinner } from "react-bootstrap";

const ListaCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasActivas = await getCategoriasActivas();
        setCategorias(categoriasActivas);
      } catch (err) {
        setError("Error al cargar las categorías.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Lista de Categorías</h2>
      <ListGroup>
        {categorias.map((categoria) => (
          <ListGroup.Item key={categoria.id}>{categoria.nombreCategoria}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ListaCategorias;