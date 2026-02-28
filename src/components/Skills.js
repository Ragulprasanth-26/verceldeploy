import React from "react";
import {
  FaReact,
  FaJava,
  FaCogs,
  FaProjectDiagram,
  FaRobot,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { SiTypescript } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "PDF Core", level: 95, icon: <FaFilePdf className="text-red-600" /> },
    { name: "AI Integration", level: 95, icon: <FaRobot className="text-indigo-500" /> },
    { name: "TypeScript", level: 90, icon: <SiTypescript className="text-blue-600" /> },
    { name: "Java", level: 95, icon: <FaJava className="text-red-500" /> },
    { name: "React.js", level: 90, icon: <FaReact className="text-cyan-400" /> },
    { name: "OOPs", level: 95, icon: <FaCogs className="text-purple-400" /> },
    { name: "DSA", level: 85, icon: <FaProjectDiagram className="text-pink-400" /> },
    { name: "MySQL", level: 80, icon: <SiMysql className="text-blue-500" /> },
    { name: "Express.js", level: 80, icon: <SiExpress className="text-green-500" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6"
    >
      {/* Linear gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5e6d3] to-white"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#92400e] border-b-4 border-[#b45309] mb-12 w-[180px] mx-auto">
          Skills
        </h1>

        {/* Skill Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-[#fdf6f0] text-[#5c4033] px-5 py-2 rounded-full shadow-md font-semibold hover:bg-[#b45309] hover:text-white transition-all duration-300"
            >
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>

        {/* Circular Progress Bars */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#b45309"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 - (2 * Math.PI * 40 * skill.level) / 100
                      }`}
                    fill="none"
                    className="transition-all duration-700"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[#92400e] font-bold">
                  {skill.level}%
                </span>
              </div>
              <p className="text-[#5c4033] mt-3 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Tech Logos */}
        <Marquee gradient={false} speed={60}>
          <div className="flex gap-16 text-6xl px-16">
            <FaFilePdf className="text-red-600 hover:text-red-500 transition-colors duration-300" />
            <SiTypescript className="text-blue-600 hover:text-blue-500 transition-colors duration-300" />
            <FaReact className="text-cyan-400 hover:text-blue-500 transition-colors duration-300" />
            <SiExpress className="text-green-500 hover:text-green-400 transition-colors duration-300" />
            <SiTailwindcss className="text-sky-400 hover:text-sky-300 transition-colors duration-300" />
            <FaJava className="text-red-500 hover:text-red-400 transition-colors duration-300" />
            <SiMysql className="text-blue-500 hover:text-blue-400 transition-colors duration-300" />
            <FaRobot className="text-purple-500 hover:text-purple-400 transition-colors duration-300" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
