import { Col, Container, Row } from "react-bootstrap";
import { DataTwo } from "../components/AllData";
import CardTwo from "../components/CardTwo";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Topselling = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
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
    </motion.div>
  );
};

export default Topselling;
