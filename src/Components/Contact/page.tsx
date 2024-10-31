import Email from "@/CustomHooks/Email";
import GithubBtn from "@/CustomHooks/GithubBtn";
import LinkedinBtn from "@/CustomHooks/LinkedinBtn";
import TimeLoop from "@/CustomHooks/TimeLoop";
import React from "react";
import RocketAnimationComponent from "../RocketAnimationComponent/page";

const Contact: React.FC = () => {
  return (
    <div id="Contact" className="w-full h-screen">
      <div className="w-4/5 h-full mx-auto">
        <h4 className="text-2xl font-bold  text-center p-5">Get in Touch</h4>
        <div className="w-full h-4/5  flex justify-center items-center">
          {/* left side content */}
          <div className="w-full h-full text-white">
            {/* <TimeLoop /> */}
            <h1 className="text-5xl font-bold  text-center p-5 hover:text-blue-500">
              Contact me
            </h1>
            <p className="p-4">
              I&#39;m always open to new opportunities, collaborations, or
              simply a good conversation about development. If you’re interested
              in working together or have any questions, feel free to reach out.
              I’d love to hear from you!
            </p>
            <div className="flex justify-center items-center">
              {/* left side content */}
              <div className="w-2/3">
                <div className="flex items-center gap-5">
                  <Email />
                  <h2 className="text-2xl font-bold">Kaziarman@proton.me</h2>
                </div>
                <div className="flex justify-start items-center gap-5">
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
              <div className="w-1/3 h-full flex justify-center items-center">
                <RocketAnimationComponent />
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center ">
          <p>© 2025 Kazi Arman. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
