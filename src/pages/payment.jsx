import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const PaymentForm = () => {
  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Submitted (Frontend Only)");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <Card className="p-4 shadow-sm">
        <h3 className="mb-4 text-center">Payment Details</h3>

        <Form onSubmit={handleSubmit}>
          {/* Name on Card */}
          <Form.Group className="mb-3">
            <Form.Label>Card Holder Name</Form.Label>
            <Form.Control
              type="text"
              name="cardName"
              placeholder="name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Card Number */}
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              onChange={handleChange}
              maxLength="16"
              required
            />
          </Form.Group>

          {/* Exp & CVV */}
          <div className="d-flex gap-3">
            <Form.Group className="mb-3 w-50">
              <Form.Label>Exp. Date</Form.Label>
              <Form.Control
                type="text"
                name="expDate"
                placeholder="MM/YY"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 w-50">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="password"
                name="cvv"
                placeholder="123"
                maxLength="3"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <hr />

          {/* Address */}
          <Form.Group className="mb-3">
            <Form.Label>Billing Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="123 Street Name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* City */}
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Country */}
          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select name="country" onChange={handleChange} required>
              <option value="">Choose…</option>
              <option>Egypt</option>
              <option>Saudi Arabia</option>
              <option>UAE</option>
              <option>Morocco</option>
              <option>USA</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" className="w-100 mt-3 btn-pay">
            Confirm Payment
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default PaymentForm;
