import React from "react";
import "./CSS/TimeLoop.css";

const TimeLoop = () => {
  return (
    <>
      <section className="Timeloop_loader">
        <div className="Timeloop_slider" style={{ "--i": 0 }}></div>
        <div className="Timeloop_slider" style={{ "--i": 1 }}></div>
        <div className="Timeloop_slider" style={{ "--i": 2 }}></div>
        <div className="Timeloop_slider" style={{ "--i": 3 }}></div>
        <div className="Timeloop_slider" style={{ "--i": 4 }}></div>
      </section>
    </>
  );
};

export default TimeLoop;
