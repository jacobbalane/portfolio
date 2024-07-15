import { useState } from "react";

interface HamburgerProps {
  handleToggle: (bool: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ handleToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  function handleOnClick() {
    setIsToggled(!isToggled);
    handleToggle(!isToggled);
  }

  return (
    <button
      className={`md:hidden flex flex-col items-center justify-center h-8 w-8 space-y-2 nav-toggle-btn ${
        isToggled ? "bg-accent-1 rounded-full toggle" : ""
      }`}
      onClick={handleOnClick}>
      <div
        className={`h-0.5 rounded-full top-bar ${
          !isToggled ? "w-8 bg-primary" : "w-5 bg-secondary"
        }`}></div>
      <div
        className={`h-0.5 rounded-full middle-bar ${
          !isToggled ? "w-8 bg-primary" : "w-0 bg-secondary"
        }`}></div>
      <div
        className={`h-0.5 rounded-full bottom-bar ${
          !isToggled ? "w-8 bg-primary" : "w-5 bg-secondary"
        }`}></div>
    </button>
  );
};

export default Hamburger;
