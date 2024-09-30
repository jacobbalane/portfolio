"use client";

import { useState } from "react";
import Header from "../organisms/Header";
import SideBar from "../molecules/SideBar";
import Hero from "../organisms/Hero";
import Works from "../organisms/Works";

export default function HomePage() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleSidebarToggle = (value: boolean) => {
    setIsSidebarToggled(value);
  };

  return (
    <div className="relative">
      <Header toggled={isSidebarToggled} handleToggle={handleSidebarToggle} />
      <SideBar toggled={isSidebarToggled} />
      <div className=" space-y-5 md:space-y-20">
        <Hero />
        <Works />
      </div>
    </div>
  );
}
