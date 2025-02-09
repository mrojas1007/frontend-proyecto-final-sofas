import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProductCard({ name = "Ítem", price = 10000, img = "https://placehold.co/150" }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={img} />
            <Card.Footer>
                <Row>
                    <Col className='text-center align-self-center'>
                        ${price}
                    </Col>
                    <Col>
                        <Button variant="warning">Comprar</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default ProductCard;