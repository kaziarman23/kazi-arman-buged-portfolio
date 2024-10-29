import React from "react";
import { PT_Serif } from "next/font/google";
import { FaCode } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
// import AboutAnimation from "@/CustomHooks/AboutAnimation";
// import { Sparkles } from "@/CustomHooks/Sparkles";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const AboutSection = () => {
  return (
    <div className={`${ptSerif.className} w-full h-screen text-white`}>
      <div className="w-4/5 h-full mx-auto grid grid-cols-3 grid-rows-3">
        {/* title content */}
        <div className="col-span-3 row-span-1 relative">
          <div className="w-full h-full flex justify-center items-center p-4">
            <h1 className="text-3xl text-white uppercase hover:text-blue-500">
              Explore me
            </h1>
            <span className="loading loading-ring loading-lg text-blue-500 ml-3"></span>
          </div>
        </div>
        {/* details content */}
        <div className="col-span-2 row-span-2">
          <div className="p-4">
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
            <div className="flex justify-center items-center gap-2 my-10">
              {/* experience content */}
              <div className="w-1/2 h-40 border-2 rounded-xl flex justify-center items-center flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaCode className="w-8 h-8" />
                  <h1 className=" font-bold text-2xl">Experience</h1>
                </div>
                <p>6 month</p>
                <h3>Frontend Development</h3>
              </div>
              {/* Education content */}
              <div className="w-1/2 h-40 border-2 rounded-xl flex justify-center items-center flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaBookReader className="w-8 h-8" />
                  <h1 className=" font-bold text-2xl">Education</h1>
                </div>
                <p>Bachelor of Business Studies</p>
                <h3>Feni Government College</h3>
              </div>
            </div>
          </div>
        </div>
        {/* animation content */}
        <div className="col-span-1 row-span-2 flex justify-center items-center">
          {/* have to uncoment it latter */}
          {/* <AboutAnimation /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
