import LinkButton from "../atoms/LinkButton";

const Contact = () => {
  return (
    <div className="flex flex-col font-montserrat">
      <div className="flex flex-col px-8 md:px-16 space-y-4 mb-4 md:mb-10">
        <p className="font-bold md:text-2xl md:mb-8 xl:text-3xl">
          connect with me
        </p>
        <div className="flex h-40 md:h-48">
          <p className="font-medium md:text-2xl xl:text-3xl">
            Have a question, suggestion, or just want to say hello? Feel free to
            reach out! You can{" "}
            <span className="text-accent-1 font-semibold">
              send me an email
            </span>{" "}
            and I'll get back to you as soon as possible. I look forward to
            hearing from you!
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <LinkButton label="linkedin" view="large" />
          <LinkButton label="github" view="large" />
          <LinkButton label="instagram" view="large" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
