"use client";

import { useEffect, useState } from "react";
import Header from "./components/organisms/header";
import Hero from "./components/organisms/hero";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Header offset={offset} />
      <Hero />
    </div>
  );
}
