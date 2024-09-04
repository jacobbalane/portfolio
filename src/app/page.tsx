"use client";

import { useEffect, useState } from "react";
import Header from "./components/organisms/header";
import Hero from "./components/organisms/hero";
import Project from "./components/organisms/projects";
import Event from "./components/organisms/events";
import Contact from "./components/organisms/contact";
import Social from "./components/organisms/socials";
import Upnext from "./components/organisms/upnext";
import Footer from "./components/organisms/footer";

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
    <div className="bg-primary text-secondary scroll-smooth">
      <Header offset={offset} />
      <Hero />
      <Project offset={offset} />
      <Event offset={offset} />
      <Contact offset={offset} />
      <Social />
      <Upnext
        title="My Projects - so far"
        subtitle="Explore what I’m working on and what I’ve achieved"
        buttonText="Projects"
      />
      <Footer />
    </div>
  );
}
