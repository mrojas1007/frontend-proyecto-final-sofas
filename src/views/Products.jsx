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

// Cargar productos filtrados cuando se selecciona un filtro
useEffect(() => {
  const cargarProductosFiltrados = async () => {
    setLoading(true);
    try {
      let data = [];
      
      if (marcaSeleccionada) {
        data = await fetchProductosByMarca(marcaSeleccionada);
      } else if (tipoSeleccionado) {
        data = await fetchProductosByTipo(tipoSeleccionado);
      } else if (cuerpoSeleccionado) {
        data = await fetchProductosByCuerpo(cuerpoSeleccionado);
      } else {
        // Si no hay filtros seleccionados, carga todos los productos nuevamente
        data = await fetchProductos();
      }

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

  
  // Solo ejecutamos la búsqueda si hay algún filtro seleccionado
  if (marcaSeleccionada || tipoSeleccionado || cuerpoSeleccionado) {
    cargarProductosFiltrados();
  }
}, [marcaSeleccionada, tipoSeleccionado, cuerpoSeleccionado]);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center">Productos disponibles</h1>
      <p className="text-center">
        Encuentra el sofá que buscas y haz clic en "Ver Detalles" para más información.
      </p>

      <Container id="filtros" className="mb-3">
  <Stack direction="horizontal" gap={2} className="justify-content-center">
    Filtrar por:
    
    <Dropdown onSelect={(eventKey) => setMarcaSeleccionada(eventKey)}>
      <Dropdown.Toggle variant="success">
        {marcaSeleccionada || "Marca"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="Mueblez vintaje">Mueblez vintaje</Dropdown.Item>
        <Dropdown.Item eventKey="Rosen">Rosen</Dropdown.Item>
        <Dropdown.Item eventKey="Ikea">IKEA</Dropdown.Item>
        <Dropdown.Item eventKey="Otra">Otra</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    <Dropdown onSelect={(eventKey) => setTipoSeleccionado(eventKey)}>
      <Dropdown.Toggle variant="success">
        {tipoSeleccionado || "Tipo"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="Sillon">Sillón</Dropdown.Item>
        <Dropdown.Item eventKey="Bergere">Bergere</Dropdown.Item>
        <Dropdown.Item eventKey="Sofa">Sofá</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown onSelect={(eventKey) => setCuerpoSeleccionado(eventKey)}>
      <Dropdown.Toggle variant="success">
        {cuerpoSeleccionado || "Cuerpo"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">1 cuerpo</Dropdown.Item>
        <Dropdown.Item eventKey="2">2 cuerpos</Dropdown.Item>
        <Dropdown.Item eventKey="3">3 cuerpos</Dropdown.Item>
        <Dropdown.Item eventKey="4">4 cuerpos</Dropdown.Item>
        <Dropdown.Item eventKey="5">5 cuerpos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Button
      variant="secondary"
      onClick={() => window.location.reload()}
    >
      Reiniciar Filtros
    </Button>
  </Stack>
</Container>


      <Row className="mb-3">
        {productos.length === 0 ? (
          <p className="text-center w-100">No hay productos disponibles.</p>
        ) : (
          productos.map((producto) => (
            <Col key={producto.id_producto} sm={6} md={4} lg={3} className="">
              <Card className="h-100">
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
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
