import Title from "../atoms/title";

interface EventPreviewProps {
  readonly offset: number;
}

export default function Contact({ offset }: EventPreviewProps) {
  return (
    <div className="px-8 py-14">
      <div className="flex flex-col space-y-10 max-w-96 mx-auto">
        <Title
          title="Get in Touch"
          subtitle="Feel free to reach out anytime"
          offset={offset}
          minOffset={1300}
        />
        <div className="opacity-65 text-2xl font-medium">
          Questions, suggestions, or just want to say hello?{" "}
          <mark className="scroll-highlight">Drop me an email</mark> , and I’ll
          get back to you soon. Looking forward to hearing from you!
        </div>
      </div>
    </div>
  );
}
