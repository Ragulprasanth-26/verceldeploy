import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Stats", href: "#awards-stats" },
    { name: "Skills", href: "#skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600); // Adjust based on Hero height
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Normal Header on Hero */}
      {!scrolled && (
        <header className="fixed top-0 left-0 w-full z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <a
              className="font-bold text-yellow-800 text-2xl hover:text-black transition-colors"
              href="/"
            >
              A.Ragul Prasanth
            </a>

            <nav className="hidden md:flex">
              <ul className="flex gap-6 text-[#92400e] font-medium">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="relative group hover:text-[#b45309] transition-colors"
                  >
                    <a href={link.href}>{link.name}</a>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-800 group-hover:w-full transition-all"></span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile toggle on top of Hero */}
            <button
              className="md:hidden text-[#92400e]"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </header>
      )}

      {/* Sticky Yellow Bar after scroll */}
      {scrolled && (
        <header className="fixed top-0 left-0 w-full z-50 bg-yellow-800 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
            <div className="flex gap-6 items-center text-white font-medium text-sm">
              
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <span>ragulprasanthwork@gmail.com</span>
              </div>
            </div>

            {/* Mobile/Desktop Toggle */}
            <button
              className="text-white md:block"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </header>
      )}

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-primary shadow-lg transform transition-transform duration-300 z-50 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-20 gap-6 text-yellow-800 px-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => setToggle(false)}
              className="hover:text-black transition-colors"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
