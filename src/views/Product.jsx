import React from 'react';
import { Container, Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Product = ({ name = "Ítem", description = "Lorem ipsum", price = 10000, imageUrl = "https://placehold.co/100" }) => {
    return (
        <Container className='mt-4'>
            <Row className="mb-5">
                <Col className="justify-content-center">
                    <Card className="product">
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={imageUrl} alt={name} className="product-image" />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title className="product-name">{name}</Card.Title>
                                    <Card.Text className="product-description">{description}</Card.Text>
                                    <Card.Text className="product-price">${price}</Card.Text>
                                    <Button variant="success" className="buy-button">Comprar</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <Carousel fade>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <Image src='/src/assets/sofa1.jpg'  className="w-50" />
                        <Image src='/src/assets/sofa2.jpg'  className="w-50" />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <Image src='/src/assets/sofa3.jpg'  className="w-50" />
                        <Image src='/src/assets/sofa1.jpg'  className="w-50" />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <Image src='/src/assets/sofa2.jpg'  className="w-50" />
                        <Image src='/src/assets/sofa3.jpg'  className="w-50" />
                    </div>
                </Carousel.Item>
            </Carousel>

        </Container>
    );
};

export default Product;