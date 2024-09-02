interface TitleProps {
  readonly title: string;
  readonly subtitle: string;
  readonly highlight: string;
  readonly offset: number;
}

export default function Title({
  title,
  subtitle,
  highlight,
  offset,
}: TitleProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold text-2xl opacity-87 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-neutral-400">
        {title}
      </p>
      <div className="flex text-sm">
        <div className="opacity-30">{subtitle}</div>
        <div className="flex item-center mx-1 relative">
          <p
            className={`z-10 mx-1 ${
              offset >= 200 ? "text-primary opacity-87" : "opacity-30"
            }`}>
            {highlight}
          </p>
          <span
            className={`absolute top-0 rounded-sm bg-yellow-300 h-5 transition-all duration-300 ${
              offset >= 200 ? "w-full" : "w-0"
            }`}></span>
        </div>
      </div>
    </div>
  );
}
