import { Nav, Container, Navbar, Offcanvas, Button } from "react-bootstrap";
import { useContextCart } from "./context/Maincontext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faRegistered,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const NavBar = () => {
  const { cart, opencart, cartCount, openfav, favo } = useContextCart();
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary header_navbar"
        >
          <Container className="container-fluid">
            <Navbar.Toggle
              style={{ margin: "0px" }}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              className="main_navBar"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav_links flex-grow-1 pe-3 ">
                  <Nav.Link
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/home"
                    as={NavLink}
                  >
                    <span>Home</span>
                  </Nav.Link>
                  <Nav.Link
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/shop"
                    as={NavLink}
                  >
                    <span>Store</span>
                  </Nav.Link>
                  <Nav.Link
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/Hotdeals"
                    as={NavLink}
                  >
                    <span>Hot deals</span>
                  </Nav.Link>
                  <Nav.Link
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/topselling"
                    as={NavLink}
                  >
                    <span>Top Selling</span>
                  </Nav.Link>
                  <Nav.Link
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/sub"
                    as={NavLink}
                  >
                    <span>subscribe</span>
                  </Nav.Link>
                  <Nav.Link
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/about"
                    as={NavLink}
                  >
                    <span>About</span>
                  </Nav.Link>
                  <Nav.Link className="log" to="/register" as={NavLink}>
                    <FontAwesomeIcon icon={faRegistered} />
                    REGISTER
                  </Nav.Link>
                  <Nav.Link className="log" to="/login" as={NavLink}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    LOGIN
                  </Nav.Link>
                </Nav>
                <div className="cart_favorit d-flex">
                  <Button onClick={openfav}>
                    <FontAwesomeIcon icon={faHeart} />
                    wishList
                    <div className="d-flex justify-content-center align-items-center ">
                      {favo.length}
                    </div>
                  </Button>
                  <Button onClick={opencart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    Cart
                    <div className="d-flex justify-content-center align-items-center ">
                      {cartCount}
                    </div>
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
