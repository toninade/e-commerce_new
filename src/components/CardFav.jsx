import Currency_fun from "./currency";
import { Button, Stack } from "react-bootstrap";
import { useContextCart } from "./context/Maincontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import {
  faCartShopping,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";

const CardFav = memo(({ id, img, title, des, price, quantity }) => {
  const { addToCartFromefavo, removeFromfavorite } = useContextCart();
  return (
    <Stack>
      <div className="cartfav d-flex align-items-center justify-content-between ">
        <img src={img} alt={title} loading="lazy" />
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
});

export default CardFav;
