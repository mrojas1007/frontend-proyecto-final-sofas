import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import jwtDecode from "jwt-decode";

const ProductCard = ({ producto, onClick }) => {
    const { fetchObtenerProductosUsuario } = useContext(UserContext);
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const id_usuario = token ? jwtDecode(token).id_usuario : null;

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
        <Row className="m-3">
            {productos.length > 0 ? (
                productos.map((producto) => (
                    <Col key={producto.id_producto} sm={6} md={4} lg={3}>
                        <Card onClick={onClick} style={{ cursor: "pointer" }}>
                            <Card.Img variant="top" src={producto.foto} />
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>{producto.marca}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col className='text-center align-self-center'>
                                        ${producto.precio}
                                    </Col>

                                    <Col className='text-center align-self-center'>
                                        stock :{producto.stock}
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
