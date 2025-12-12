import { Container, Row, Col } from "react-bootstrap";
import logoImg from "../../public/img/logo.png";
import NavBar from "./NavBar";

const MiddleHeader = () => {
  return (
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
  );
};

export default MiddleHeader;
