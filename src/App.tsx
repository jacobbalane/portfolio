import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <Header title="jacob." />
      <div className="flex flex-col items-center">
        <Hero />
      </div>
    </div>
  );
}

export default App;
