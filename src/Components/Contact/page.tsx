import Email from "@/CustomHooks/Email";
import GithubBtn from "@/CustomHooks/GithubBtn";
import LinkedinBtn from "@/CustomHooks/LinkedinBtn";
import React from "react";
import RocketAnimationComponent from "../RocketAnimationComponent/page";

const Contact: React.FC = () => {
  return (
    <div id="Contact" className="w-full h-full xl:h-screen">
      <div className="w-4/5 h-full mx-auto">
        <h4 className="text-2xl font-bold  text-center p-5">Get in Touch</h4>
        <div className="w-full h-4/5 flex justify-center items-center">
          <div className="w-full h-full text-white">
            <h1 className="text-3xl font-bold text-center p-5 hover:text-blue-500 xl:text-5xl">
              Contact me
            </h1>
            <p className="text-white md:p-4">
              I&#39;m always open to new opportunities, collaborations, or
              simply a good conversation about development. If you’re interested
              in working together or have any questions, feel free to reach out.
              I’d love to hear from you!
            </p>
            <div className="flex justify-center items-center flex-col gap-5 md:flex-row xl:w-4/5 xl:mx-auto">
              {/* left side content */}
              <div className="w-full h-full md:w-2/3">
                <div className="flex justify-start items-center gap-5">
                  <Email />
                  <h2 className="text-base font-bold text-white sm:text-lg xl:text-2xl cursor-pointer">
                    <a href="mailto:Kaziarman@proton.me" target="_blank">Kaziarman@proton.me</a>
                  </h2>
                </div>
                <div className="flex justify-center items-center gap-5 md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/kazi-arman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinBtn />
                  </a>
                  <a
                    href="https://github.com/kaziarman23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubBtn />
                  </a>
                </div>
              </div>
              {/* right side rocket */}
              <div className="w-full h-96 flex justify-center items-center md:w-1/3 md:h-full">
                <RocketAnimationComponent />
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center">
          <p>© 2025 Kazi Arman. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
