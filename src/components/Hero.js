import React, { useState, useEffect } from "react";
import HeroImg from "../asserts/hero1.png";
import resumeFile from "../asserts/resume.pdf";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const texts = ["Software Engineer", "Web Developer"];
  const [currentText, setCurrentText] = useState(0);

  const config = {
    intro:
      "I specialize in building responsive and interactive web applications using modern technologies. Passionate about clean code, problem-solving, and creating intuitive user experiences.",
    skills: ["React.js", "Python", "Express", "MongoDB", "Java", "MySQL"],
    resume: resumeFile,
    rightContent: "Focused on creating scalable and maintainable web applications with clean architecture and best practices."
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-24 px-6 flex justify-center items-center font-poppins who"
      style={{
        background:
          "radial-gradient(circle at center, #ffffff 0%, #deb887 40%, #ffffff 80%)",
      }}
    >
      {/* Subtle animated floating shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-yellow-800 opacity-20 rounded-lg"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i }}
        />
      ))}

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto z-10">

        {/* Left Content */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-gray-800 text-3xl md:text-4xl font-bold mb-2">I'm Ragul Prasanth</h4>

          {/* Animated flipping text */}
          <div className="h-12 mb-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[currentText]}
                className="text-yellow-800 text-3xl md:text-4xl font-extrabold"
                style={{ textShadow: "0 0 10px #b26b00, 0 0 20px #b26b00" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {texts[currentText]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-gray-700">{config.intro}</p>
        </div>

        {/* Center Image */}
        <div className="hero-photo-wrap w-72 h-full md:w-80 md:h-full flex-shrink-0 relative z-10">
          <img
            src={HeroImg}
            alt="Profile"
            className="w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          {/* New small content above skills */}
          <p className="mb-4 text-gray-700">{config.rightContent}</p>

          <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
            {config.skills.map((skill, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 rounded-full bg-yellow-800 text-gray-100 font-medium"
                whileHover={{ scale: 1.1, textShadow: "0 0 8px #b26b00" }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <motion.a
              href={config.resume}
              download
              className="px-6 py-2 rounded-full bg-yellow-800 text-gray-100 font-medium hover:bg-yellow-700 transition"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #b26b00" }}
              transition={{ duration: 0.3 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-2 rounded-full bg-gray-700 text-gray-100 font-medium hover:bg-gray-600 transition"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4a4a4a" }}
              transition={{ duration: 0.3 }}
            >
              View My Work
            </motion.a>
          </div>
        </div>  

      </div>
    </section>
  );
};

export default Hero;
