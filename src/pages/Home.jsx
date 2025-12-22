import { lazy } from "react";
import { motion } from "framer-motion";
import Slider from "../components/slider";

const Sections = lazy(() => import("../components/Sections"));
const Newproducts = lazy(() => import("../components/Newproducts"));
const Hotdeals = lazy(() => import("../components/Hotdeals"));
const Topselling = lazy(() => import("./Topselling"));
const Signup = lazy(() => import("../pages/Signup"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Btn = lazy(() => import("../components/button up/Btn"));

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <>
      <motion.div
        style={{ overflow: "hidden" }}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Slider />
        <Sections />
        <Newproducts />
        <Hotdeals shopBtn={true} />
        <Topselling />
        <Signup />
        <Footer />
        <Btn />
      </motion.div>
    </>
  );
};

export default Home;
