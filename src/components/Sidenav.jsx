import { memo } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// import "./sidenav.css";

export default memo(function Sidenav({ setInptData, setPrice }) {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" main_aside p-0 m-0">
          <Container fluid>
            <Button
              className="Toggle_filters"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              as={Navbar.Toggle}
            >
              Filters <i className="fa-solid fa-arrow-right"></i>
            </Button>
            <Navbar.Offcanvas
              className="main_aside_offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Filters
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex">
                <div className="main_aside" id="main_aside">
                  <input
                    onChange={(e) => setInptData(e.target.value)}
                    id="searchinput"
                    type="text"
                    alt="search"
                    placeholder="search"
                  />
                  <div className="checks">
                    <h5>Categories</h5>
                    <label>
                      Laptops{" "}
                      <input
                        value="laptop"
                        type="checkbox"
                        alt="Laptops"
                        onChange={(e) =>
                          setInptData(e.target.checked ? e.target.value : "")
                        }
                      />
                    </label>
                    <label>
                      Phones{" "}
                      <input
                        value="phone"
                        onChange={(e) =>
                          setInptData(e.target.checked ? e.target.value : "")
                        }
                        type="checkbox"
                        alt="Laptops"
                      />
                    </label>
                    <label>
                      Ipad{" "}
                      <input
                        value="ipad"
                        type="checkbox"
                        onChange={(e) =>
                          setInptData(e.target.checked ? e.target.value : "")
                        }
                        alt="Laptops"
                      />
                    </label>
                    <label>
                      cameras{" "}
                      <input
                        value="camera"
                        type="checkbox"
                        onChange={(e) =>
                          setInptData(e.target.checked ? e.target.value : "")
                        }
                        alt="Laptops"
                      />
                    </label>
                    <label>
                      HeadPhones{" "}
                      <input
                        value="headphone"
                        type="checkbox"
                        onChange={(e) =>
                          setInptData(e.target.checked ? e.target.value : "")
                        }
                        alt="Laptops"
                      />
                    </label>
                  </div>
                  <div className="price">
                    <h5>Price</h5>
                    <label className="me-4">
                      {" "}
                      <input
                        onChange={(e) =>
                          setPrice((prev) => ({ ...prev, min: e.target.value }))
                        }
                        type="number"
                        alt="min"
                        placeholder="Min $"
                        min={0}
                        step={50}
                        max={5000}
                      />
                    </label>
                    <label>
                      {" "}
                      <input
                        onChange={(e) =>
                          setPrice((prev) => ({ ...prev, max: e.target.value }))
                        }
                        className="mt-3"
                        type="number"
                        alt="max"
                        placeholder="max $"
                        min={0}
                        step={50}
                        max={5000}
                      />
                    </label>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
});
