import "./sass/pages/main.scss";
import "./sass/pages/media.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/helpers/reset.scss";

import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Maincontext from "./components/context/Maincontext";
import MainNavbar from "./components/header/MainNavbar";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Topselling = lazy(() => import("./pages/Topselling"));
const Hotdeals = lazy(() => import("./pages/Hotdeals"));
const About = lazy(() => import("./pages/About"));
const Signup = lazy(() => import("./pages/Signup"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const ShopCart = lazy(() => import("./pages/ShopCart"));
const PaymentForm = lazy(() => import("./pages/payment"));
const ElementDetails = lazy(() => import("./components/ElementDetails"));

function App() {
  return (
    <>
      <BrowserRouter basename="/e-commerce_new">
        <Maincontext>
          <MainNavbar />
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </Maincontext>
      </BrowserRouter>
    </>
  );
}

export default App;
