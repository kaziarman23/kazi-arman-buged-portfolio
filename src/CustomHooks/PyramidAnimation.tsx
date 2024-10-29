import React from "react";
import "./CSS/PyramidAnimation.css";

const PyramidAnimation: React.FC = () => {
  return (
    <div className="pyramid-loader">
      <div className="pyramid_wrapper">
        <span className="pyramid_side pyramid_side1" />
        <span className="pyramid_side pyramid_side2" />
        <span className="pyramid_side pyramid_side3" />
        <span className="pyramid_side pyramid_side4" />
        <span className="pyramid_shadow" />
      </div>
    </div>
  );
};

export default PyramidAnimation;
