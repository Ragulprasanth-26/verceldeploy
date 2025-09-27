import React from "react";
import HeroImg from "../asserts/hero.png";
import resumeFile from '../asserts/resume.pdf'
const Hero = () => {
  const config = {
    subtitle: "I'm a Software Developer 🚀",
    intro:
      "I specialize in building responsive and interactive web applications using modern technologies. Passionate about clean code, problem-solving, and creating intuitive user experiences.",
    skills: ["React.js", "Python", "Express", "MongoDB", "Java","MySql"],
    resume: resumeFile, // Place your resume in public folder
  };

  return (
    <section className="bg-primary py-12 md:py-20 px-6 pt-32">
      <div className="hero-inner flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto">
        
        {/* Image and Name */}
        <div className="hero-photo-wrap flex flex-col items-center text-center">
          <img
            src={HeroImg}
            alt="Profile"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-white text-2xl md:text-3xl font-bold mt-4 drop-shadow-md">
            RAGUL PRASANTH
          </h3>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            Hi 👋
          </h4>
          <p className="mt-2 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            {config.subtitle}
          </p>

          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
            {config.intro}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
            {config.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-secondary text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Resume & CTA Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href={config.resume}
              download
              className="button px-6 py-2 text-lg bg-yellow-400 text-black font-semibold rounded-md hover:bg-secondary transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="button px-6 py-2 text-lg bg-secondary text-white font-semibold rounded-md hover:bg-secondary transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
