import { useEffect, useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { UserContext } from "../context/UserContext";
import "../css/Home.css";
import sofa1 from "../assets/sofa1.jpg";
import sofa2 from "../assets/sofa2.jpg";
import sofa3 from "../assets/sofa3.jpg";

const Home = () => {
  const { fetchUltimosProductos } = useContext(UserContext);
  const [ultimosProductos, setUltimosProductos] = useState([]);

  useEffect(() => {
    const cargarUltimosProductos = async () => {
      const data = await fetchUltimosProductos();
      setUltimosProductos(data);
    };
    cargarUltimosProductos();
  }, []);

  return (
    <Stack className="p-3">
      <Stack direction="horizontal" className="align-items-start justify-content-between">
        <div className="ContenedorH1">
          <h1 className="text-uppercase text-center" >
            El único marketplace de sofás en Chile
          </h1>
        </div>
        <Carousel fade className="custom-carousel">
          <Carousel.Item>
            <Image src={sofa1} fluid />
            <Carousel.Caption>
              <h3>Encuentra todo lo que buscas</h3>
              <p>Todo tipo de sofás y sillones en un solo lugar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={sofa2} fluid />
            <Carousel.Caption>
              <h3>Eficiente y amigable</h3>
              <p>Somos una plataforma líder en comercio electrónico</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={sofa3} fluid />
            <Carousel.Caption>
              <h3>Publica todo lo que quieras</h3>
              <p>Conecta con otros compradores y vendedores</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Stack>

      <div>
        <h2 className="text-center">Recién agregados</h2>
        <Carousel fade className="custom-carousel">
          {ultimosProductos.length === 0 ? (
            <p className="text-center">No hay productos recientes.</p>
          ) : (
            ultimosProductos.map((producto) => (
              <Carousel.Item key={producto.id_producto}>
                <div className="d-flex justify-content-center">
                  <Image src={producto.foto} fluid className="w-50" />
                </div>
                <Carousel.Caption>
                  <h5>{producto.nombre}</h5>            
                </Carousel.Caption>
              </Carousel.Item>
            ))
          )}
        </Carousel>
      </div>
    </Stack>
  );
};

export default Home;
