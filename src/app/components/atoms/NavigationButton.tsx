interface NavigationButtonProps {
  readonly text: string;
}

export default function NavigationButton({ text }: NavigationButtonProps) {
  return (
    <li className="flex justify-center items-center w-16 font-spacemono text-sm lg:text-base text-accent1 hover:text-foreground cursor-pointer select-none transition duration-300 ">
      {text}
    </li>
  );
}
