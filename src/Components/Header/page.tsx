"use client";

import React from "react";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import { FaUserCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { BsJournalCode } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";


const Header = () => {
  const navItems = [
    {
      name: "About",
      link: "#About",
      icon: (
        <FaUserCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Skills",
      link: "#Skills",
      icon: (
        <FaLaptopCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#Projects",
      icon: (
        <BsJournalCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#Contact",
      icon: (
        <MdContactPhone className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Header;
