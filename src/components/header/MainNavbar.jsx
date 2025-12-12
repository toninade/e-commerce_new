import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faRegistered,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logoImg from "../../../webp/logo.webp";
import NavBar from "./NavBar";

const MainNavbar = () => {
  return (
    <>
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
      <div className="middle d-flex justify-content-between align-items-center ">
        <Container fluid>
          <Row className="content">
            <Col className="cont_img " xs={6} sm={4} md={2} lg={2}>
              <img src={logoImg} alt="logo" loading="lazy" />
            </Col>
            <Col xs={6} sm={6} md={10} lg={10}>
              <NavBar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainNavbar;
