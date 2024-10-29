import Image from "next/image";
import { Lora } from "next/font/google";
import PortfolioImage from "../../../public/PortfolioImage.jpg";
import ResumeBtn from "@/CustomHooks/ResumeBtn";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Spotlight } from "../ui/Spotlight";

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className={`${lora.className} w-full h-screen text-white`}>
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}

      <div className="w-4/5 h-full mx-auto flex justify-center items-center">
        <div className="w-1/2 min-h-1/2 space-y-3">
          <h1 className="text-center text-7xl mt-16 font-bold">Kazi Arman</h1>
          <h3 className="text-center text-xl font-bold">
            Front-end Web Developer
          </h3>

          <div className="p-4 flex justify-center gap-2 items-center">
            <button
              disabled
              className="px-6 py-3 bg-black text-white border-2 rounded-2xl"
            >
              Contact me
            </button>
            <ResumeBtn />
          </div>

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

        <div className="w-1/2 h-full flex justify-center items-center">
          <Image
            src={PortfolioImage}
            alt="Portfolio Image"
            className="rounded-full object-cover w-80 h-80 border-2"
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
