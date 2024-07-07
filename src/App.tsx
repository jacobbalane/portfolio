import "./App.css";
import Header from "./components/organisms/Header";
import HeroSection from "./components/organisms/HeroSection";
import ProjectSection from "./components/organisms/ProjectSection";

function App() {
  return (
    <div id="home">
      <Header title="jacob." />
      <div className="flex flex-col items-center">
        <HeroSection />
        <ProjectSection />
      </div>
    </div>
  );
}

export default App;
