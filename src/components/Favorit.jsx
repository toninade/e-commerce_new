import { Offcanvas } from "react-bootstrap";
import { useContextCart } from "./context/Maincontext";
import CardFav from "./CardFav";

const Favorite = () => {
  const { closefav, favstate, favo } = useContextCart();
  return (
    <Offcanvas
      style={{ width: "300px" }}
      show={favstate}
      placement="end"
      onHide={closefav}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>FAVORITE</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-1">
        {favo.map((ele) => (
          <CardFav key={ele.id} {...ele} />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Favorite;
