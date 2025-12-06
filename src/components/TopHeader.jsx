import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faRegistered,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
const TopHeader = () => {
  return (
    <div className="Header">
      <Container className="container-fluid">
        <Row className=" justify-content-between align-items-center d-flex">
          <Col className="Address" md={8} lg={8}>
            <ul className="first_ul d-flex  align-items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                +210-95-72-99
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                email.@email.com
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                1242 stant goerge road
              </li>
            </ul>
          </Col>
          <Col md={4} lg={4}>
            <Nav className="last_ul d-flex align-items-center  ">
              <Nav.Link to="/register" as={Link}>
                <FontAwesomeIcon icon={faRegistered} />
                REGISTER
              </Nav.Link>
              <Nav.Link to="/login" as={Link}>
                <FontAwesomeIcon icon={faRightToBracket} />
                LOGIN
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
