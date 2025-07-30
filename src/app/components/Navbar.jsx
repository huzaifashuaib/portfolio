"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdDeviceHub } from "react-icons/md";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenu = () => setIsMenuOpen(!isMenuOpen);
  const [activeSection, setActiveSection] = useState("home");
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "certification", label: "Certifications" },
    { id: "blog", label: "Blog" },
    { id: "collaborate", label: "Collaborate" },
  ];

  return (
    <>
      <div className=" max-w-6xl px-4 mx-auto  fixed inset-x-5 top-4 z-20 rounded-full border border-gray-200 shadow-md backdrop-blur-sm bg-white/40 ">
        {/* desktop Links */}
        <div className="flex items-center justify-between h-18 px-5">
          <Link
            href={"/#home"}
            className="text-xl font-bold text-primary bg-amber-300 rounded-md p-1 border-2 border-primary"
          >
            <MdDeviceHub size={25} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems?.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={`/#${item?.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono ${
                    activeSection === item.id ? "text-primary font-bold" : ""
                  } hover:text-primary transition-colors text-base`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {/* Mobile Links */}
          <button
            className=" md:hidden rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer "
            onClick={toggleIsMenu}
          >
            <FaBarsStaggered className="size-6" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? " min-h-screen fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur-xs opacity-100 scale-100 flex flex-col justify-center items-center "
            : "max-h-0 opacity-0 scale-95 -translate-x-3"
        }`}
      >
        <div className="py-4 space-y-5">
          <div className=" absolute top-15 right-8" onClick={toggleIsMenu}>
            <XMarkIcon className="size-6" />
          </div>
          {menuItems.map((item) => (
            <div key={item.label}>
              <Link
                onClick={() => {
                  toggleIsMenu();
                  scrollToSection(item.id);
                }}
                href={`/#${item.id}`}
                className="block py-2 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
