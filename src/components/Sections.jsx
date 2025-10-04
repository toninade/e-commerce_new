import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sections = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col md={6} sm={12} lg={4}>
            <div className="sectionContent">
              <img src="../../public/img/shop01.png" />
              <div className="text">
                <h3>Laptop Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={"arrow-right"} />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} lg={4}>
            <div className="sectionContent">
              <img src="../../public/img/shop02.png" />
              <div className="text">
                <h3>Accessories Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={"arrow-right"} />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} lg={4}>
            <div className="sectionContent">
              <img src="../../public/img/shop03.png" />
              <div className="text">
                <h3>Cameras Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={"arrow-right"} />
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
