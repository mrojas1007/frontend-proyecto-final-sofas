import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const CreatePost = () => {
  const { fetchCrearProducto, id_usuario } = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [warning, setWarning] = useState("");

  console.log("ID del usuario en CreatePost:", id_usuario);

  const [formData, setFormData] = useState({
    name: "",
    color: "",
    width: "",
    height: "",
    brand: "",
    type: "",
    body: "",
    description: "",
    price: "",
    stock: 1, // Por defecto, un producto tiene 1 de stock
    photo: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.length > 45) {
      setWarning("⚠️ Máximo 45 caracteres permitidos");
    } else {
      setWarning("");
      setNombre(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.color ||
      !formData.width ||
      !formData.height ||
      !formData.brand ||
      !formData.type ||
      !formData.body ||
      !formData.description ||
      !formData.price ||
      !formData.photo
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!id_usuario) {
      setError("Error: No se encontró el usuario autenticado");
      return;
    }

    // Convertir los valores correspondientes a número
    const productData = {
      id_usuario,
      nombre: formData.name,
      marca: formData.brand,
      tipo: formData.type,
      cuerpo: parseInt(formData.body, 10),
      alto: parseFloat(formData.height),
      ancho: parseFloat(formData.width),
      precio: parseFloat(formData.price),
      foto: formData.photo,
      detalle: formData.description,
      stock: formData.stock,
      color: formData.color,
    };

    // Llamar a la función del contexto para enviar la solicitud
    const response = await fetchCrearProducto(productData);
    console.log("Datos del producto a enviar:", productData);
    if (response && response.msg) {
      alert("Producto agregado con éxito!");
      setFormData({
        name: "",
        color: "",
        width: "",
        height: "",
        brand: "",
        type: "",
        body: "",
        description: "",
        price: "",
        stock: 1,
        photo: "",
      });
      setError("");
    } else {
      setError("Hubo un error al agregar el producto");
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      color: "",
      width: "",
      height: "",
      brand: "",
      type: "",
      body: "",
      description: "",
      price: "",
      stock: 1,
      photo: "",
    });
    setError("");
  };
  const colores = [
    { nombre: "Negro", hex: "#000000" },
    { nombre: "Blanco", hex: "#FFFFFF" },
    { nombre: "Gris", hex: "#808080" },
    { nombre: "Rojo", hex: "#FF0000" },
    { nombre: "Verde", hex: "#00FF00" },
    { nombre: "Azul", hex: "#0000FF" },
    { nombre: "Amarillo", hex: "#FFFF00" },
    { nombre: "Naranja", hex: "#FFA500" },
    { nombre: "Rosa", hex: "#FFC0CB" },
    { nombre: "Morado", hex: "#800080" },
    { nombre: "Marrón", hex: "#8B4513" },
    { nombre: "Celeste", hex: "#87CEEB" },
    { nombre: "Turquesa", hex: "#40E0D0" },
    { nombre: "Beige", hex: "#F5F5DC" },
    { nombre: "Lima", hex: "#00FF00" },
    { nombre: "Lavanda", hex: "#E6E6FA" },
    { nombre: "Dorado", hex: "#FFD700" },
    { nombre: "Plateado", hex: "#C0C0C0" },
    { nombre: "Coral", hex: "#FF7F50" },
    { nombre: "Vino", hex: "#800000" },
  ];
  const [colorSeleccionado, setColorSeleccionado] = useState(colores[0]);
  const [mostrarColores, setMostrarColores] = useState(false);

  const handleColorClick = (color) => {
    setColorSeleccionado(color);
    setMostrarColores(false);
  };

  return (
    <Container>
      <h1 className="text-center">Formulario de publicación</h1>
      <Form
        onSubmit={handleSubmit}
        className="col-10 col-md-6 mx-auto p-3 border border-dark rounded mt-3 mb-5"
      >
        {error && <p className="text-danger">{error}</p>}

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={50}
          />
          {warning && <p style={{ color: "orange" }}>{warning}</p>}
        </Form.Group>

        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="formColor">
              {/* codigo*/}
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Cuadro del color seleccionado */}

                <Form.Label>Selecciona un Color:</Form.Label>
                <div
                  onClick={() => setMostrarColores(!mostrarColores)}
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: colorSeleccionado.hex,
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  title="Seleccionar color"
                ></div>

                {/* Panel desplegable con los colores */}
                {mostrarColores && (
                  <div
                    style={{
                      position: "absolute",
                      top: "40px",
                      left: "0",
                      background: "#fff",
                      border: "1px solid #ddd",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                      padding: "10px",
                      display: "grid",
                      gridTemplateColumns: "repeat(5, 30px)", // 5 colores por fila
                      gap: "5px",
                      zIndex: 1000,
                      borderRadius: "5px",
                    }}
                  >
                    {colores.map((color) => (
                      <div
                        key={color.nombre}
                        onClick={() => handleColorClick(color)}
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: color.hex,
                          border: "1px solid #ddd",
                          cursor: "pointer",
                          borderRadius: "3px",
                        }}
                        title={color.nombre}
                      ></div>
                    ))}
                  </div>
                )}

                {/* Campo de texto con el nombre del color seleccionado */}
                <Form.Control
                  type="text"
                  value={colorSeleccionado.nombre}
                  readOnly
                  style={{ marginTop: "10px" }}
                />
              </div>

              {/* codigo*/}
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formWidth">
              <Form.Label>Ancho (cm)</Form.Label>
              <Form.Control
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formHeight">
              <Form.Label>Alto (cm)</Form.Label>
              <Form.Control
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBrand">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona</option>
                <option value="sofa">Sofá</option>
                <option value="sillon">Sillón</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBody">
              <Form.Label>Cuerpo</Form.Label>
              <Form.Control
                as="select"
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona</option>
                <option value="1">1 cuerpo</option>
                <option value="2">2 cuerpos</option>
                <option value="3">3 cuerpos</option>
                <option value="4">4 cuerpos</option>
                <option value="5">5 cuerpos</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formPhoto">
          <Form.Label>Foto (URL)</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row>
          <Col className="d-flex align-items-end">
            <Button variant="secondary" onClick={handleCancel} className="me-2">
              Cancelar
            </Button>
          </Col>
          <Col className="d-flex align-items-end">
            <Button variant="success" type="submit">
              Publicar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreatePost;
