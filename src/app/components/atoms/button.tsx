interface ButtonProps {
  readonly text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <div className="flex justify-center bg-accent1 border border-accent2  px-8 py-4 rounded-lg">
      {text}
    </div>
  );
}
