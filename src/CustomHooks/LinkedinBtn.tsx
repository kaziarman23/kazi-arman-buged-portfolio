import React from "react";
import "./CSS/Linkedin.css";


const LinkedinBtn: React.FC = () => {
  return (
    <div className="Linkedin_light_button">
      <button className="Linkedin_bt">
        <div className="Linkedin_light_holder">
          <div className="Linkedin_dot" />
          <div className="Linkedin_light" />
        </div>
        <div className="Linkedin_button_holder">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.25h-3v-5.5c0-1.381-.112-2.623-2-2.623-1.887 0-2.171 1.146-2.171 2.537v5.586h-3v-11h2.842v1.522h.034c.396-.745 1.35-1.522 2.807-1.522 3.034 0 3.621 1.988 3.621 4.577v6.423z" />
          </svg>
          <p>LinkedIn</p>
        </div>
      </button>
    </div>
  );
};

export default LinkedinBtn;
