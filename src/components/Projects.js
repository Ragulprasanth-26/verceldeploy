import React from "react";
import WebSiteImg1 from "../asserts/ecommerce-websites.jpg";
import Todolist from "../asserts/todolist.png";
import X from "../asserts/Java-Logo.png";
import Task from "../asserts/task_managrment.png";
import qura from "../asserts/qura.png";
import franchise from '../asserts/franchise.png';

const Projects = () => {
  const config = {
    projects: [
      {
        image: WebSiteImg1,
        title: "E-Commerce Website",
        description:
          "Mini e-commerce website like Amazon/Meesho built with MERN stack and styled with Tailwind. (Status: Completed ✅ but not yet deployed)",
        links: "https://github.com/Ragulprasanth-26/mini-eccomance",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      },
      {
        image: Todolist,
        title: "To-Do List App",
        description:
          "A simple and clean To-Do List project built with React.js. Supports theme toggle and task management.",
        links:
          "https://github.com/Ragulprasanth-26/todolist-togcolor/tree/main/Todolist",
        techStack: ["React", "JavaScript", "CSS", "HTML"],
      },
      {
        image: X,
        title: "Java Booking Systems",
        description:
          "Train, flight, and taxi booking systems developed using Java. Handles real-time bookings, payments, and user management.",
        links: "https://github.com/Ragulprasanth-26/JAVA-PROGRAMS-java",
        techStack: ["Java", "OOP", "Swing"],
      },
      {
        image: Task,
        title: "Task Management App",
        description:
          "A full-stack task management app built with MERN stack. Helps users create, organize, and manage tasks with real-time updates.",
        links: "https://github.com/Ragulprasanth-26/Task-Management",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      },
      {
        image: qura,
        title: "Qura Properties - Smart House Broker App",
        description:
          "A full-stack property management app built with React and Bootstrap on the frontend, and PHP with MySQL on the backend. Allows users to browse, list, and manage properties efficiently with real-time updates.",
        links: "https://github.com/Ragulprasanth-26/Qura_properties",
        live: "https://quraproperties.in/",
        techStack: ["React.js", "Axios", "MySql", "Bootstrap CSS"],
      },
      {
        image: franchise,
        title: "Qads Franchise Website",
        description:
          "A franchise management and property listing website built with React and Bootstrap on the frontend, and PHP with MySQL on the backend. Enables users to explore and manage franchises efficiently.",
        links: "https://github.com/Ragulprasanth-26/qads_franchise_site",
        live: "https://admin.qadsfranchise.com/login",
        techStack: ["React.js", "Axios", "MySql", "Bootstrap CSS"],
      },
    ],
  };

  return (
    <section className="relative py-16 px-5" id="projects">
       <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5e6d3] to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#92400e] border-b-4 border-[#b45309] w-fit mx-auto text-center">
        Projects
      </h1>
       </div>
      {/* Title */}
      

      {/* Card Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center my-12">
        {config.projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg border border-[#92400e]/30 backdrop-blur-md bg-white/10 hover:scale-105 hover:shadow-xl transform transition duration-500 max-w-sm"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            {/* Card Content */}
            <div className="p-4 relative z-10">
              <h2 className="text-lg font-bold text-yellow-800 mb-2">{project.title}</h2>
              <p className="text-[#5c4033] text-sm leading-relaxed mb-3">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-2">
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-1 rounded-md font-semibold text-sm hover:bg-black transition"
                >
                  View on GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700  text-white px-4 py-1 rounded-md font-semibold text-sm hover:bg-blue-700 transition"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>

            {/* Glass Blur Hover Overlay */}
            <div className="absolute inset-0 bg-[#92400e]/10 opacity-0 group-hover:opacity-20 backdrop-blur-sm transition duration-500 z-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
