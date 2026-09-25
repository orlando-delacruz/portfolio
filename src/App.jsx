import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
