import "./sass/pages/main.scss";
import "./sass/pages/media.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import MainNavbar from "./components/header/MainNavbar";
import Topselling from "./pages/Topselling";
import Hotdeals from "./pages/Hotdeals";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ElementDetails from "./components/ElementDetails";
import "./sass/helpers/reset.scss";
import ShopCart from "./pages/ShopCart";
import Maincontext from "./components/context/Maincontext";
import PaymentForm from "./pages/payment";

function App() {
  return (
    <>
      <BrowserRouter basename="/e-commerce_new">
        <Maincontext>
          <MainNavbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/hotdeals" element={<Hotdeals />} />
            <Route path="/topselling" element={<Topselling />} />
            <Route path="/about" element={<About />} />
            <Route path="/sub" element={<Signup />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/opencart" element={<ShopCart />} />
            <Route path="/elementdetails" element={<ElementDetails />} />
            <Route path="/payment" element={<PaymentForm />} />
          </Routes>
        </Maincontext>
      </BrowserRouter>
    </>
  );
}

export default App;
