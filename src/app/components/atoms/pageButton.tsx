interface PageButtonProps {
  readonly text: string;
}

export default function PageButton({ text }: PageButtonProps) {
  return (
    <div className="flex justify-center bg-accent1 border border-accent2  px-8 py-4 rounded-full">
      {text}
    </div>
  );
}
