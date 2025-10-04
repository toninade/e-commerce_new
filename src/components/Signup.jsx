import { Button, Container } from "react-bootstrap";
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
            <i className="fa-solid fa-envelope"></i> Subscribe
          </Button>
        </form>
        <div className="icons">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-pinterest"></i>
        </div>
        <i className="Emailimg fa-regular fa-envelope"></i>
      </Container>
    </div>
  );
};

export default Signup;
