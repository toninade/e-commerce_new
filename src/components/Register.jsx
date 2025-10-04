import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <Container>
        <Form className="d-flex flex-column justify-content-between align-items-center ms-auto me-auto">
          <h3>REGISTER</h3>
          <label>
            Enter Your Name
            <input type="text" placeholder="Name" />
          </label>

          <label>
            Enter Your Email
            <input type="email" placeholder="Email" />
          </label>

          <label>
            Enter a Password
            <input type="password" placeholder="Password" />
          </label>

          <Button type="submit">REGISTER</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
