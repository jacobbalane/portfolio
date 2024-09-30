export default function EdgeIcon() {
  return (
    <>
      {/* top left */}
      <div className="h-[1.5px] w-6 bg-accent1 absolute rotate-90 -left-3 -top-[1.5px] z-10"></div>
      <div className="h-[1.5px] w-6 bg-accent1 absolute -left-3 -top-[1px] z-10"></div>

      {/* top right */}
      <div className="h-[1.5px] w-6 bg-accent1 absolute rotate-90 -right-3 -top-[1.5px] z-10"></div>
      <div className="h-[1.5px] w-6 bg-accent1 absolute -right-3 -top-[1px] z-10"></div>

      {/* bottom right */}
      <div className="h-[1.5px] w-6 bg-accent1 absolute rotate-90 -right-3 -bottom-[1.5px] z-10"></div>
      <div className="h-[1.5px] w-6 bg-accent1 absolute -right-3 -bottom-[.8px] z-10"></div>

      {/* bottom left */}
      <div className="h-[1.5px] w-6 bg-accent1 absolute rotate-90 -left-3 -bottom-[1.5px] z-10"></div>
      <div className="h-[1.5px] w-6 bg-accent1 absolute -left-3 -bottom-[0.8px] z-10"></div>
    </>
  );
}
