import { Link } from "react-router-dom";
import Currency_fun from "./currency";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContextCart } from "./context/Maincontext";
import { Button } from "react-bootstrap";
import { memo } from "react";

const ShopCartDetails = memo(({ id, img, title, price, quantity, des }) => {
  const { cart, removeFromCart, setEleid } = useContextCart();

  return (
    <div className="shop-cart-details d-flex justify-content-evenly align-items-center p-3">
      <div className="img-cont d-flex justify-content-center align-items-center me-5">
        <Link
          onClick={() => setEleid(id)}
          to="/elementdetails"
          className="icon"
        >
          <img src={img} alt="img" loading="lazy" />
        </Link>
        <p>X {quantity}</p>
      </div>
      <div className="details">
        <h5 className="title">{title}</h5>
        <p className="descrp">{des}</p>
        <p className="Price">{Currency_fun(quantity * price)}</p>
      </div>
      <Button onClick={() => removeFromCart(id)} className="ms-auto remove-btn">
        <FontAwesomeIcon icon={faSquareMinus} />
      </Button>
    </div>
  );
});

export default ShopCartDetails;
