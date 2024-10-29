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
    <div className="w-full h-full ">
      <div className="w-4/5 h-full mx-auto p-5">
        {/* section title */}
        <div className="flex items-center mb-10">
          <PyramidAnimation />
          <h1 className="text-4xl text-white">Skills</h1>
        </div>

        {/* <div className="w-full h-full"> */}
        {/* front-end skill content */}
        <div className="space-y-3">
          <h1 className="text-2xl text-white font-bold">
            Front-End Development
          </h1>
          <div className="grid grid-cols-5 grid-rows-2 gap-5 p-4">
            {frontendkills.map((item) => (
              <div
                key={item.id}
                className="w-40 h-40 flex justify-center items-center flex-col gap-3 hover:rounded-2xl hover:border-2  hover:border-blue-800 hover:text-white"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* back-end skill content */}
        <div className="space-y-3 mt-10">
          <h1 className="text-2xl text-white font-bold">
            Back-End Development
          </h1>
          <div className="grid grid-cols-5  gap-5 p-4">
            {backendSkills.map((item) => (
              <div
                key={item.id}
                className="w-40 h-40 flex justify-center items-center flex-col gap-3 hover:rounded-2xl hover:border-2  hover:border-blue-800 hover:text-white"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* additionall skill content */}
        <div className="space-y-3 mt-10">
          <h1 className="text-2xl text-white font-bold">
            Additional Development
          </h1>
          <div className="grid grid-cols-5 gap-5 p-4">
            {additionalskill.map((item) => (
              <div
                key={item.id}
                className="w-40 h-40 flex justify-center items-center flex-col gap-3 hover:rounded-2xl hover:border-2  hover:border-blue-800 hover:text-white"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <h1 className="text-xl">{item.title}</h1>
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
