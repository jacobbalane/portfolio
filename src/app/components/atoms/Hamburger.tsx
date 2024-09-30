interface HamburgerProps {
  readonly toggled: boolean;
  readonly handleToggle: (value: boolean) => void;
}

export default function Hamburger({ toggled, handleToggle }: HamburgerProps) {
  const handleSidebarToggle = () => {
    handleToggle(!toggled);
  };

  return (
    <button className="space-y-3" onClick={handleSidebarToggle}>
      <div className="flex">
        <div
          className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
            toggled ? "rotate-45 translate-x-[3px] translate-y-0.5 w-4" : ""
          }`}></div>
        <div
          className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
            toggled ? "-rotate-45 -translate-x-[3px] translate-y-0.5 w-4" : ""
          }`}></div>
      </div>
      <div className="flex">
        <div
          className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
            toggled ? "-rotate-45 translate-x-[3px] -translate-y-0.5 w-4" : ""
          }`}></div>
        <div
          className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
            toggled ? "rotate-45 -translate-x-[3px] -translate-y-0.5 w-4" : ""
          }`}></div>
      </div>
    </button>
  );
}
