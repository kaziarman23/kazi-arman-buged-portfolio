"use client";

import PyramidAnimation from "@/CustomHooks/PyramidAnimation";
import { HoverEffect } from "../ui/card-hover-effect";

import html from "../../../public/Html.png";
import css from "../../../public/Css.png";
import sass from "../../../public/Sass.png";
import tailwind from "../../../public/Tailwind.png";
import js from "../../../public/JavaScript.png";
import typeScript from "../../../public/Typescript.png";
import react from "../../../public/React.png";
import next from "../../../public/Next.png";

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
      img: "",
      title: "Express js",
      description: "Intermediate",
      id: 1,
    },
    {
      img: "",
      title: "Rest API's",
      description: "Intermediate",
      id: 2,
    },
    {
      img: "",
      title: "Node js",
      description: "Intermediate",
      id: 3,
    },
    {
      img: "",
      title: "MongoDB",
      description: "Intermediate",
      id: 4,
    },
  ];
  const additionalskill = [
    {
      img: "",
      title: "Bootstrap",
      description: "Intermediate",
      id: 1,
    },
    {
      img: "",
      title: "Webpack",
      description: "Basic",
      id: 2,
    },
    {
      img: "",
      title: "Firebase",
      description: "Intermediate",
      id: 3,
    },
    {
      img: "",
      title: "Framer Motion",
      description: "Intermediate",
      id: 4,
    },
    {
      img: "",
      title: "GSAP",
      description: "Basic",
      id: 5,
    },
  ];

  return (
    <div className="w-full h-screen ">
      <div className="w-4/5 h-full mx-auto p-5">
        {/* section title */}
        <div className="flex items-center mb-10">
          <PyramidAnimation />
          <h1 className="text-4xl text-white">Skills</h1>
        </div>

        {/* front-end content */}
        <div className="space-y-3">
          <h1 className="text-2xl text-white font-bold">
            Front-End Development
          </h1>
          {/* skills contaner */}
          <div className="w-full h-96 border-2 border-blue-600 rounded-xl">
            <HoverEffect
              items={frontendkills.map((item) => ({
                title: item.title,
                description: item.description,
                img: item.img,
                id: item.id,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
