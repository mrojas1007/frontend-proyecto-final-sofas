import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import whatsappIcon from "../assets/whatsapp-line.svg";
import { formatPrice } from "../helpers/helpers";


const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchProductoById, fetchDatosUsuarioPorProducto } =
    useContext(UserContext);
  const [producto, setProducto] = useState(null);
  const [datosUsuario, setDatosUsuario] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      const data = await fetchProductoById(id);
      setProducto(data);
    };
    cargarProducto();
  }, [id]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await fetchDatosUsuarioPorProducto(id);
      setDatosUsuario(datos);
    };
    obtenerDatos();
  }, [id]);

  if (!producto) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }

  return (
    <Container className="mt-4">
      <Row className="mb-5">
        <Col className="justify-content-center">
          <div>
            <Card className="product">
              <Row>
                <Col>
                  <Card.Img
                    variant="top"
                    src={producto.foto || "placeholder.jpg"}
                    alt={producto.nombre}
                    className="product-image"
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title className="product-name">
                      {producto.nombre}
                    </Card.Title>

                    <Card.Text>
                      <strong>Marca:</strong> {producto.marca}
                    </Card.Text>
                    <Card.Text>
                      <strong>Tipo:</strong> {producto.tipo}
                    </Card.Text>
                    <Card.Text>
                      <strong>Cuerpo:</strong> {producto.cuerpo}
                    </Card.Text>
                    <Card.Text>
                      <strong>Color:</strong> {producto.color}
                    </Card.Text>
                    <Card.Text>
                      <strong>Ancho:</strong> {producto.ancho} cm
                    </Card.Text>
                    <Card.Text>
                      <strong>Alto:</strong> {producto.alto} cm
                    </Card.Text>
                    <Card.Text className="product-price">
                      <strong>Precio:</strong> {formatPrice(producto.precio)} 
                    </Card.Text>
                    <Card.Text>
                      <strong>Stock:</strong> {producto.stock}
                    </Card.Text>
                    <Button variant="secondary" onClick={() => navigate(-1)}>
                      Volver atrás
                    </Button>
                  </Card.Body>
                   {/* Contenedor de datos del cliente */}
            <div className="contenedorDatosCliente mt-4 p-3 border rounded">
              <h5>Información del vendedor</h5>
              {datosUsuario ? (
                <>
                  <p>
                    <strong>Nombre:</strong> {datosUsuario.nombre}{" "}
                    {datosUsuario.apellido}
                  </p>
                  <p>
                    <strong>Email:</strong> {datosUsuario.email}
                  </p>
                  <p>
                  <div className="DatosUsuario">
                        <strong>Teléfono:</strong> {datosUsuario.fono}{" "}
                        <a
                          href={`https://wa.me/${datosUsuario.fono}?text=Quiero información sobre un producto`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whatsapp-link"
                        >
                          <img 
                            src={whatsappIcon} 
                            alt="WhatsApp" 
                            style={{ width: '20px', height: '20px', marginLeft: '5px' }} // Ajusta el tamaño como necesites
                          />
                        </a>
                      </div>
                        </p>
                </>
              ) : (
                <p>Cargando datos del vendedor...</p>
              )}
            </div>
                </Col>
                
              </Row>
              
            </Card>
            <div>
              <strong>Descripcion:</strong>
              <Card.Text className="product-description">
                {producto.detalle}
              </Card.Text>
            </div>
           
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
