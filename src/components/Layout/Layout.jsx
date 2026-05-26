import Navbar from "../Navbar";
import Footer from "../Footer";
import CallToAction from "../CallToAction";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Layout;
