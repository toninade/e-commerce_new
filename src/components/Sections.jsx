import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import imgSection1 from "../../webp/shop01.webp";
import imgSection2 from "../../webp/shop02.webp";
import imgSection3 from "../../webp/shop03.webp";
import { memo } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // كل كرت يتأخر ربع ثانية
    },
  },
};

const Sections = memo(() => {
  return (
    <div className="section">
      <Container>
        <Row
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Col
            md={6}
            sm={12}
            lg={4}
            as={motion.div}
            variants={itemVariants}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="sectionContent">
              <img
                src={imgSection1}
                alt="img-section"
                loading="lazy"
                fetchPriority="auto"
                width="300"
                height="200"
              />
              <div className="text">
                <h3>Laptop Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={4}
            as={motion.div}
            variants={itemVariants}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="sectionContent">
              <img
                src={imgSection2}
                alt="img-section"
                loading="lazy"
                fetchPriority="auto"
                style={{ width: "300px", height: "auto" }}
                width="300"
                height="200"
              />
              <div className="text">
                <h3>Accessories Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={4}
            as={motion.div}
            variants={itemVariants}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="sectionContent">
              <img
                src={imgSection3}
                alt="img-section"
                loading="lazy"
                fetchPriority="auto"
                width="300"
                height="200"
              />
              <div className="text">
                <h3>Cameras Collection</h3>
                <Link to="/shop">
                  Shop now <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Sections;
