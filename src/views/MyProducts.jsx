import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import jwtDecode from "jwt-decode";
import { formatPrice } from "../helpers/helpers";

const MyProducts = ({ onClick }) => {
    const { getProductsByUser } = useContext(UserContext);
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const id_usuario = token ? jwtDecode(token).id_usuario : null;

    useEffect(() => {
        const obtenerProductos = async () => {
            if (id_usuario) {
                const productosObtenidos = await getProductsByUser(id_usuario);
                setProductos(productosObtenidos);
            }
        };

        obtenerProductos();
    }, [id_usuario]);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Mis productos</h1>
            <Row className="m-3">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <Col key={producto.id_producto} sm={6} md={4} lg={3}>
                            <Card onClick={onClick} style={{ cursor: "pointer" }} className="h-100">
                                <Card.Body>
                                    <Card.Title>{producto.nombre}</Card.Title>
                                    <Card.Text>{producto.marca}</Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={producto.foto} />
                                <Card.Footer>
                                    <Row>
                                        <Col className='text-center align-self-center'>
                                            <strong>Precio:</strong> {formatPrice(producto.precio)}
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
                    <p className="text-center">No tienes productos publicados.</p>
                )}
            </Row>
        </div>
    );
}

export default MyProducts;