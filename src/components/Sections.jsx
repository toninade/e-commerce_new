import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../public/img/shop01.png";
import img2 from "../../public/img/shop02.png";
import img3 from "../../public/img/shop03.png";
const Sections = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col md={6} sm={12} lg={4}>
            <div className="sectionContent">
              <img src={img1} />
              <div className="text">
                <h3>Laptop Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} lg={4}>
            <div className="sectionContent">
              <img src={img2} />
              <div className="text">
                <h3>Accessories Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} lg={4}>
            <div className="sectionContent">
              <img src={img3} />
              <div className="text">
                <h3>Cameras Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sections;
