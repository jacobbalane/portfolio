const Contact = () => {
  return (
    <div className="flex flex-col font-montserrat">
      <div className="flex flex-col px-8 space-y-4">
        <p className="font-bold">connect with me</p>
        <div className="flex h-48">
          <p className="font-medium">
            Have a question, suggestion, or just want to say hello? Feel free to
            reach out! You can{" "}
            <span className="text-accent-1 font-semibold">
              send me an email
            </span>{" "}
            and I'll get back to you as soon as possible. I look forward to
            hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
