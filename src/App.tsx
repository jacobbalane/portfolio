import "./App.css";
import { useState } from "react";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Projects from "./components/organisms/Projects";
import Events from "./components/organisms/Events";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";
import Sidebar from "./components/molecules/Sidebar";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle(bool: boolean) {
    setIsToggled(bool);
  }

  return (
    <div>
      <div>
        <Header main="jacob" sub="balane" handleToggle={handleToggle} />
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
