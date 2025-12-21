import { Button, Offcanvas, Stack } from "react-bootstrap";
import Cartcard from "./Cartcard.jsx";
import { useContextCart } from "./context/Maincontext";
import Currency_fun from "./currency";
import { Link } from "react-router-dom";

const Shoppingcart = () => {
  const { cart, Cartstatus, closecart } = useContextCart();
  return (
    <Offcanvas
      style={{ width: "300px" }}
      show={Cartstatus}
      placement="end"
      onHide={closecart}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.map((ele) => (
          <Stack key={ele.id}>
            <Cartcard {...ele} />
          </Stack>
        ))}
        <div>
          {" "}
          TOTAL :{" "}
          {Currency_fun(
            cart.reduce((total, el) => {
              return total + (el?.price || 0) * el.quantity;
            }, 0)
          )}
        </div>
        <Link to="/opencart">
          <Button aria-label="open cart" className="w-100 mt-3 button_opencart">
            View Cart
          </Button>
        </Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Shoppingcart;
