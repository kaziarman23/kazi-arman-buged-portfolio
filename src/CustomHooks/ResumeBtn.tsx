import React from "react";
import { PiReadCvLogoFill } from "react-icons/pi";
import "./CSS/resume.css";

const ResumeBtn: React.FC = () => {
  return (
    <div className="resume_container">
      <label className="resume_label">
        <input type="checkbox" className="input" />
        <span className="resume_circle">
          <PiReadCvLogoFill className="w-8 h-8 icon" />
          <div className="resume_square" />
        </span>
        <p className="resume_title font-bold">Resume</p>
        <p className="resume_title">Open</p>
      </label>
    </div>
  );
};

export default ResumeBtn;
