import { Button, Container, Form } from "react-bootstrap";

const Register = () => {
  return (
    <div className="register">
      <Container>
        <Form className="d-flex flex-column justify-content-between align-items-center ms-auto me-auto">
          <h3>REGISTER</h3>
          <label>
            <span>Enter Your Name</span>
            <input type="text" placeholder="Name" />
          </label>

          <label>
            <span>Enter Your Email</span>
            <input type="email" placeholder="Email" />
          </label>

          <label>
            <span>Enter a Password</span>
            <input type="password" placeholder="Password" />
          </label>

          <Button type="submit">REGISTER</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
