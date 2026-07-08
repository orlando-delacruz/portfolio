import Navbar from "../Navbar";
import CallToAction from "../CallToAction";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CallToAction />
    </>
  );
};

export default Layout;
