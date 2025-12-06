// import "./login.css";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login">
      <Container>
        <Form className="d-flex flex-column justify-content-between align-items-center ms-auto me-auto">
          <h3>LOGIN</h3>
          <label>
            Enter Your Email
            <input type="email" placeholder="Email" />
          </label>
          <label>
            Enter Password
            <input type="password" placeholder="Password" />
          </label>
          <Button type="submit">LOGIN</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
