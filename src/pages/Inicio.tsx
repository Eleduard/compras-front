import { Col } from "react-bootstrap";
import { DashCard } from "../components/DashCard";
import ListaCategorias from "../components/ListaCategorias";
import { FormularioLista } from "../components/FormularioLista";

export const Inicio = () => {
  return (
    <>
      <Col md={4}>
        <ListaCategorias />
      </Col>
      <Col md={4}>
        <FormularioLista />
      </Col>
    </>
  );
};
