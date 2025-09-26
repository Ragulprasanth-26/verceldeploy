import React from "react";
import { FaReact, FaNodeJs, FaJava, FaPython, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    { name: "Java", level: 95, icon: <FaJava className="text-red-500" /> },
    { name: "React.js", level: 90, icon: <FaReact className="text-cyan-400" /> },
    { name: "Python", level: 90, icon: <FaPython className="text-yellow-300" /> },
    { name: "OOPs", level: 95, icon: <FaCogs className="text-purple-400" /> },
    { name: "DSA", level: 85, icon: <FaProjectDiagram className="text-pink-400" /> },
    { name: "MySQL", level: 80, icon: <SiMysql className="text-blue-500" /> },
    { name: "Express.js", level: 80, icon: <SiExpress className="text-green-500" /> },
    { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "MongoDB", level: 70, icon: <SiMongodb className="text-green-600" /> },
  ];

  return (
    <section className="bg-black py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 border-b-4 border-yellow-400 mb-12 w-[180px] mx-auto">
          Skills
        </h1>

        {/* Skill Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-gray-900 text-yellow-400 px-5 py-2 rounded-full shadow-md font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
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
                    stroke="#333"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#FFD700"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 40 - (2 * Math.PI * 40 * skill.level) / 100
                    }`}
                    fill="none"
                    className="transition-all duration-700"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {skill.level}%
                </span>
              </div>
              <p className="text-white mt-3 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Tech Logos */}
        <Marquee gradient={false} speed={60}>
          <div className="flex gap-16 text-6xl">
            <FaReact className="text-cyan-400 hover:text-blue-500 transition-colors duration-300" />
            <SiExpress className="text-green-500 hover:text-green-400 transition-colors duration-300" />
            <SiMongodb className="text-green-600 hover:text-green-400 transition-colors duration-300" />
            <SiTailwindcss className="text-sky-400 hover:text-sky-300 transition-colors duration-300" />
            <FaJava className="text-red-500 hover:text-red-400 transition-colors duration-300" />
            <FaPython className="text-yellow-300 hover:text-yellow-400 transition-colors duration-300" />
            <SiMysql className="text-blue-500 hover:text-blue-400 transition-colors duration-300" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
