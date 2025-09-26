import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Stats", href: "#awards-stats" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-primary shadow-lg z-50 mb-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          className="font-bold text-yellow-400 text-2xl hover:text-yellow-300 transition-colors"
          href="/"
        >
          A.Ragul Prasanth
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-white font-medium">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group hover:text-yellow-400 transition-colors"
              >
                <a href={link.href}>{link.name}</a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-2/3 bg-primary shadow-lg transform transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-20 gap-6 text-white px-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => setToggle(false)}
              className="hover:text-yellow-400 transition-colors"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
