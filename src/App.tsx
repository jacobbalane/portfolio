import "./App.css";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Projects from "./components/organisms/Projects";
import Events from "./components/organisms/Events";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <div>
      <Header main="jacob" sub="balane" />
      <div className="flex flex-col bg-secondary">
        <Hero />
        <Projects />
        <Events />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
