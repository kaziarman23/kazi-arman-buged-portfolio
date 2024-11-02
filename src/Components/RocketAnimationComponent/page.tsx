"use client";

import Rocket from "@/CustomHooks/Rocket";
import Link from "next/link";
import React, { useState } from "react";

const RocketAnimationComponent: React.FC = () => {
  // states
  const [isAnimating, setIsAnimating] = useState(false);

  // handle click
  const handleRocketClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      window.location.href = "#About";
    }, 700);
  };

  return (
    <Link href="#About" onClick={handleRocketClick}>
      <Rocket isAnimating={isAnimating} />
    </Link>
  );
};

export default RocketAnimationComponent;
