import { Outlet } from "react-router-dom";
import Banner from "../Shared/Banner";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Headline from "../Pages/Home/Headline";
import ScrollToTop from "react-scroll-to-top";
import MyCustomSvg from "../assets/arrow.svg";

const Root = () => {
  return (
    <div className="max-w-full mx-auto">
      <Headline></Headline>
      <Navbar></Navbar>
      <ScrollToTop
        smooth
        component={<img src={MyCustomSvg} alt="Scroll to top" />}
        className="hover:scale-125 delay-75 transition ease-in-out"
        style={{
          borderRadius: "50%",
        }}
      />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
