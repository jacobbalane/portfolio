interface TitleProps {
  readonly title: string;
  readonly subtitle: string;
  readonly offset?: number;
  readonly minOffset?: number;
}

export default function Title({
  title,
  subtitle,
  offset,
  minOffset,
}: TitleProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-pretty font-semibold text-2xl opacity-87 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-neutral-500">
        {title}
      </p>
      <div className="flex text-sm">
        <div className="opacity-30">{subtitle}</div>
      </div>
    </div>
  );
}
