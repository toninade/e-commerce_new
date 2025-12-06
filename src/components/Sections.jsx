import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import imgSection1 from "../../public/img/shop01.png";
import imgSection2 from "../../public/img/shop02.png";
import imgSection3 from "../../public/img/shop03.png";

const Sections = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col md={6} sm={12} lg={4}>
            <div className="sectionContent">
              <img src={imgSection1} />
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
              <img src={imgSection2} />
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
              <img src={imgSection3} />
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
