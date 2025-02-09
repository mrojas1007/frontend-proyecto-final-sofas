import ProductCard from "../components/ProductCard";
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from "react-bootstrap";

const Products = () => {
    return (
        <>
            <Container className="mt-5 mb-5">
                <Col>
                    <h1 className="text-center">Productos disponibles</h1>
                    <p className="text-center">Encuentra miles de productos y filtra por marcas, tipos y cantidad de cuerpos, para mayor comodidad.</p>
                    <Container id="filtros" className="mb-3">
                        <Stack direction="horizontal" gap={3} className="justify-content-center">
                            Filtrar por:
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Marca
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Tipo
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Cuerpo
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Stack>
                    </Container>
                </Col>
                <Row className="mb-3">
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
{/*                 <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination> */}
            </Container>
        </>
    );
}

export default Products;