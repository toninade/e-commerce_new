import Carousel from "react-bootstrap/Carousel";
import "../sass/pages/main.scss";
import slider1 from "../../webp/slider1.webp";
import slider2 from "../../webp/slider2.webp";
import slider3 from "../../webp/slider6.webp";

const Slider = () => {
  return (
    <Carousel data-bs-theme="dark" style={{ width: "100%", height: "auto" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
          loading="eager"
          fetchPriority="high"
          width="1200"
          height="700"
          style={{ width: "100%", height: "auto" }}
        />
        <Carousel.Caption>
          <h5>New Collection of Apple</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
          loading="lazy"
          fetchPriority="high"
          width="1200"
          height="700"
          style={{ width: "100%", height: "auto" }}
        />
        <Carousel.Caption>
          <h5>New samsung Phone </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
          loading="lazy"
          fetchPriority="high"
          width="1200"
          height="700"
          style={{ width: "100%", height: "auto" }}
        />
        <Carousel.Caption>
          <h5>Get Not 20 with 3% OFF </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
