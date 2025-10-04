import { Button, Card, CardText, CardTitle } from "react-bootstrap";
import "./cardElement.css";
import Currency_fun from "./currency";
import { useContextCart } from "./context/Maincontext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(...all);

const CardElement = ({ id, img, title, des, price, stars }) => {
  const { addToCart, addTofavorite, setEleid } = useContextCart();
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Img src={img} />
        </Card.Header>
        <Card.Body>
          <CardTitle>{title}</CardTitle>
          <CardText>{des}</CardText>
          <CardText>{Currency_fun(price)}</CardText>
          <CardText>
            RATE: {stars} {<i className="fa-solid fa-star"></i>}
          </CardText>
          <Button onClick={() => addTofavorite(id)} className="icon">
            <FontAwesomeIcon icon="fa-solid fa-heart" />
          </Button>
          <Button
            as={Link}
            onClick={() => setEleid(id)}
            to="/elementdetails"
            className="icon"
          >
            <FontAwesomeIcon icon={faEye} />
          </Button>
          <Button onClick={() => addToCart(id)} className="btn_card ">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardElement;
