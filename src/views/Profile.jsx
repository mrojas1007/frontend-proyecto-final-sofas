import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const {
    nombreUsuario,
    apellidoUsuario,
    emailUsuario,
    passUsuario,
    fonoUsuario,
  } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fono: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar la visibilidad de la contraseña

  useEffect(() => {
    setFormData({
      firstName: nombreUsuario,
      lastName: apellidoUsuario,
      email: emailUsuario,
      password: passUsuario,
      fono: fonoUsuario,
    });
  }, [nombreUsuario, apellidoUsuario, emailUsuario, passUsuario, fonoUsuario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Perfil de usuario</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formFono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="fono"
                value={formData.fono}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                  }}
                >
                  <i
                    className={`fa-solid ${
                      showPassword ? "fa-eye" : "fa-eye-slash"
                    }`}
                  ></i>
                </Button>
              </InputGroup>
            </Form.Group>

            {/* <Button variant="primary" type="submit">
              Guardar Cambios
            </Button> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
