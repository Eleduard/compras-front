import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { DashboardCard } from "../components/Card";

export function MasterPage() {
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">EleduArg</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#link">Cargar compra</Nav.Link>
              <NavDropdown title="Configuración" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Agregar categoría</NavDropdown.Item>
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
      <DashboardCard />
    </Container>
  );
}
