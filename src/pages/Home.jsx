import Sections from "../components/Sections";
import Newproducts from "../components/Newproducts";
import Hotdeals from "./Hotdeals";
import Topselling from "./Topselling";
import Signup from "../pages/Signup";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import Slider from "../components/slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Sections />
      <Newproducts />
      <Hotdeals />
      <Topselling />
      <Signup />
      <Footer />
      <Btn />
    </>
  );
};

export default Home;
