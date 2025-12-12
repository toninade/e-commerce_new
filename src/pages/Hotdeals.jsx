import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgHotdeal from "../../webp/hotdeal.webp";

const Hotdeals = () => {
  return (
    <div className="hot_deals" id="hotDeals">
      <img src={imgHotdeal} alt="hotDeal" loading="lazy" />
      <div className="content">
        <div className="counter">
          <span>
            02<span>DAYS</span>
          </span>
          <span>
            10<span>HOURS</span>
          </span>
          <span>
            34<span>MINS</span>
          </span>
          <span>
            60<span>SECS</span>
          </span>
        </div>
        <div className="txt">
          <h3>hot deal this week</h3>
          <p>New Collection Up to 50% OFF</p>
          <Button as={Link} to="/shop">
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hotdeals;
