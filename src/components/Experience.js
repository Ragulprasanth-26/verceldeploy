import React from "react";
import ExpBg from "../asserts/Experince.png"; // your background image

const Experience = () => {
  const experiences = [
    {
      title: "Internship - Inetzz Technology, Chennai",
      period: "July 2024 - Aug 2024",
      role: "Web Development Intern",
      details:
        "Completed a one-month internship focused on HTML, CSS, and JavaScript. Learned practical web development skills and worked on mini-projects.",
    },
    {
      title: "Full Stack Developer - Qads, Karaikudi",
      period: "Aug 2025 - Sep 2025",
      role: "Full Stack Developer",
      details:
        "Worked as a Full Stack Developer, building responsive and interactive web applications using React.js, Express, PHP-Laravel and MySQL.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-fixed bg-center bg-cover min-h-screen px-6 py-16 md:py-24 flex items-center"
      style={{ backgroundImage: `url(${ExpBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Cards */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white border-b-4 border-white mb-6 w-fit">
            Experience
          </h1>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white/80 rounded-2xl shadow-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-6 w-5 h-5 bg-yellow-800 rounded-full border-4 border-gray-900 hidden md:block"></div>

              <h3 className="text-yellow-800 text-xl md:text-2xl font-bold">
                {exp.title}
              </h3>
              <p className="text-black/70 font-medium mt-2">{exp.role}</p>
              <p className="text-black/50 text-sm mt-1">{exp.period}</p>
              <p className="text-black/70 text-sm mt-3">{exp.details}</p>
            </div>
          ))}
        </div>

        {/* Right side - One line content */}
        <div className="flex justify-center md:justify-end items-center text-center md:text-right">
          <p
            className="text-white font-bold animate-pulse leading-snug"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "70px",
              fontWeight: 600,
            }}
          >
            “Experience is the <br /> best  teacher”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
