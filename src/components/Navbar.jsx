import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home"><div className="d-flex align-items-center"><img
          src="/src/assets/sofapp-logo.svg"
          width="50"
          height="50"
          className="d-inline-block align-top me-2"
          alt="Sofapp logo"
        />Sofapp</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="products">Productos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="register" className='d-flex align-items-center'>Registro</Nav.Link>
            <Button variant="warning">
              <Nav.Link eventKey={2} href="login">
                Iniciar sesión
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;