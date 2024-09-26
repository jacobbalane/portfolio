import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import Works from "../organisms/Works";

export default function HomePage() {
  return (
    <div className="relative space-y-5 md:space-y-20">
      <Header />
      <Hero />
      <Works />
    </div>
  );
}
