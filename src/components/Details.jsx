import { Button, Col, Container, Row } from "react-bootstrap";
// import "./details.css";
import { useContextCart } from "./context/Maincontext";
import Currency_fun from "./currency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Details = ({ id, img, title, price, stars, des }) => {
  const { addToCart, addTofavorite } = useContextCart();
  return (
    <div className="Details">
      <Container className="d-flex ">
        <Row>
          <Col sm={12} lg={4}>
            <div className="all_imgs">
              <div className="img_cont">
                <img src={img} alt={title} loading="lazy" />
              </div>
              <div className="imgs_cont">
                <img src={img} alt={title} />
                <img src={img} alt={title} />
                <img src={img} alt={title} />
                <img src={img} alt={title} />
              </div>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className="element-text">
              <h1>{title}</h1>
              <h5>
                {" "}
                RATE : {stars}
                <i className="fa-solid fa-star"></i>
              </h5>
              <h5> PRICE :{Currency_fun(price)}</h5>
              <p>
                <span>DESCRUBTION :</span> {des}
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt vero non corrupti alias ab necessitatibus illum eos
                magni labore praesentium qui dolor expedita voluptas, nihil,
                ipsa molestias inventore quidem possimus dicta soluta ut cumque.
                Repellat saepe omnis deleniti aperiam maxime?
              </p>
              <div className=" btns">
                <Button onClick={() => addToCart(id)}>
                  <FontAwesomeIcon icon={faCartShopping} /> ADD TO CART
                </Button>
                <Button
                  onClick={() => {
                    addTofavorite(id);
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} /> ADD TO FAVORITE
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
