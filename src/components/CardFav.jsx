import Currency_fun from "./currency";
import "./cartcard.css";
import { Button, Stack } from "react-bootstrap";
import { useContextCart } from "./context/Maincontext";
import "./cardfavo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";

const CardFav = ({ id, img, title, des, price, quantity }) => {
  const { addToCartFromefavo, removeFromfavorite } = useContextCart();
  return (
    <Stack>
      <div className="cartfav d-flex align-items-center justify-content-between ">
        <img src={img} alt={title} />
        <div className="text-cont">
          <h6>{title}</h6>
          <p>{des}</p>
          <p>{Currency_fun(price)}</p>
        </div>
        <div className="btns">
          <Button onClick={() => removeFromfavorite(id)}>
            <FontAwesomeIcon icon={faSquareMinus} />
          </Button>
          <Button onClick={() => addToCartFromefavo(id)}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default CardFav;
