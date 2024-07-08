import "./App.css";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";

function App() {
  return (
    <div className="flex flex-col">
      <Header main="jacob" sub="balane" />
      <Hero />
    </div>
  );
}

export default App;
