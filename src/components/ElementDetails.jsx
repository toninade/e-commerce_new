import { Container } from "react-bootstrap";
import Details from "./Details";
import Data from "./Data2.json";
import { useContextCart } from "./context/Maincontext";

const ElementDetails = () => {
  const { eleId } = useContextCart();
  return (
    <div className="Element">
      <Container>
        {Data.map((el) => {
          if (el.id == eleId) {
            return <Details {...el} />;
          }
        })}
      </Container>
    </div>
  );
};

export default ElementDetails;
