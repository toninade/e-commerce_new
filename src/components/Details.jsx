import { Button, Col, Container, Row, Badge, Form } from "react-bootstrap";
import { useContextCart } from "./context/Maincontext";
import Currency_fun from "./currency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
  faTruck,
  faShieldHalved,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { memo, useState } from "react";

const Details = memo(
  ({
    id,
    img,
    title,
    price,
    discountPrice,
    discount,
    stars,
    reviews = 128,
    stock = 5,
    brand = "Generic",
    sku = "SKU-001",
    des,
  }) => {
    const { addToCart, addTofavorite } = useContextCart();
    const [qty, setQty] = useState(1);

    const finalPrice = discount ? price - price * (discount / 100) : price;

    const inc = () => setQty((q) => Math.min(q + 1, stock));
    const dec = () => setQty((q) => Math.max(q - 1, 1));

    return (
      <div className="Details py-4">
        <Container>
          <Row className="g-4">
            {/* Images */}
            <Col sm={12} lg={5}>
              <div className="border rounded-3 p-3 bg-white">
                <div className="position-relative">
                  {discount ? (
                    <Badge
                      bg="danger"
                      className="position-absolute top-0 start-0 m-2"
                    >
                      -{Math.floor((price / discountPrice) * 10)}%
                    </Badge>
                  ) : null}
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="d-flex gap-2 mt-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={img}
                      alt={title}
                      className="img-thumbnail"
                      style={{ width: 70, height: 70, objectFit: "cover" }}
                    />
                  ))}
                </div>
              </div>
            </Col>

            {/* Info */}
            <Col sm={12} lg={7}>
              <div className="border rounded-3 p-4 bg-white h-100">
                <h2 className="mb-2">{title}</h2>
                <div className="text-muted mb-2">
                  Brand: {brand} • SKU: {sku}
                </div>

                {/* Rating */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="fw-semibold">{stars}</span>
                  <span className="text-warning">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </span>
                  <span className="text-muted">({reviews} reviews)</span>
                </div>

                {/* Price */}

                <div className="mb-3">
                  <div className="fs-3 fw-bold">
                    {Currency_fun(discount ? discountPrice : price)}
                  </div>
                  {discount ? (
                    <div className="text-muted text-decoration-line-through">
                      {Currency_fun(price)}
                    </div>
                  ) : null}
                  {discount ? (
                    <div className="text-success">
                      You save {Math.floor((price / discountPrice) * 10)}%
                    </div>
                  ) : null}
                </div>

                {/* Stock */}
                <div className="mb-3">
                  {stock > 0 ? (
                    <Badge bg="success">In Stock ({stock})</Badge>
                  ) : (
                    <Badge bg="secondary">Out of Stock</Badge>
                  )}
                </div>

                {/* Quantity */}
                <div className="d-flex align-items-center gap-2 mb-4">
                  <Button
                    aria-label=" minus quantity"
                    variant="outline-secondary"
                    onClick={dec}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <Form.Control
                    value={qty}
                    readOnly
                    className="text-center"
                    style={{ width: 70 }}
                  />
                  <Button
                    aria-label="plus quantity"
                    variant="outline-secondary"
                    onClick={inc}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </div>

                {/* Description */}
                <p className="mb-4">
                  <strong>Description:</strong> {des}
                </p>

                {/* Benefits */}
                <div className="d-flex gap-4 text-muted mb-4">
                  <span>
                    <FontAwesomeIcon icon={faTruck} /> Free Shipping
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faShieldHalved} /> 1 Year Warranty
                  </span>
                </div>

                {/* Actions */}
                <div className="d-flex gap-3">
                  <Button
                    variant="outline-danger"
                    disabled={!stock}
                    onClick={() => addToCart(id, qty)}
                    className="flex-grow-1"
                    aria-label="add to cart"
                  >
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </Button>
                  <Button
                    aria-label="add to favo"
                    variant="outline-danger"
                    onClick={() => addTofavorite(id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
);

export default Details;
