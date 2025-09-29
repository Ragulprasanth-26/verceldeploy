import React from "react";
import AboutImg from "../asserts/about.png";

const About = () => {
  const education = [
    {
      level: "College",
      name: "Mount Zion College of Engineering and Technology",
      detail:
        "B.E. in Electronics and Communication Engineering (CGPA: 8.4/10)",
      passout: "2021-2025",
    },
    {
      level: "12th Grade",
      name: "Karaikudi Maharishi Vidya Mandir",
      detail: "Percentage: 87%",
      passout: "2021",
    },
    {
      level: "10th Grade",
      name: "Ramanathan Chettiar Municiple High School",
      detail: "Percentage: 86%",
      passout: "2019",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-24"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5e6d3] to-white"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col gap-12 items-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#92400e] border-b-4 border-[#b45309] mb-12">
          About Me
        </h1>

        {/* Grid: Image + Cards */}
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Right Side (Image + Shape) */}
          <div className="relative flex justify-center">
            {/* Decorative Shape */}
            <div
              className="absolute top-0 bottom-0 w-full h-full bg-[#fcd9b6] -z-10 animate-float animate-morph "
              
            ></div>

            <img
              src={AboutImg}
              alt="About"
              className="max-w-sm w-full object-cover relative z-10"
            />
          </div>

          {/* Left Side (Text + Cards) */}
          <div>
            <div className="card bg-white p-6 rounded-xl shadow-lg mb-12">
              <p className="text-lg text-[#5c4033]">
                Hi, my name is{" "}
                <span className="text-[#92400e] font-semibold">
                  A. Ragul Prasanth
                </span>
                . I am a Full Stack Web Developer, passionate about building
                interactive and responsive websites using React.js, Tailwind CSS,
                Node.js, and MongoDB.
              </p>
            </div>

            {/* Education Cards */}
            <div className="flex flex-col gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card bg-white p-6 rounded-xl shadow-lg text-left hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="text-[#92400e] text-lg font-bold">
                      {edu.level}
                    </h3>
                    <h3 className="text-[#92400e] text-sm font-bold">
                      {edu.passout}
                    </h3>
                  </div>
                  <p className="text-[#5c4033] font-semibold">{edu.name}</p>
                  <p className="text-[#6b4423]">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
