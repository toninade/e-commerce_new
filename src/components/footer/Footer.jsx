import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <div id="about" className="footer">
      <Container className="d-flex  justify-content-between align-items-center">
        <Row>
          <Col xs={6} md={4} lg={3}>
            <div className="aboutus">
              <h4>ABOUT US</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <div className="contacts">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    +210-95-72-99
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    email.@email.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> 1242 stant goerge
                    road
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <div className="categories">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a>Hot Deals</a>
                </li>
                <li>
                  <a>Laptops</a>
                </li>
                <li>
                  <a>Smartphones</a>
                </li>
                <li>
                  <a>Cameras</a>
                </li>
                <li>
                  <a>Accessores</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <div className="information">
              <h4>INFORMATION</h4>
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
                <li>
                  <a>Privty Policy</a>
                </li>
                <li>
                  <a>Orders and returns</a>
                </li>
                <li>
                  <a>Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <div className="information">
              <h4>SERVICE</h4>
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
                <li>
                  <a>Privty Policy</a>
                </li>
                <li>
                  <a>Orders and returns</a>
                </li>
                <li>
                  <a>Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Footer;
