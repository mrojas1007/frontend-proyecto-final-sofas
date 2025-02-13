import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Container, Row, Col, Dropdown, Stack, Card, Button } from "react-bootstrap";

const Products = () => {
  const { fetchProductos } = useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await fetchProductos();
        console.log("Datos recibidos en Products.jsx:", data);
        if (Array.isArray(data)) {
          setProductos(data);
        } else {
          throw new Error("La respuesta no es un array válido.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <Container className="mt-5 mb-5">
      <Col>
        <h1 className="text-center">Productos disponibles</h1>
        <p className="text-center">
          Encuentra miles de productos y filtra por marcas, tipos y cantidad de cuerpos, para mayor comodidad.
        </p>
        <Container id="filtros" className="mb-3">
          <Stack direction="horizontal" gap={3} className="justify-content-center">
            Filtrar por:
            <Dropdown>
              <Dropdown.Toggle variant="success">Marca</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Almore</Dropdown.Item>
                <Dropdown.Item>DIB</Dropdown.Item>
                <Dropdown.Item>Divano</Dropdown.Item>
                <Dropdown.Item>Elegant</Dropdown.Item>
                <Dropdown.Item>Masel</Dropdown.Item>
                <Dropdown.Item>Rosen</Dropdown.Item>
                <Dropdown.Item>Spazzio</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success">Tipo</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Sillon</Dropdown.Item>
                <Dropdown.Item>Bergere</Dropdown.Item>
                <Dropdown.Item>Sofa</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success">Cuerpo</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>1 cuerpo</Dropdown.Item>
                <Dropdown.Item>2 cuerpos</Dropdown.Item>
                <Dropdown.Item>3 cuerpos</Dropdown.Item>
                <Dropdown.Item>4 cuerpos</Dropdown.Item>
                <Dropdown.Item>5 cuerpos</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </Container>
      </Col>

      <Row className="mb-3">
        {productos.length === 0 ? (
          <p className="text-center w-100">No hay productos disponibles.</p>
        ) : (
          productos.map((producto) => (
            <Col key={producto.id_producto} sm={6} md={4} lg={3}>
                <Card style={{ width: "18rem", marginBottom: "20px" }}>
                <Card.Img variant="top" src={producto.foto} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.detalle}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col className="text-center align-self-center">
                      ${producto.precio}
                    </Col>
                    <Col>
                    <Button 
                        variant="warning" 
                        onClick={() => navigate(`/product/${producto.id_producto}`)}
                      >
                        Ver Detalles
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
