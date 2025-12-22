import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgHotdeal from "../../webp/hotdeal.webp";
import { motion } from "framer-motion";

const item_variant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hotdeals = ({ shopBtn }) => {
  const initialTime =
    2 * 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000 + 34 * 60 * 1000 + 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div
      className="hot_deals"
      id="hotDeals"
      as={motion.div}
      variants={item_variant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <img src={imgHotdeal} alt="hotDeal" loading="lazy" fetchPriority="auto" />
      <div className="content">
        <div className="counter">
          <span>
            {String(days).padStart(2, "0")}
            <span>DAYS</span>
          </span>
          <span>
            {String(hours).padStart(2, "0")}
            <span>HOURS</span>
          </span>
          <span>
            {String(minutes).padStart(2, "0")}
            <span>MINS</span>
          </span>
          <span>
            {String(seconds).padStart(2, "0")}
            <span>SECS</span>
          </span>
        </div>
        <div className="txt">
          <h3>Hot Deal This Week</h3>
          <p>New Collection Up to 30% OFF</p>

          {shopBtn && (
            <Button className="hot-deals-btn" aria-label="hot deal button">
              <Link aria-label="hotdeals page" to="/HotdealsSection">
                Shop Now
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotdeals;
