import React from "react";
import { PT_Serif } from "next/font/google";
import { FaCode } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import AboutAnimation from "@/CustomHooks/AboutAnimation";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const AboutSection: React.FC = () => {
  return (
    <div
      className={`${ptSerif.className} w-full h-full text-white xl:h-screen`}
    >
      <div className="w-full h-full mx-auto  xl:w-4/5">
        {/* title content */}
        <div className="flex justify-center items-center p-4 xl:justify-start xl:mt-10">
          <h1 className="text-lg text-white uppercase hover:text-blue-500 xl:text-3xl">
            Explore me
          </h1>
          <span className="loading loading-ring loading-lg text-blue-500 ml-3"></span>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row">
          {/* details content */}
          <div className="p-4 w-full lg:w-2/3">
            <h1 className="font-bold mb-3">About me,</h1>
            <p>
              Hello! I&#39;m kazi arman, a web developer with a love for
              crafting visually engaging and highly functional websites.
              Equipped with a solid foundation in HTML, CSS, and JavaScript,
              I&#39;m dedicated to learning and implementing modern web
              technologies to deliver polished user experiences. I thrive on
              exploring new frameworks and finding efficient solutions to
              complex problems.
            </p>
            <div className="flex flex-col justify-center items-center gap-4 my-10 md:flex-row">
              {/* experience content */}

              <div className="w-4/5 h-40 border-2 rounded-xl flex justify-center items-center flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaCode className="w-8 h-8 hover:text-blue-500" />
                  <h1 className="hover:text-blue-500 font-bold text-2xl">
                    Experience
                  </h1>
                </div>
                <p>6 month</p>
                <h3>Frontend Development</h3>
              </div>
              {/* Education content */}
              <div className="w-4/5 h-40 border-2 rounded-xl flex justify-center items-center flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaBookReader className="w-8 h-8 hover:text-blue-500" />
                  <h1 className="hover:text-blue-500 font-bold text-2xl">
                    Education
                  </h1>
                </div>
                <p>Bachelor of Business Studies</p>
                <h3>Feni Government College</h3>
              </div>
            </div>
          </div>

          {/* animation content */}
          <div className="w-full flex justify-center items-center my-10 md:my-10 lg:w-1/3">
            <AboutAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
