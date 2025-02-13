import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
                // placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                // placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                // placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                // placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
