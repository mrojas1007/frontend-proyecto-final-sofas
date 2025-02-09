import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        name: '',
        color: '',
        width: '',
        height: '',
        brand: '',
        type: '',
        body: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            color: '',
            width: '',
            height: '',
            brand: '',
            type: '',
            body: '',
            description: '',
            price: ''
        });
    };

    return (
        <Container>
            <h1>Formulario de publicación</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formColor">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        as="select"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona</option>
                        <option value="red">Rojo</option>
                        <option value="blue">Azul</option>
                        <option value="green">Verde</option>
                        <option value="yellow">Amarillo</option>
                        <option value="black">Negro</option>
                        <option value="white">Blanco</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formWidth">
                    <Form.Label>Ancho</Form.Label>
                    <Form.Control
                        type="text"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formHeight">
                    <Form.Label>Alto</Form.Label>
                    <Form.Control
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBrand">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formType">
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

                <Form.Group controlId="formBody">
                    <Form.Label>Cuerpo</Form.Label>
                    <Form.Control
                        as="select"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona</option>
                        <option value="1 cuerpo">1 cuerpo</option>
                        <option value="2 cuerpos">2 cuerpos</option>
                        <option value="3 cuerpos">3 cuerpos</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="secondary" onClick={handleCancel}>
                    Cancelar
                </Button>
                <Button variant="primary" type="submit">
                    Publicar
                </Button>
            </Form>
        </Container>
    );
};

export default CreatePost;