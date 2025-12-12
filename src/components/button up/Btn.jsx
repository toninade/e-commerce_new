import { Button } from "react-bootstrap";
// import "./btn.css";
import { useRef } from "react";

const Btn = () => {
  const btnUp = useRef();

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 500) {
      btnUp.current?.classList.add("show_btnUp");
    } else {
      btnUp.current?.classList.remove("show_btnUp");
    }
  });

  const btnfun = () => {
    window.scroll({ behavior: "smooth", top: 0 });
  };

  return (
    <Button
      variant="outline-danger"
      ref={btnUp}
      className="btnUp"
      onClick={btnfun}
    >
      UP
    </Button>
  );
};

export default Btn;
