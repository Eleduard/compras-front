import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import React, { ReactNode } from "react";
import { Tarjeta } from "../components/Card";

interface MasterPageProps {
  children?: ReactNode;
}

export const MasterPage: React.FC<MasterPageProps> = () => {
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">EleduArg</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              <Nav.Link href="#link">Cargar compra</Nav.Link>
              <NavDropdown title="Configuración" id="basic-nav-dropdown">
                <NavDropdown.Item href="/formcategoria">
                  Agregar categoría
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Agregar marca
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Agregar producto
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Configuración general
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="p-5">
      <Tarjeta imagen="public/pexels-anna-nekrashevich-6801648.jpg" titulo="Dashboard" texto="Some quick example text to build on the card title and make up the
          bulk of the card's content."/>
      </Row>
    </Container>
  );
};
