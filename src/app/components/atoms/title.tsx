interface TitleProps {
  readonly title: string;
  readonly subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold text-2xl opacity-87">{title}</p>
      <p className="text-sm opacity-30">{subtitle}</p>
    </div>
  );
}
