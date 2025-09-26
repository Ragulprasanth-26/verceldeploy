import React from "react";
import AboutImg from "../asserts/about.png";

const About = () => {
  const education = [
    {
      level: "College",
      name: "Mount Zion College of Engineering and Technology",
      detail: "B.E. in Electronics and Communication Engineering (CGPA: 8.4/10)",
      passout: "2021-2025"
    },
    {
      level: "12th Grade",
      name: "Karaikudi Maharishi Vidya Mandir",
      detail: "Percentage: 87%",
      passout: "2021"
    },
    {
      level: "10th Grade",
      name: "Ramanathan Chettiar Municiple High School",
      detail: "Percentage: 86%",
      passout: "2019"
    },
  ];

  return (
    <section
      className="flex flex-col md:flex-row items-center bg-secondary px-6 py-16 md:py-24 gap-10"
      id="about"
    >
      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={AboutImg}
          alt="About Me"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-4xl font-bold text-primary border-b-4 border-primary mb-8 w-[220px]">
          About Me
        </h1>
        <div  className="bg-black p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-6">
        <p className="text-gray-200 mb-6">
          Hi, my name is{" "}
          <span className="text-yellow-400 font-semibold">A. Ragul Prasanth</span>. I am a Full Stack Web Developer, passionate about building interactive and responsive websites using React.js, Tailwind CSS, Node.js, and MongoDB.
        </p>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            > <div className="flex justify-evenly md:justify-between">
              <h3 className="text-yellow-400 text-lg font-bold">{edu.level}</h3>
              <h3 className="text-yellow-400 text-sm font-bold">{edu.passout}</h3>
              </div>
              <p className="text-white font-semibold">{edu.name}</p>
              <p className="text-gray-300">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
