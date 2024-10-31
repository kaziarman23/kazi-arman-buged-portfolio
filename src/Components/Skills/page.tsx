import PyramidAnimation from "@/CustomHooks/PyramidAnimation";
import Image from "next/image";

// Importing Images
import html from "../../../public/Html.png";
import css from "../../../public/Css.png";
import sass from "../../../public/Sass.png";
import tailwind from "../../../public/Tailwind.png";
import js from "../../../public/JavaScript.png";
import typeScript from "../../../public/Typescript.png";
import react from "../../../public/React.png";
import next from "../../../public/Next.png";

import api from "../../../public/api.png";
import express from "../../../public/ExpressJs.png";
import node from "../../../public/NodeJs.png";
import mongodb from "../../../public/Mongodb.png";

import bootstrap from "../../../public/Bootstrap.png";
import webpack from "../../../public/Webpack.png";
import firebase from "../../../public/Firebase.png";
import framerMotion from "../../../public/FramerMotion.png";
import gsap from "../../../public/Gsap.png";

const Skills = () => {
  const frontendkills = [
    {
      img: html,
      title: "HTML",
      description: "Intermediate",
      id: 1,
    },
    {
      img: css,
      title: "CSS",
      description: "Intermediate",
      id: 2,
    },
    {
      img: sass,
      title: "Sass",
      description: "Basic",
      id: 3,
    },
    {
      img: tailwind,
      title: "Tailwind",
      description: "Intermediate",
      id: 4,
    },
    {
      img: js,
      title: "JavaScript",
      description: "Intermediate",
      id: 5,
    },
    {
      img: typeScript,
      title: "TypeScript",
      description: "Basic",
      id: 6,
    },
    {
      img: react,
      title: "React",
      description: "Intermediate",
      id: 7,
    },
    {
      img: next,
      title: "Next JS",
      description: "Basic",
      id: 8,
    },
  ];
  const backendSkills = [
    {
      img: api,
      title: "Rest API's",
      description: "Intermediate",
      id: 1,
    },
    {
      img: express,
      title: "Express js",
      description: "Intermediate",
      id: 2,
    },
    {
      img: node,
      title: "Node js",
      description: "Intermediate",
      id: 3,
    },
    {
      img: mongodb,
      title: "MongoDB",
      description: "Intermediate",
      id: 4,
    },
  ];
  const additionalskill = [
    {
      img: bootstrap,
      title: "Bootstrap",
      description: "Intermediate",
      id: 1,
    },
    {
      img: webpack,
      title: "Webpack",
      description: "Basic",
      id: 2,
    },
    {
      img: firebase,
      title: "Firebase",
      description: "Intermediate",
      id: 3,
    },
    {
      img: framerMotion,
      title: "Framer Motion",
      description: "Intermediate",
      id: 4,
    },
    {
      img: gsap,
      title: "GSAP",
      description: "Basic",
      id: 5,
    },
  ];

  return (
    <div id="Skills" className="w-full h-full">
      <div className="w-full h-full mx-auto p-4 lg:w-4/5 xl:p-5">
        {/* section title */}
        <div className="flex items-center mb-10">
          {/* <PyramidAnimation /> */}
          <h1 className="text-4xl text-white hover:text-blue-500">Skills</h1>
        </div>

        {/* front-end skill content */}
        <div className="space-y-3">
          <h1 className="text-lg text-white font-bold xl:text-2xl">
            Front-End Development
          </h1>
          <div className="w-full h-full grid grid-cols-2 mx-auto gap-2 sm:w-4/5 sm:grid-cols-3 lg:grid-cols-4 lg:w-full lg:mx-0 xl:grid-cols-5 xl:gap-5 xl:p-4">
            {frontendkills.map((item) => (
              <div
                key={item.id}
                className="w-32 h-32 flex justify-center items-center flex-col gap-3 hover:rounded-2xl hover:border-2 hover:border-blue-800 hover:text-white xl:w-40 xl:h-40"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-8 h-8 object-cover sm:w-10 sm:h-10 xl:w-16 xl:h-16"
                />
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* back-end skill content */}
        <div className="space-y-3 mt-10 lg:mt-0">
          <h1 className="text-lg text-white font-bold xl:text-2xl">
            Back-End Development
          </h1>
          <div className="w-full h-full grid grid-cols-2 mx-auto gap-2 sm:w-4/5 sm:grid-cols-3 lg:grid-cols-4 lg:w-full lg:mx-0 xl:grid-cols-5 xl:gap-5 xl:p-4">
            {backendSkills.map((item) => (
              <div
                key={item.id}
                className="w-32 h-32 flex justify-center items-center flex-col gap-3 hover:rounded-2xl hover:border-2 hover:border-blue-800 hover:text-white xl:w-40 xl:h-40"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-8 h-8 object-cover sm:w-10 sm:h-10 xl:w-16 xl:h-16"
                />
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* additionall skill content */}
        <div className="space-y-3 mt-10">
          <h1 className="text-lg text-white font-bold xl:text-2xl">
            Additional Development
          </h1>
          <div className="w-full h-full grid grid-cols-2 mx-auto gap-2 sm:w-4/5 sm:grid-cols-3 lg:grid-cols-4 lg:w-full lg:mx-0 xl:grid-cols-5 xl:gap-5 xl:p-4">
            {additionalskill.map((item) => (
              <div
                key={item.id}
                className="w-32 h-32 flex justify-center items-center flex-col gap-3 hover:rounded-2xl hover:border-2 hover:border-blue-800 hover:text-white xl:w-40 xl:h-40"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-8 h-8 object-cover sm:w-10 sm:h-10 xl:w-16 xl:h-16"
                />
                <h1 className="text-sm sm:text-xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
