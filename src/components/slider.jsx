import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../sass/pages/main.scss";

import slider1 from "../../public/img/slider1.jpg";
import slider2 from "../../public/img/slider2.jpg";
import slider3 from "../../public/img/slider6.jpg";

const Slider = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h5>New Collection of Apple</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
        <Carousel.Caption>
          <h5>New samsung Phone </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />
        <Carousel.Caption>
          <h5>Get Not 20 with 3% OFF </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
