import Currency_fun from "./currency";
import "./cartcard.css";
import { Button, Stack } from "react-bootstrap";
import { useContextCart } from "./context/Maincontext";
import "./cardfavo.css";

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
            <i className="fa-regular fa-square-minus"></i>
          </Button>
          <Button onClick={() => addToCartFromefavo(id)}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default CardFav;
