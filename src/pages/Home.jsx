import Sections from "../components/Sections";
import Newproducts from "../components/Newproducts";
import Hotdeals from "./Hotdeals";
import Topselling from "./Topselling";
import Signup from "../components/Signup";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import Slider from "../components/slider";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

const Home = () => {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("loading");
      setIsloading(false);
    }, 2000);
  }, [isloading]);

  if (isloading) {
    return <Loading />;
  } else {
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
  }
};

export default Home;
