import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Container, Row, Col, Dropdown, Stack, Card, Button } from "react-bootstrap";

const Products = () => {
  const { fetchProductos, fetchProductosByMarca, fetchProductosByTipo, fetchProductosByCuerpo } = useContext(UserContext);
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
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


    if (marcaSeleccionada || tipoSeleccionado || cuerpoSeleccionado) {
      cargarProductosFiltrados();
    }
  }, [marcaSeleccionada, tipoSeleccionado, cuerpoSeleccionado]);

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
            
            <Dropdown onSelect={(eventKey) => setMarcaSeleccionada(eventKey)}>
              <Dropdown.Toggle variant="success">
                {marcaSeleccionada || "Marca"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Almore">Almore</Dropdown.Item>
                <Dropdown.Item eventKey="DIB">DIB</Dropdown.Item>
                <Dropdown.Item eventKey="Divano">Divano</Dropdown.Item>
                <Dropdown.Item eventKey="Elegant">Elegant</Dropdown.Item>
                <Dropdown.Item eventKey="Masel">Masel</Dropdown.Item>
                <Dropdown.Item eventKey="Rosen">Rosen</Dropdown.Item>
                <Dropdown.Item eventKey="Spazzio">Spazzio</Dropdown.Item>
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
                  {/* <Card.Text>{producto.detalle}</Card.Text> */}
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
