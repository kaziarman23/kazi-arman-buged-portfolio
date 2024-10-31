import Image from "next/image";
import { Lora } from "next/font/google";
import PortfolioImage from "../../../public/PortfolioImage.jpg";
import ResumeBtn from "@/CustomHooks/ResumeBtn";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div
      id="About"
      className={`${lora.className} w-full h-full text-white xl:h-screen`}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="w-full h-full mx-auto flex flex-col justify-center items-center md:flex-row xl:w-4/5">
        {/* nameinfo section */}
        <div className="w-4/5 min-h-1/2 space-y-3 xl:w-1/2">
          <h1 className="text-center text-2xl mt-16 font-bold hover:text-blue-500 sm:text-4xl xl:text-7xl">
            Kazi Arman
          </h1>
          <h3 className="text-center text-sm font-bold xl:text-xl">
            Front-end Web Developer
          </h3>

          <div className="p-4 flex justify-center gap-2 items-center">
            <Link href="#Contact">
              <button className="px-4 py-2 text-sm bg-black text-white border-2 rounded-2xl hover:border-blue-500 md:px-6 md:py-3">
                Quick Contact
              </button>
            </Link>
            <ResumeBtn />
          </div>
          {/* social button section */}
          <div className="p-4 gap-3 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/kazi-arman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/kaziarman23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
        </div>
        {/* profile picture section */}
        <div className="w-4/5 h-full my-10 flex justify-center items-center md:my-0 xl:w-1/2">
          <Image
            src={PortfolioImage}
            alt="Portfolio Image"
            className="rounded-full object-cover w-40 h-40 border-2 md:w-60 md:h-60 xl:w-80 xl:h-80"
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
