import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted (Frontend Only)");
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Card
          className="p-4 shadow-sm"
          style={{
            width: "100%",
            maxWidth: "400px",
            border: "1px solid black",
          }}
        >
          <h3 className="text-center mb-4">Login</h3>

          <Form onSubmit={handleSubmit}>
            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 mt-2 btn-btn"
              variant="primary"
            >
              Login
            </Button>

            <p className="text-center mt-3">
              Don't have an account?
              <Link to="/register" className="ms-1">
                Register
              </Link>
            </p>
          </Form>
        </Card>
      </div>
    </motion.div>
  );
};

export default Login;
