import { Offcanvas, Stack } from "react-bootstrap";
import Cartcard from "./Cartcard.jsx";
import { useContextCart } from "./context/Maincontext";
import Currency_fun from "./currency";

const Shoppingcart = ({ Cartstatus, closecart }) => {
  const { cart } = useContextCart();
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
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Shoppingcart;
