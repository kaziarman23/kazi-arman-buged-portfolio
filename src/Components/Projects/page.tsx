import Image from "next/image";
import React from "react";
import { Timeline } from "@/Components/ui/Timeline";
import carePoint from "../../../public/Carepoint-camps.png";
import goodBite from "../../../public/Good-bite.png";
import travelMedia from "../../../public/Travel-media.png";

const Projects: React.FC = () => {
  const data = [
    {
      title: "Carepoint Camps",
      content: (
        <div className="w-full h-full">
          <Image
            src={carePoint}
            alt="carePoint image"
            className="object-fill w-4/5 h-1/2 mx-auto md:h-44 lg:h-60"
          />

          <div className="mt-10 flex justify-center items-center gap-5">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Github
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Live Demo
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Good Bite",
      content: (
        <div className="w-full h-full">
          <Image
            src={goodBite}
            alt="goodBite image"
            className="object-fill w-4/5 h-1/2 mx-auto md:h-44 lg:h-60"
          />

          <div className="mt-10 flex justify-center items-center gap-5">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Github
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Live Demo
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Travel Media",
      // content: (
      //     <div>
      //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
      //         Deployed 5 new components on Aceternity today
      //       </p>
      //       <div className="mb-8">
      //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
      //           ✅ Card grid component
      //         </div>
      //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
      //           ✅ Startup template Aceternity
      //         </div>
      //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
      //           ✅ Random file upload lol
      //         </div>
      //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
      //           ✅ Himesh Reshammiya Music CD
      //         </div>
      //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
      //           ✅ Salman Bhai Fan Club registrations open
      //         </div>
      //       </div>
      //       <div className="grid grid-cols-2 gap-4">
      //         <Image
      //           src={travelMedia}
      //           alt="travelMedia image"
      //           width={500}
      //           height={500}
      //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      //         />
      //       </div>
      //     </div>
      //   ),
      content: (
        <div className="w-full h-full">
          <Image
            src={travelMedia}
            alt="travelMedia image"
            className="object-fill w-4/5 h-1/2 mx-auto md:h-44 lg:h-60"
          />

          <div className="mt-10 flex justify-center items-center gap-5">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Github
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Live Demo
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full dark:bg-neutral-950">
      <div className="w-4/5 h-full mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Projects;
