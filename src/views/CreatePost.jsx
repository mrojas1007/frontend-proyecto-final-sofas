import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const CreatePost = () => {
    const { fetchCrearProducto, id_usuario } = useContext(UserContext);
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
        stock: 1,  // Por defecto, un producto tiene 1 de stock
        photo: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
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
            color: formData.color
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
                photo: ""
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
            photo: ""
        });
        setError("");
    };

    return (
        <Container>
            <h1 className="text-center">Formulario de publicación</h1>
            <Form onSubmit={handleSubmit} className="col-10 col-md-6 mx-auto p-3 border border-dark rounded mt-3 mb-5">
                {error && <p className="text-danger">{error}</p>}

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Row>
                    <Col xs={12} md={4}>
                        <Form.Group className="mb-3" controlId="formColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control as="select" name="color" value={formData.color} onChange={handleChange} required>
                                <option value="">Selecciona</option>
                                <option value="rojo">Rojo</option>
                                <option value="azul">Azul</option>
                                <option value="cafe">Café</option>
                                <option value="verde">Verde</option>
                                <option value="amarillo">Amarillo</option>
                                <option value="negro">Negro</option>
                                <option value="blanco">Blanco</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formWidth">
                            <Form.Label>Ancho (cm)</Form.Label>
                            <Form.Control type="number" name="width" value={formData.width} onChange={handleChange} required />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formHeight">
                            <Form.Label>Alto (cm)</Form.Label>
                            <Form.Control type="number" name="height" value={formData.height} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBrand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" name="brand" value={formData.brand} onChange={handleChange} required />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formType">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select" name="type" value={formData.type} onChange={handleChange} required>
                                <option value="">Selecciona</option>
                                <option value="sofa">Sofá</option>
                                <option value="sillon">Sillón</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Label>Cuerpo</Form.Label>
                            <Form.Control as="select" name="body" value={formData.body} onChange={handleChange} required>
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
                    <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} required />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formPhoto">
                    <Form.Label>Foto (URL)</Form.Label>
                    <Form.Control type="text" name="photo" value={formData.photo} onChange={handleChange} required />
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
