import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import MainNavbar from "./components/MainNavbar";
import Topselling from "./components/Topselling";
import Hotdeals from "./components/Hotdeals";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Register from "./components/Register";
import Login from "./components/Login";
import ElementDetails from "./components/ElementDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
          <Route path="/hotdeals" element={<Hotdeals />} />
          <Route path="/topselling" element={<Topselling />} />
          <Route path="/about" element={<Footer />} />
          <Route path="/sub" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/elementdetails" element={<ElementDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
