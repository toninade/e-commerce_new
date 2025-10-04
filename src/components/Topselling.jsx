import { Col, Container, Row } from "react-bootstrap";

import Topsellingdata from "./Data1.json";
import CardTwo from "./CardTwo";

const Topselling = () => {
  return (
    <div
      id="topselling"
      className="newproducts topselling"
      style={{
        paddingTop: "30px",
        paddingBottom: "30px",
        marginRight: "auto",
      }}
    >
      <Container>
        <Row className="mb-5 ms-auto me-auto">
          <h3 style={{ margin: "20px 0px ", padding: "0px 10px" }}>
            TOP SELLING
          </h3>
          {Topsellingdata.map((ele) => (
            <Col
              className="d-flex  align-items-center"
              sm={6}
              md={4}
              key={ele.id}
            >
              <CardTwo {...ele} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Topselling;
