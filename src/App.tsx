import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {
  return (
    <div className="">
      <Header title="jacob." />
      <div className="flex flex-col items-center">
        <Hero />
        <Project />
      </div>
    </div>
  );
}

export default App;
