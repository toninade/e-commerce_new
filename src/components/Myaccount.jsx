import { Button, Form } from "react-bootstrap";

const Myaccount = () => {
  return (
    <div>
      <Form>
        <h4>SIGN IN</h4>
        <label>Name</label>
        <input type="text" placeholder="Enter your Name" />
        <label>Your Email</label>
        <input type="email" placeholder="Enter your Email" />
        <label>Your password</label>
        <input type="password" placeholder="Enter your password" />
        <label>Repeat your password</label>
        <input type="password" placeholder="Enter your password" />
        <Button> SIGN IN</Button>
      </Form>
    </div>
  );
};

export default Myaccount;
