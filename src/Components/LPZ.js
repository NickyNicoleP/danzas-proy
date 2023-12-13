import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css"
import lp1 from '../assets/img/lp1.jpg'; // Cambia la referencia a tu imagen JPG
import lp2 from '../assets/img/lp2.jpg'; // Cambia la referencia a tu imagen JPG
import lp3 from '../assets/img/lp3.jpg'; // Cambia la referencia a tu imagen JPG
import fondo from '../assets/img/color-sharp.png'


export const LPZ = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="scz" id="scz">
          <Container>
            <Row>
              <Col>
                <div className="scz-bx">
                  <h2>Danzas de La Paz</h2>
                  <Carousel responsive={responsive} infinite={true} className="scz-slider">
                    <Carousel.Item>
                      <img className="d-block w-100" src={lp1} alt="Imagen 1" />
                      <Carousel.Caption>
                        <h5>Caporales</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src={lp2} alt="Imagen 2" />
                      <Carousel.Caption>
                        <h5>KUllawada</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src={lp3} alt="Imagen 3" />
                      <Carousel.Caption>
                        <h5>Cueca Paceña</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
          <img className="background-image-left" src={fondo} alt="Background" />
        </section>
      );
    };
    
    export default LPZ;