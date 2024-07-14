import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Projects from "./components/organisms/Projects";
import Events from "./components/organisms/Events";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";
import Sidebar from "./components/molecules/Sidebar";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [offset, setOffset] = useState(0);

  function handleToggle(bool: boolean) {
    setIsToggled(bool);
  }

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);
  return (
    <div>
      <div>
        <Header
          main="jacob"
          sub="balane"
          handleToggle={handleToggle}
          offset={offset}
        />
        <div className="flex flex-col bg-secondary space-y-8">
          <Hero />
          <Projects />
          <Events />
          <Contact />
          <Footer />
        </div>
        <Sidebar toggle={isToggled} />
      </div>
    </div>
  );
}

export default App;
