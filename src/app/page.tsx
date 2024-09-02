"use client";

import { useEffect, useState } from "react";
import Header from "./components/organisms/header";
import Hero from "./components/organisms/hero";
import Project from "./components/organisms/projects";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log(window.scrollY);
    const onScroll = () => setOffset(window.scrollY);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-primary text-secondary">
      <Header offset={offset} />
      <Hero />
      <Project offset={offset} />
    </div>
  );
}
