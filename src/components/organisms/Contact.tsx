import LinkButton from "../atoms/LinkButton";

const Contact = () => {
  return (
    <div className="flex flex-col font-montserrat md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto">
      <div className="flex flex-col px-8 md:px-16 lg:px-0 space-y-4 mb-4 md:mb-10">
        <p className="font-bold md:text-2xl md:mb-8 lg:px-0 xl:text-3xl">
          connect with me
        </p>
        <div className="flex h-40 md:h-48">
          <p className="font-medium md:text-2xl xl:text-3xl">
            Have a question, suggestion, or just want to say hello? Feel free to
            reach out! You can{" "}
            <span className="text-accent-1 font-semibold">
              <a href="mailto:balanejacob1@gmail.com">send me an email</a>
            </span>{" "}
            and I'll get back to you as soon as possible. I look forward to
            hearing from you!
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <LinkButton
            label="linkedin"
            view="large"
            link="https://www.linkedin.com/in/balanejacob/"
          />
          <LinkButton
            label="github"
            view="large"
            link="https://github.com/jacobbalane"
          />
          <LinkButton
            label="facebook"
            view="large"
            link="https://www.facebook.com/balanejacob/"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
