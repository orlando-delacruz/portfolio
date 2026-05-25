import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <h1>Home</h1>
      </section>

      <section id="about">
        <h1>About</h1>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="blogs">
        <h1>Blogs</h1>
      </section>

      <Footer />
    </>
  );
};

export default App;

