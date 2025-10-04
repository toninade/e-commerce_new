import "./topheader.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="Header">
      <Container className="container-fluid">
        <Row className=" justify-content-between align-items-center d-flex">
          <Col className="Address" md={8} lg={8}>
            <ul className="first_ul d-flex  align-items-center">
              <li>
                <i className="fa-solid fa-phone"></i>
                +210-95-72-99
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                email.@email.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                1242 stant goerge road
              </li>
            </ul>
          </Col>
          <Col md={4} lg={4}>
            <Nav className="last_ul d-flex align-items-center  ">
              <Nav.Link to="/register" as={Link}>
                <i className="fa-solid fa-registered"></i>
                REGISTER
              </Nav.Link>
              <Nav.Link to="/login" as={Link}>
                <i className="fa-solid fa-right-to-bracket"></i>
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
