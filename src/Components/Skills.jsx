import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { motion } from "framer-motion";

const Skills = () => {
  const { theme } = useContext(MyContext);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleViewResume = () => {
    window.open(`${import.meta.env.BASE_URL}SiddarthArelliResume.pdf`, "_blank");
  };

  return (
    <section
      id="skills"
      className="relative w-full flex items-center overflow-hidden"
      style={{
        height: "700px",
        backgroundColor: theme ? "#0A0E12" : "#f8fafc",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* LEFT — TEXT + BUTTON */}
        <motion.div variants={fadeUp}>
          <h2 className="text-[64px] font-extrabold leading-tight">
            Skills
          </h2>

          <p
            className={`mt-5 text-[18px] max-w-xl ${
              theme ? "text-white/70" : "text-slate-600"
            }`}
          >
            A blend of frontend, backend, and database technologies
            used to build scalable and modern web applications.
          </p>

          {/* VIEW RESUME BUTTON */}
          <button
            onClick={handleViewResume}
            className={`mt-8 px-7 py-3 rounded-xl font-semibold transition-all duration-300  cursor-pointer ${
              theme
                ? "bg-sky-500 hover:bg-sky-400 text-black"
                : "bg-sky-600 hover:bg-sky-500 text-white"
            }`}
          >
            View Resume
          </button>
        </motion.div>

        {/* RIGHT — SKILLS GRID */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          variants={container}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "BootStrap",
            "React",
            "Tailwind CSS",
            "Java",
            "JDBC",
            "Servlets",
            "Hibernate",
            "Spring-Core",
            "Spring-Boot",
            "REST APIs",

          ].map((skill) => (
            <motion.div
              key={skill}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className={`rounded-2xl px-5 py-4 text-center font-medium transition-all ${
                theme
                  ? "bg-white/5 border border-white/10 backdrop-blur-md"
                  : "bg-white border border-slate-200 shadow-md"
              }`}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
