import { Button, Container, Row } from "react-bootstrap";
import { useContextCart } from "../components/context/Maincontext";
import ShopCartDetails from "../components/ShopCartDetails";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const { cart } = useContextCart();

  if (cart.length == 0) {
    return <div className="empty-cart">The Cart is Emty</div>;
  } else {
    return (
      <div className="shop-cart">
        <Container>
          {cart.map((ele) => (
            <Row key={ele.id}>
              <ShopCartDetails {...ele} />
            </Row>
          ))}

          <Button className="btn-pay" as={Link} to="/payment">
            Payment
          </Button>
        </Container>
      </div>
    );
  }
};

export default ShopCart;
