import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import jwtDecode from "jwt-decode";
import logo from '../assets/sofapp-logo.svg';

function CustomNavbar() {
  const { token, cerrarSesion } = useContext(UserContext);
  const decodedToken = token ? jwtDecode(token) : null;
  const nombreUsuario = decodedToken ? decodedToken.nombre : null;
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/home">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top me-2"
            alt="Sofapp logo"
          />
          Sofapp
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/products">Productos</Nav.Link>
          <Nav.Link href="/politics">Políticas</Nav.Link>

        </Nav>
        <Nav>
          {!token ? (
            <>
              <Nav.Link href="/register" className='d-flex align-items-center'>Registro</Nav.Link>
              <Button variant="warning">
                <Nav.Link href="/login">Iniciar sesión</Nav.Link>
              </Button>
            </>
          ) : (
            <>
              <Nav.Link href="/profile">Perfil</Nav.Link>
              <Nav.Link href="/CreatePost">Crear Publicación</Nav.Link>
              <Nav.Link href="/productCard">Mis Productos</Nav.Link>
              <div className="navbar-text me-3">
                Bienvenido, <div>{nombreUsuario}</div>
              </div>
              <Button variant="danger" onClick={cerrarSesion}>
                Cerrar sesión
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default CustomNavbar;