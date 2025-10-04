import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSquareFacebook,
  faSquareXTwitter,
  faSquarePinterest,
  faSquareInstagram,
} from "@fortawesome/free-solid-svg-icons";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup position-relative">
      <Container>
        <h3>
          Sign Up for the <span>NEWSLETTER</span>
        </h3>
        <form>
          <input placeholder="Enter Your Email" type="text" />
          <Button>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            Subscribe
          </Button>
        </form>
        <div className="icons">
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faSquareXTwitter} />
          <FontAwesomeIcon icon={faSquareInstagram} />
          <FontAwesomeIcon icon={faSquarePinterest} />
        </div>
        <FontAwesomeIcon icon={faEnvelope} />
      </Container>
    </div>
  );
};

export default Signup;
