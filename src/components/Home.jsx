import Sections from "./Sections";
import Newproducts from "./Newproducts";
import Hotdeals from "./Hotdeals";
import Topselling from "./Topselling";
import Signup from "./Signup";
import Footer from "./Footer";
import Btn from "./Btn";
import Slider from "./slider";

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
