import Hotdeals from "../components/Hotdeals";
import { DataThree } from "../components/AllData";
import CardElement from "../components/CardElement";
import { Row, Col, Container } from "react-bootstrap";
import { memo, useState } from "react";
import PageBtns from "../components/PageBtns";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HotdealsSection = memo(() => {
  // total items will show per one page
  const items_per_page = 12;
  // current page
  const [currentPage, setCurrentPage] = useState(1);
  // data will show after filter
  const DataToShow = DataThree.filter((item) => item.discount);
  // total pages
  const totalPages = Math.ceil(DataToShow.length / items_per_page);
  // index start to show
  const StartIndex = (currentPage - 1) * items_per_page;
  const DiscountData = DataToShow.slice(
    StartIndex,
    StartIndex + items_per_page
  );

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="hotdeals-page">
        <Hotdeals shopBtn={false} />
        <Container>
          <Row key={currentPage} className="Cont" as={motion.div}>
            {DiscountData.map((item) => {
              return (
                <Col xs={6} sm={4} md={4} lg={2}>
                  <CardElement showDiscount={true} {...item} />
                </Col>
              );
            })}
          </Row>
          <div className="pagination-btns">
            <PageBtns
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        </Container>
      </div>
    </motion.div>
  );
});

export default HotdealsSection;
