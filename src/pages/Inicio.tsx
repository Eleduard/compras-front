import { Col } from "react-bootstrap";
import { DashCard } from "../components/DashCard";
import ListaCategorias from "../components/ListaCategorias";

export const Inicio = () => {
  return (
    <>
      <Col md={4}>
        <ListaCategorias />
      </Col>
      <Col md={4}>
        <DashCard />
      </Col>
    </>
  );
};
