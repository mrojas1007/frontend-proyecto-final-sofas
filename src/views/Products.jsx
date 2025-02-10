import ProductCard from "../components/ProductCard";
import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";

const Products = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Col>
          <h1 className="text-center">Productos disponibles</h1>
          <p className="text-center">
            Encuentra miles de productos y filtra por marcas, tipos y cantidad
            de cuerpos, para mayor comodidad.
          </p>
          <Container id="filtros" className="mb-3">
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-center"
            >
              Filtrar por:
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Marca
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Almore">Almore</Dropdown.Item>
                  <Dropdown.Item href="#/DIB">DIB</Dropdown.Item>
                  <Dropdown.Item href="#/Divano">Divano</Dropdown.Item>
                  <Dropdown.Item href="#/Elegant">Elegant</Dropdown.Item>
                  <Dropdown.Item href="#/Masel">Masel</Dropdown.Item>
                  <Dropdown.Item href="#/Rosen">Rosen</Dropdown.Item>
                  <Dropdown.Item href="#/Spazzio">Spazzio</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Tipo
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Sillon">Sillon</Dropdown.Item>
                  <Dropdown.Item href="#/Bergere">Bergere</Dropdown.Item>
                  <Dropdown.Item href="#/Sofa">Sofa</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Cuerpo
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/1-cuerpo">1 cuerpo</Dropdown.Item>
                  <Dropdown.Item href="#/2-cuerpos">2 cuerpos</Dropdown.Item>
                  <Dropdown.Item href="#/3-cuerpos">3 cuerpos</Dropdown.Item>
                  <Dropdown.Item href="#/4-cuerpos">4 cuerpos</Dropdown.Item>
                  <Dropdown.Item href="#/5-cuerpos">5 cuerpos</Dropdown.Item>
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
};

export default Products;
