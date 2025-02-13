import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductCard = ({ producto, onClick }) => {
    const { fetchObtenerProductosUsuario, id_usuario } = useContext(UserContext);
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProductos = async () => {
            if (id_usuario) {
                const productosObtenidos = await fetchObtenerProductosUsuario(id_usuario);
                setProductos(productosObtenidos);
            }
        };

        obtenerProductos();
    }, [id_usuario]);

    return (
        <Row>
            {productos.length > 0 ? (
                productos.map((producto) => (
                    <Col key={producto.id_producto} md={4}>
                        <Card onClick={onClick} style={{ width: '18rem', cursor: "pointer" }}>
                            <Card.Img variant="top" src={producto.foto} />
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                {/* <Card.Text>{producto.detalle}</Card.Text> */}
                                  <Card.Text>{producto.marca}</Card.Text> 
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col className='text-center align-self-center'>
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
            ) : (
                <p>No tienes productos publicados.</p>
            )}
        </Row>
    );
}

export default ProductCard;
