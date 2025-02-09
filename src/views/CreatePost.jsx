import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

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
            <h1 className='text-center'>Formulario de publicación</h1>
            <Form onSubmit={handleSubmit} className='col-10 col-md-6 mx-auto p-3 border border-dark rounded mt-3 mb-5'>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Row>
                    <Col xs={12} md={4}>
                        <Form.Group className="mb-3" controlId="formColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control as="select" name="color" value={formData.color} onChange={handleChange} required >
                                <option value="">Selecciona</option>
                                <option value="red">Rojo</option>
                                <option value="blue">Azul</option>
                                <option value="green">Verde</option>
                                <option value="yellow">Amarillo</option>
                                <option value="black">Negro</option>
                                <option value="white">Blanco</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formWidth">
                            <Form.Label>Ancho</Form.Label>
                            <Form.Control type="text" name="width" value={formData.width} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formHeight">
                            <Form.Label>Alto</Form.Label>
                            <Form.Control type="text" name="height" value={formData.height} onChange={handleChange} required />
                        </Form.Group></Col>
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
                            <Form.Control as="select" name="type" value={formData.type} onChange={handleChange} required >
                                <option value="">Selecciona</option>
                                <option value="sofa">Sofá</option>
                                <option value="sillon">Sillón</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Label>Cuerpo</Form.Label>
                            <Form.Control as="select" name="body" value={formData.body} onChange={handleChange} required >
                                <option value="">Selecciona</option>
                                <option value="1 cuerpo">1 cuerpo</option>
                                <option value="2 cuerpos">2 cuerpos</option>
                                <option value="3 cuerpos">3 cuerpos</option>
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
                            <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col className='d-flex align-items-end'>
                        <Button variant="secondary" onClick={handleCancel} className='me-2'>
                            Cancelar
                        </Button>
                    </Col>
                    <Col className='d-flex align-items-end'>
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