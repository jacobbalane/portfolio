import Title from "../atoms/title";
import Button from "../atoms/button";
import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="px-8 py-14">
      <div className="flex flex-col space-y-10 max-w-96 mx-auto">
        <Title
          title="Discover More—My Socials and Resume"
          subtitle="Follow my career path and access my resume"
        />
        <div className="flex flex-col space-y-4 opacity-65 mx-auto">
          <Link
            href="https://www.facebook.com/balanejacob"
            target="_blank"
            rel="noreferrer nooopener"
            className="flex space-x-2 items-center text-xl">
            <FaFacebook />
            <p>Facebook</p>
          </Link>
          <Link
            href="https://github.com/jacobbalane"
            target="_blank"
            rel="noreferrer nooopener"
            className="flex space-x-2 items-center text-xl">
            <FaGithub />
            <p>GitHub</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/balanejacob/"
            target="_blank"
            rel="noreferrer nooopener"
            className="flex space-x-2 items-center text-xl">
            <FaLinkedin />
            <p>Linkedin</p>
          </Link>
        </div>
        <Button text="Download Resume" Icon={FaFileDownload} />
      </div>
    </div>
  );
}
