import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Internship - Inetzz Technology,Chennai",
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
        "Worked as a Full Stack Developer, building responsive and interactive web applications using React.js, Express, PHP-laravel and MySql.",
    },
  ];

  return (
    <section className="bg-secondary min-h-screen px-6 py-16 md:py-24" id="experience">
      <h1 className="text-4xl md:text-5xl font-bold text-black border-b-4 border-primary mb-12 w-fit mx-auto text-center">
        Experience
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center md:items-start bg-black rounded-2xl shadow-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300 flex-1"
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black"></div>

            <h3 className="text-yellow-400 text-xl md:text-2xl font-bold mt-4 md:mt-6">
              {exp.title}
            </h3>
            <p className="text-gray-300 font-medium mt-2">{exp.role}</p>
            <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
            <p className="text-gray-300 text-sm mt-3">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
