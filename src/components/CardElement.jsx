import { Button, Card, CardText, CardTitle } from "react-bootstrap";
import Currency_fun from "./currency";
import { useContextCart } from "./context/Maincontext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

const CardElement = memo(({ id, img, title, des, price, stars }) => {
  const { addToCart, addTofavorite, setEleid } = useContextCart();
  return (
    <>
      <Card style={{ minHeight: "350px" }}>
        <Card.Header>
          <Card.Img
            src={img}
            alt="img shop card"
            loading="lazy"
            fetchPriority="auto"
          />
        </Card.Header>
        <Card.Body>
          <CardTitle>{title}</CardTitle>
          <CardText>{des}</CardText>
          <CardText>{Currency_fun(price)}</CardText>
          <CardText>
            RATE: {stars} {<i className="fa-solid fa-star"></i>}
          </CardText>
          <Button
            aria-label="add to favo"
            onClick={() => addTofavorite(id)}
            className="icon"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button
            aria-label="open element"
            as={Link}
            onClick={() => setEleid(id)}
            to="/elementdetails"
            className="icon"
          >
            <FontAwesomeIcon icon={faEye} />
          </Button>
          <Button
            aria-label="add to cart"
            onClick={() => addToCart(id)}
            className="btn_card "
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
});

export default CardElement;
