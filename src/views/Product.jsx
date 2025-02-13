import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchProductoById } = useContext(UserContext);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      const data = await fetchProductoById(id);
      setProducto(data);
    };
    cargarProducto();
  }, [id]);

  if (!producto) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }

  return (
    <Container className="mt-4">
      <Row className="mb-5">
        <Col className="justify-content-center">
          <Card className="product">
            <Row>
              <Col>
                <Card.Img variant="top" src={producto.foto || "placeholder.jpg"} alt={producto.nombre} className="product-image" />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title className="product-name">{producto.nombre}</Card.Title>
                  <Card.Text className="product-description">{producto.detalle}</Card.Text>
                  <Card.Text><strong>Marca:</strong> {producto.marca}</Card.Text>
                  <Card.Text><strong>Tipo:</strong> {producto.tipo}</Card.Text>
                  <Card.Text><strong>Cuerpo:</strong> {producto.cuerpo}</Card.Text>
                  <Card.Text><strong>Color:</strong> {producto.color}</Card.Text>
                  <Card.Text><strong>Ancho:</strong> {producto.ancho} cm</Card.Text>
                  <Card.Text><strong>Alto:</strong> {producto.alto} cm</Card.Text>
                  <Card.Text className="product-price"><strong>Precio:</strong> ${producto.precio}</Card.Text>
                  <Card.Text><strong>Stock:</strong> {producto.stock} </Card.Text>
                  <Button variant="secondary" onClick={() => navigate(-1)}>Volver atrás</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
