import Image from "next/image";
import React from "react";
import { Timeline } from "@/Components/ui/timeline";
import carePoint from "../../../public/Carepoint-camps.png";
import goodBite from "../../../public/Good-bite.png";
import travelMedia from "../../../public/Travel-media.png";

const Projects: React.FC = () => {
  const data = [
    {
      title: "Carepoint Camps",
      content: (
        <div className="w-full min-h-full">
          <Image
            src={carePoint}
            alt="carePoint image"
            className="object-fill w-full h-1/2 mx-auto md:h-44 lg:h-60"
          />
          <div className="mt-5 flex justify-center items-center gap-2 flex-col sm:flex-row">
            <a
              href="https://github.com/kaziarman23/carepoint-camps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex py-1 px-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 xl:px-4 xl:py-2">
                Github
              </button>
            </a>
            <a
              href="https://carepoint-camps.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex py-1 px-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 xl:px-4 xl:py-2">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Good Bite",
      content: (
        <div className="w-full min-h-full">
          <Image
            src={goodBite}
            alt="goodBite image"
            className="object-fill w-full h-1/2 mx-auto md:h-44 lg:h-60"
          />

          <div className="mt-5 flex justify-center items-center gap-2 flex-col sm:flex-row">
            <a
              href="https://github.com/kaziarman23/good-bite-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex py-1 px-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 xl:px-4 xl:py-2">
                Github
              </button>
            </a>
            <a
              href="https://good-bite-client.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex py-1 px-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 xl:px-4 xl:py-2">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Travel Media",
      content: (
        <div className="w-full min-h-full">
          <Image
            src={travelMedia}
            alt="travelMedia image"
            className="object-fill w-full h-1/2 mx-auto md:h-44 lg:h-60"
          />

          <div className="mt-5 flex justify-center items-center gap-2 flex-col sm:flex-row">
            <a
              href="https://github.com/kaziarman23/travel-media-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex py-1 px-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 xl:px-4 xl:py-2">
                Github
              </button>
            </a>
            <a
              href="https://travel-media-client.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex py-1 px-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 xl:px-4 xl:py-2">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="Projects" className="w-full h-full dark:bg-neutral-950">
      <div className="w-4/5 h-full mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Projects;
