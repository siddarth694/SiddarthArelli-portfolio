import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// demo videos
const EMS_DEMO_URL = "https://drive.google.com/file/d/1D4D43inIkl2tzCLqRYLW5xLTCAe0iuxy/view";
let MoonMart="https://drive.google.com/file/d/1bkvUz4m-gmY3UOoL1TaQUB_L3aaWUbpp/preview"





const Projects = () => {
  const { theme } = useContext(MyContext);

  const GITHUB_URL = "https://share.google/ZsjH6tzVR4xplPc6J";

  const projects = [
    {
      title: "Employee Management System",
      desc: "A full-stack web application to manage employees with authentication, CRUD operations, and role-based access.",
      tech: "Java, Servlets, JDBC, MySQL",
      liveDemo: EMS_DEMO_URL,
    },
    {
      title: "MoonMart E-Commerce",
      desc: "A modern e-commerce website built with React featuring product listing, cart, and responsive UI.",
      tech: "React.js, Tailwind CSS",
      liveDemo: MoonMart,
    },
    {
      title: "Hibernate Console Project",
      desc: "Console-based employee management system using Hibernate with all mappings and database operations.",
      tech: "Java, Hibernate, MySQL",
      liveDemo: null,
    },
    {
      title: "UI Replication Projects",
      desc: "Pixel-perfect UI replications of modern websites using HTML, CSS, Tailwind, and responsive design.",
      tech: "HTML, CSS, Tailwind",
      liveDemo: null,
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const openVideo = (video) => {
    window.open(video, "_blank");
  };

  const openGithub = () => {
    window.open(GITHUB_URL, "_blank");
  };

  return (
    <section
      id="projects"
      className="relative w-full flex items-center overflow-hidden"
      style={{
        height: "760px",
        backgroundColor: theme ? "#0A0E12" : "#f8fafc",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-[64px] font-extrabold">Projects</h2>
          <p
            className={`mt-4 text-[18px] max-w-xl ${
              theme ? "text-white/70" : "text-slate-600"
            }`}
          >
            A selection of projects showcasing my development skills and experience.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-6 transition-all ${
                theme
                  ? "bg-white/5 border border-white/10 backdrop-blur-md"
                  : "bg-white border border-slate-200 shadow-lg"
              }`}
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm opacity-80 leading-relaxed">
                {project.desc}
              </p>

              <p className="mt-3 text-sm font-medium text-sky-400">
                {project.tech}
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-4">
                {project.liveDemo && (
                  <button
                    onClick={() => openVideo(project.liveDemo)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition  cursor-pointer ${
                      theme
                        ? "bg-sky-500 hover:bg-sky-400 text-black"
                        : "bg-sky-600 hover:bg-sky-500 text-white"
                    }`}
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </button>
                )}

                <button
                  onClick={openGithub}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition  cursor-pointer ${
                    theme
                      ? "border border-white/20 hover:bg-white/10"
                      : "border border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <FaGithub size={16} />
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
