import profile from "../images/profile.jpg";

const Header = () => {
  return (
    <div className="sticky flex justify-between items-center text-white h-24">
      <div className="size-10">
        <img src={profile} alt="" className="w-full rounded-full" />
      </div>
      <div className="size-5 "></div>
    </div>
  );
};

export default Header;
