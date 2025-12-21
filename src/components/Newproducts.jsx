import { Col, Container, Row } from "react-bootstrap";
import { DataOne } from "./AllData";
import CardElement from "./CardElement";
import { motion } from "framer-motion";

const item_variant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const parent_variant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

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
        <Row
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          variants={parent_variant}
          viewport={{ once: true, amount: 0.2 }}
        >
          {DataOne.map((ele) => (
            <Col
              as={motion.div}
              variants={item_variant}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ position: "relative" }}
              sm={6}
              md={4}
              lg={3}
              key={ele.id}
            >
              <CardElement showDiscount={false} {...ele} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Newproducts;
