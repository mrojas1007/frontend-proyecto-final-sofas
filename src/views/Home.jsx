import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

const Home = () => {
    return (
        <Stack className='p-3'>
            <Stack direction='horizontal'>
                <div>
                    <h1 className='text-uppercase text-center'>El único marketplace de sofás en Chile</h1>
                </div>
                <Carousel fade>
                    <Carousel.Item>
                        <Image src='/src/assets/sofa1.jpg' fluid />
                        <Carousel.Caption>
                            <h3>Encuentra todo lo que buscas</h3>
                            <p>Todo tipo de sofás y sillones en un solo lugar</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src='/src/assets/sofa2.jpg' fluid />
                        <Carousel.Caption>
                            <h3>Eficiente y amigable</h3>
                            <p>Somos una plataforma líder en comercio electrónico</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src='/src/assets/sofa3.jpg' fluid />
                        <Carousel.Caption>
                            <h3>Publica todo lo que quieras</h3>
                            <p>
                                Conecta con otros compradores y vendedores
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Stack>
            <div>
                <h2 className='text-center'>Recién agregados</h2>
                <Carousel fade>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <Image src='/src/assets/sofa1.jpg' fluid className="w-50" />
                            <Image src='/src/assets/sofa2.jpg' fluid className="w-50" />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <Image src='/src/assets/sofa3.jpg' fluid className="w-50" />
                            <Image src='/src/assets/sofa1.jpg' fluid className="w-50" />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <Image src='/src/assets/sofa2.jpg' fluid className="w-50" />
                            <Image src='/src/assets/sofa3.jpg' fluid className="w-50" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Stack>

    );
}

export default Home;