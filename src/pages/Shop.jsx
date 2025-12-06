import { Col, Container, Row } from "react-bootstrap";
import { DataThree } from "../components/AllData";
import CardElement from "../components/CardElement";
import Sidenav from "../components/Sidenav";
import { useEffect, useState } from "react";
// import "./shop.css";
import Btn from "../components/Btn";
import Loading from "../components/Loading";

const Shop = () => {
  const [dataToshow, setDataToshow] = useState(DataThree);
  const [inpData, setInptData] = useState("");
  const [price, setPrice] = useState({ min: 0, max: 0 });
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("loading");
      setIsloading(false);
    }, 2000);
    setDataToshow(
      DataThree.filter((item) => {
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
  }, [inpData, price.max, price.min, isloading]);

  if (isloading) {
    return <Loading />;
  } else {
    return (
      <div className="shop">
        <Sidenav setInptData={setInptData} setPrice={setPrice} />
        <Container fluid>
          <h4 className="title">Store</h4>
          <Row className="Cont">
            {dataToshow.map((el) => (
              <Col xs={6} sm={4} md={4} lg={3} key={el.id}>
                <CardElement {...el} />
              </Col>
            ))}
          </Row>
          <Btn />
        </Container>
      </div>
    );
  }
};

export default Shop;
