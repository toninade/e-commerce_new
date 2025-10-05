import Currency_fun from "./currency";
import "./cartcard.css";
import { Button } from "react-bootstrap";
import { useContextCart } from "./context/Maincontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

const Cartcard = ({ id, img, title, price, quantity }) => {
  const { removeFromCart } = useContextCart();
  return (
    <div className="cartcard d-flex align-items-center justify-content-between ">
      <img src={img} alt={title} />
      <div className="text-cont">
        <h6>{title}</h6>
        {quantity > 1 && <p> quantity: {quantity}</p>}
        <p>{Currency_fun(price * quantity)}</p>
      </div>
      <Button onClick={() => removeFromCart(id)} className="ms-auto">
        <FontAwesomeIcon icon={faSquareMinus} />
      </Button>
    </div>
  );
};

export default Cartcard;
