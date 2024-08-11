const Hero = () => {
  return (
    <div>
      <div className="flex items-center h-52">
        <div className="flex-col text-white space-y-3">
          <p className="opacity-65">Hello! I'm Jacob.</p>
          <p className="text-2xl font-bold opacity-85">
            I design and build innovative web applications for{" "}
            <span className="bg-gradient-to-r from-neutral-500 to-neutral-600 text-transparent bg-clip-text">
              learning.
            </span>
          </p>
        </div>
      </div>
      <div className="flex h-28 items-center space-x-4">
        <div className="grow">
          <hr className="bg-white opacity-30 border-0 h-0.5 " />
        </div>
        <div className="flex items-center w-3/4">
          <p className="text-white opacity-30 text-sm text-justify">
            I am a software developer based in Cebu, Philippines. I specialize
            in bringing ideas to life through clean, user-centered solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
