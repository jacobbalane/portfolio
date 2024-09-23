import PageMark from "./PageMark";

export default function ProgressBar() {
  return (
    <div className="relative w-progressWidth mx-auto flex justify-between items-center">
      <PageMark />
      <PageMark />
      <PageMark />
      <PageMark />
      <div className="absolute h-0.5  w-full bg-accent1 rounded-full"></div>
    </div>
  );
}
