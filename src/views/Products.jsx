import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Container, Row, Col, Dropdown, Stack, Card, Button } from "react-bootstrap";
import "../css/Products.css"; // Importamos el archivo CSS

const Products = () => {
  const { fetchProductos, fetchProductosByMarca, fetchProductosByTipo, fetchProductosByCuerpo } = useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
  const [cuerpoSeleccionado, setCuerpoSeleccionado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      try {
        const data = await fetchProductos();
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
      <h1 className="text-center">Productos disponibles</h1>
      <p className="text-center">
        Encuentra miles de productos y filtra por marcas, tipos y cantidad de cuerpos, para mayor comodidad.
      </p>
      <Row className="mb-3">
        {productos.length === 0 ? (
          <p className="text-center w-100">No hay productos disponibles.</p>
        ) : (
          productos.map((producto) => (
            <Col key={producto.id_producto} sm={6} md={4} lg={3}>
              <div className="ContainerProducts"> {/* Nuevo contenedor para aplicar estilos */}
                <Card className="LaCard">
                <Card.Body>
                  <Card.Title className="text-center">{producto.nombre}</Card.Title>
                  </Card.Body>
                  <Card.Img variant="top" src={producto.foto} className="product-image" />
                  
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
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
