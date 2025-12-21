import { Col, Container, Row } from "react-bootstrap";
import { DataThree } from "../components/AllData";
import CardElement from "../components/CardElement";
import Sidenav from "../components/Sidenav";
import { useEffect, useState } from "react";
import Btn from "../components/button up/Btn";
import PageBtns from "../components/PageBtns";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Shop = () => {
  const data_withOut_discount = DataThree.filter((item) => !item.discount);

  const [dataToshow, setDataToshow] = useState(data_withOut_discount);

  const [inpData, setInptData] = useState("");
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const items_per_page = 12;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * items_per_page;

  const totalPages = Math.ceil(dataToshow.length / items_per_page);

  useEffect(() => {
    setDataToshow(
      data_withOut_discount.filter((item) => {
        const eleTitle = item.title.toLocaleLowerCase();
        return eleTitle.startsWith(inpData.toLocaleLowerCase());
      })
    );
    if (price.min > 0) {
      setDataToshow((prev) =>
        prev.filter((item) => {
          const elePrice = item.price;
          return elePrice >= price.min;
        })
      );
    }
    if (price.max > 0) {
      setDataToshow((prev) =>
        prev.filter((item) => {
          const elePrice = item.price;
          return elePrice <= price.max;
        })
      );
    }
  }, [inpData, price.max, price.min]);

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="shop">
        <Sidenav setInptData={setInptData} setPrice={setPrice} />
        <Container fluid>
          <h4 className="title">Store</h4>
          <Row className="Cont">
            {dataToshow
              .slice(startIndex, startIndex + items_per_page)
              .map((el) => (
                <Col xs={6} sm={4} md={4} lg={3} key={el.id}>
                  <CardElement showDiscount={false} {...el} />
                </Col>
              ))}
          </Row>
          <Btn />

          <PageBtns
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Container>
      </div>
    </motion.div>
  );
};

export default Shop;
