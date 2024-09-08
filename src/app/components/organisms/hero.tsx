import { FaDrawPolygon, FaCode } from "react-icons/fa";
import { VscSparkleFilled } from "react-icons/vsc";

export default function Hero() {
  return (
    <div className="flex items-center justify-center px-8 py-14">
      <div className="space-y-20">
        <div className="max-w-96 space-y-4">
          <p className="text-xl opacity-65 font-medium">Hello! I’m Jacob.</p>
          <p className=" text-4xl opacity-87 font-bold leading-tight">
            I{" "}
            <span className="inline-flex text-pink-500">
              <span className="flex space-x-1 items-center">
                <span className="italic font-normal">design</span>
                <FaDrawPolygon className="text-[25px]" />
              </span>
            </span>{" "}
            and{" "}
            <span className="inline-flex text-cyan-500 border border-cyan-500">
              <span className="flex space-x-1 px-2 items-center">
                <span>build</span>
                <FaCode className="text-[25px]" />
              </span>
            </span>{" "}
            web applications for fun{" "}
            <span className="opacity-50">— each crafted with</span>{" "}
            <span className="inline-flex text-yellow-300">
              <span className="flex space-x-1 items-center">
                <span>passion</span>
                <VscSparkleFilled className="text-[25px]" />
              </span>
            </span>{" "}
          </p>
        </div>
        <div className="space-y-8">
          <hr className="bg-secondary h-0.5 w-12 opacity-30" />
          <div className="text-xl max-w-96 space-y-4 relative">
            <p className="opacity-30 absolute">
              I am a software developer based in Cebu, Philippines. I craft
              intuitive and efficient web applications tailored to meet the
              unique needs of my clients.
            </p>
            <mark className="scroll-highlight">
              I am a software developer based in Cebu, Philippines. I craft
              intuitive and efficient web applications tailored to meet the
              unique needs of my clients.
            </mark>
          </div>
        </div>
      </div>
    </div>
  );
}
