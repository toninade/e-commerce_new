import { Col, Container, Row } from "react-bootstrap";
import { DataOne } from "./AllData";
import CardElement from "./CardElement";

const Newproducts = () => {
  return (
    <div
      className="newproducts"
      style={{
        paddingTop: "30px",
        paddingBottom: "30px",
        margin: "30px 0px",
      }}
    >
      <Container>
        <h3 style={{ margin: "20px 0px ", padding: "0px 10px" }}>
          NEW PRODUCTS
        </h3>
        <Row>
          {DataOne.map((ele) => (
            <Col
              style={{ position: "relative" }}
              sm={6}
              md={4}
              lg={3}
              key={ele.id}
            >
              <CardElement {...ele} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Newproducts;
