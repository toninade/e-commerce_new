import { Container } from "react-bootstrap";
import Details from "./Details";
import { DataThree } from "./AllData";
import { useContextCart } from "./context/Maincontext";

const ElementDetails = () => {
  const { eleId } = useContextCart();
  return (
    <div className="Element">
      <Container>
        {DataThree.map((el) => {
          if (el.id == eleId) {
            return <Details {...el} />;
          }
        })}
      </Container>
    </div>
  );
};

export default ElementDetails;
