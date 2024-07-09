import "./App.css";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";

function App() {
  return (
    <div>
      <Header main="jacob" sub="balane" />
      <div className="flex flex-col">
        <Hero />
      </div>
    </div>
  );
}

export default App;
