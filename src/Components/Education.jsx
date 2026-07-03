import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { motion } from "framer-motion";

const Education = () => {
  const { theme } = useContext(MyContext);

  // Animation Variants
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
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    whileHover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const educationData = [
    {
      year: "2024 – 2026",
      title: "Master Of Computer Applications (MCA)",
      college: "Sri Chaitanya Technical Campus",
      score: "72.8%",
      color: "text-sky-400",
    },
    {
      year: "2021 – 2024",
      title: "B.Sc Computer Science",
      college: "University Post-Graduate College",
      score: "69.45%",
      color: "text-violet-400",
    },
    {
      year: "2019 – 2021",
      title: "MPC (Intermediate)",
      college: "Trinity Junior College",
      score: "95%",
      color: "text-pink-400",
    },
    {
      year: "2019",
      title: "SSC",
      college: "Mary Mediatrix High School",
      score: "95%",
      color: "text-emerald-400",
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full overflow-hidden py-24"
      style={{
        backgroundColor: theme ? "#0A0E12" : "#f8fafc",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Education
          </h2>

          <p
            className={`mt-5 text-lg max-w-2xl mx-auto leading-relaxed ${
              theme ? "text-white/70" : "text-slate-600"
            }`}
          >
            My academic background and achievements that shaped my technical
            knowledge and development journey.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              {...cardHover}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${
                theme
                  ? "bg-white/5 border border-white/10 backdrop-blur-xl"
                  : "bg-white border border-slate-200 shadow-xl"
              }`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-3xl ${
                  index === 0
                    ? "bg-sky-500/10"
                    : index === 1
                    ? "bg-violet-500/10"
                    : index === 2
                    ? "bg-pink-500/10"
                    : "bg-emerald-500/10"
                }`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-60 tracking-wide">
                    {item.year}
                  </span>

                  <div
                    className={`w-3 h-3 rounded-full ${
                      index === 0
                        ? "bg-sky-400"
                        : index === 1
                        ? "bg-violet-400"
                        : index === 2
                        ? "bg-pink-400"
                        : "bg-emerald-400"
                    }`}
                  ></div>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold leading-snug">
                  {item.title}
                </h3>

                {/* College */}
                <p className="mt-3 text-sm opacity-75">
                  {item.college}
                </p>

                {/* Score */}
                <div
                  className={`mt-6 inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    theme
                      ? "bg-white/10"
                      : "bg-slate-100"
                  } ${item.color}`}
                >
                  {item.score}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;