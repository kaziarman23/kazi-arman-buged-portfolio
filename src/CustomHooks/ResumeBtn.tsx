import React from "react";
import "./CSS/resume.css";

const ResumeBtn: React.FC = () => {
  return (
    <div className="resume_container">
      <label className="resume_label">
        <input type="checkbox" className="input" />

        <span className="resume_circle">
          <svg
            className="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
          <div className="resume_square" />
        </span>

        <p className="resume_title font-bold">Resume</p>
        <p className="resume_title">Open</p>
      </label>
    </div>
  );
};

export default ResumeBtn;
