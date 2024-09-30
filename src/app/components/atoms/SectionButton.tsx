import { LiaDownloadSolid } from "react-icons/lia";

interface SectionButtonProps {
  readonly text: string;
  readonly type?: string;
}

export default function SectionButton({ text, type }: SectionButtonProps) {
  return (
    <div className="md:w-40 hidden md:flex justify-end">
      <div className="items-center text-foreground hover:opacity-65 transition duration-300 text-sm cursor-pointer select-none">
        {type === "resume" ? (
          <a
            href="/jacob-balane-resume.pdf"
            download="jacob-balane-resume.pdf"
            className="flex space-x-2">
            <p className="font-spacemonoBold">{text}</p>
            <LiaDownloadSolid className="text-lg" />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
