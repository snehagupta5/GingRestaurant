import Navbar from "./component/Navbar"
import './App.css';
import Header from "./container/header/Header";
import About from "./container/about/About";
import SpecialMenu from "./container/menu/SpecialMenu";
import Chef from "./container/aboutChef/Chef";
import Intro from "./container/intro/Intro";
import Award from "./container/award/Award";
import Gallery from "./container/gallery/Gallery";
import Contact from "./container/contact/Contact";
import Footer from "./container/bottom/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Award />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
