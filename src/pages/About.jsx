import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

const About = () => {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("loading");
      setIsloading(false);
    }, 1000);
  }, [isloading]);

  if (isloading) {
    return <Loading />;
  } else {
    return (
      <div className="about">
        <Footer />
      </div>
    );
  }
};

export default About;
