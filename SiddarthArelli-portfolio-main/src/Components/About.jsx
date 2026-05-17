import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { motion } from "framer-motion";

const About = () => {
  const { theme } = useContext(MyContext);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full flex items-center overflow-hidden"
      style={{
        height: "700px",
        backgroundColor: theme ? "#0A0E12" : "#ffffff",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      {/* SOFT ACCENT */}
      <div className="absolute -top-32 -right-32 w-[300px] h-[300px] rounded-full bg-sky-400/10 blur-3xl" />

      <motion.div
        className="relative w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* LEFT — IDENTITY */}
        <motion.div variants={fadeUp}>
          <h2 className="text-[64px] font-extrabold leading-tight">
            About Me
          </h2>

          <p
            className={`mt-6 text-[20px] leading-relaxed max-w-xl ${
              theme ? "text-white/80" : "text-slate-600"
            }`}
          >
            I am a passionate <span className="text-sky-400 font-medium">
            Full Stack Developer
            </span> who enjoys building modern, scalable web applications.
            I focus on writing clean code, creating intuitive user experiences,
            and continuously improving my technical skills.
          </p>

          <p
            className={`mt-4 text-[18px] leading-relaxed max-w-xl ${
              theme ? "text-white/60" : "text-slate-500"
            }`}
          >
            I enjoy working across both frontend and backend, turning ideas
            into real-world applications that are fast, secure, and reliable.
          </p>
        </motion.div>

        {/* RIGHT — INFO CARDS */}
        <motion.div
          className="flex flex-col gap-6"
          variants={container}
        >
          {/* CARD 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-6 transition-all ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-slate-50 border border-slate-200 shadow-lg"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">
              What I Do
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Develop responsive frontend interfaces and robust backend
              systems using modern JavaScript frameworks and databases.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-6 transition-all ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-slate-50 border border-slate-200 shadow-lg"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">
              My Strengths
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Problem solving, attention to detail, clean architecture,
              and continuous learning mindset.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-6 transition-all ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-slate-50 border border-slate-200 shadow-lg"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">
              Career Goal
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              To grow as a full-stack engineer and contribute to impactful
              products that solve real-world problems.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
