import profile from "../../images/profile.png";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-screen lg:w-3/4 lg:border-x lg:border-neutral-400 px-16 py-6 md:items-center">
      <div className="grow flex items-center">
        <p className="h-2/5 lg:h-3/5 font-montserrat text-3xl md:text-6xl lg:text-7xl text-pretty font-bold text-center whitespace-pre-line">
          this is beta
        </p>
      </div>
      <div className="h-2/5 flex justify-center">
        <div className="flex flex-col md:flex-row items-center md:justify-center md:items-start md:space-x-8 md:w-3/4 lg:w-5/6 xl:w-4/6">
          <img
            className="w-20 md:w-52 md:h-52 rounded-full object-cover object-center"
            src={profile}
            alt="Jacob's profile"
          />
          <div className="md:h-52 flex flex-col justify-center items-center">
            <p className="font-montserrat my-4 text-xs md:text-base text-center md:text-left text-pretty w-3/4 md:w-full">
              I am a software developer based in Cebu, Philippines. I specialize
              in bringing ideas to life through clean, user-centered solutions.
              Let's collaborate and turn your digital dreams into reality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
