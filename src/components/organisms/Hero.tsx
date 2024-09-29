import profile from "../../images/profile.jpg";

import { TypeAnimation } from "react-type-animation";
import LinkButton from "../atoms/LinkButton";
import Button from "../atoms/Button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-end p-8 pb-12 md:px-16 md:py-20 xl:py-20 font-montserrat space-y-8 xl:space-y-16">
      <div className="grow flex flex-col space-y-2 md:space-y-5 min-h-[20rem] xl:space-y-8 md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto">
        <p className="font-semibold text-lg md:text-2xl xl:text-3xl">
          Hello! I'm Jacob.
        </p>
        <p className="font-bold text-5xl md:text-7xl lg:text-7xl xl:text-9xl  min-h-44 md:min-h-96 lg:min-h-80  xl:h-28rem">
          I design and build web applications for{" "}
          <br className="hidden lg:block" />
          <span className="text-accent-1">
            <TypeAnimation
              sequence={[
                "learning.",
                4000,
                "technology.",
                4000,
                "progress.",
                4000,
                "innovation.",
                4000,
                "creativity.",
                4000,
                "change.",
                4000,
                "the future.",
                4000,
                "success.",
                4000,
                "fun.",
                4000,
                "work.",
                4000,
                "community.",
                4000,
                "growth.",
                4000,
                "impact.",
                4000,
                "the people.",
                4000,
              ]}
              repeat={Infinity}
              cursor={true}
              deletionSpeed={50}
            />
          </span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row h-1/2 lg:h-1/3 xl:h-5/6 space-y-10 md:space-y-14 lg:space-x-6 md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto">
        <div className="flex space-x-5 md:space-x-7 xl:space-x-10 lg:w-4/6">
          <div className="w-28 md:w-48 md:h-60 min-h-28 lg:h-full">
            <img src={profile} alt="" className="object-cover h-full" />
          </div>
          <div className="w-1/2 flex flex-col justify-end grow space-y-6 xl:space-y-7 lg:pb-6">
            <p className="text-base xl:text-2xl font-medium">
              I am a software developer based in Cebu, Philippines. I specialize
              in bringing ideas to life through clean, user-centered solutions.
              Let's collaborate and turn your digital dreams into reality!
            </p>
            <div className="flex flex-col md:flex-row flex-wrap space-y-1 md:space-x-4">
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
        <Button label="Send me an email" />
      </div>
    </div>
  );
};

export default Hero;
