import { Col, Container, Row } from "react-bootstrap";
import { DataTwo } from "../components/AllData";
import CardTwo from "../components/CardTwo";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

const Topselling = () => {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("loading");
      setIsloading(false);
    }, 1000);
  }, [isloading]);
  if (isloading) {
    return <Loading />;
  } else {
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
            {DataTwo.map((ele) => (
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
  }
};

export default Topselling;
