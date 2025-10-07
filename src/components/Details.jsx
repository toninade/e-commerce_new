import { Button, Container } from "react-bootstrap";
import "./details.css";
import { useContextCart } from "./context/Maincontext";
import Currency_fun from "./currency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Details = ({ id, img, title, price, stars, des }) => {
  const { addToCart, addTofavorite } = useContextCart();
  return (
    <div className="Details">
      <Container className="d-flex ">
        <div className="all_imgs">
          <div className="img_cont">
            <img src={img} alt={title} />
          </div>
          <div className="imgs_cont">
            <img src={img} alt={title} />
            <img src={img} alt={title} />
            <img src={img} alt={title} />
            <img src={img} alt={title} />
          </div>
        </div>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            vero non corrupti alias ab necessitatibus illum eos magni labore
            praesentium qui dolor expedita voluptas, nihil, ipsa molestias
            inventore quidem possimus dicta soluta ut cumque. Repellat saepe
            omnis deleniti aperiam maxime?
          </p>
          <div className=" btns">
            <Button onClick={() => addToCart(id)}>
              ADD TO CART <FontAwesomeIcon icon={faCartShopping} />
            </Button>
            <Button
              onClick={() => {
                addTofavorite(id);
              }}
            >
              ADD TO FAVORITE
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
