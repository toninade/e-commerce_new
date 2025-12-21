import {
  Button,
  Col,
  Container,
  Row,
  Card,
  Badge,
  Form,
} from "react-bootstrap";
import { useContextCart } from "../components/context/Maincontext";
import ShopCartDetails from "../components/ShopCartDetails";
import { Link } from "react-router-dom";
import Currency_fun from "../components/currency";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ShopCart = () => {
  const { cart } = useContextCart();

  const subtotal = cart.reduce(
    (total, el) => total + (el?.price || 0) * el.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="empty-cart text-center py-5">Your cart is empty 🛒</div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="shop-cart py-5">
        <Container>
          <Row className="g-4">
            {/* Cart Items */}
            <Col sm={12} lg={8}>
              <h3 className="mb-4">Shopping Cart ({cart.length} items)</h3>
              {cart.map((ele) => (
                <ShopCartDetails key={ele.id} {...ele} />
              ))}
            </Col>

            {/* Summary */}
            <Col
              sm={12}
              lg={4}
              className="d-flex flex-column align-items-stretch"
            >
              <Card
                className="p-4 sticky-top"
                style={{ top: "80px", border: "1px solid black" }}
              >
                <h5 className="mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>{Currency_fun(subtotal)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <Badge bg="success">Free</Badge>
                    ) : (
                      Currency_fun(shipping)
                    )}
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold mb-4">
                  <span>Total</span>
                  <span>{Currency_fun(total)}</span>
                </div>

                <Button
                  variant="outline-danger"
                  className="w-100"
                  as={Link}
                  to="/payment"
                >
                  Proceed to Checkout
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </motion.div>
  );
};

export default ShopCart;
