import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { motion } from "framer-motion";

const Education = () => {
  const { theme } = useContext(MyContext);

  // Animation variants
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

  const cardHover = {
    whileHover: {
      y: -6,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="relative w-full overflow-hidden flex items-center"
      style={{
        height: "700px",
        backgroundColor: theme ? "#0A0E12" : "#f8fafc",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* LEFT SIDE */}
        <motion.div variants={fadeUp}>
          <h2 className="text-[64px] font-extrabold leading-tight">
            Education
          </h2>
          <p
            className={`mt-4 text-[18px] max-w-md ${
              theme ? "text-white/70" : "text-slate-600"
            }`}
          >
            Academic foundation that shaped my technical journey and
            problem-solving mindset.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative flex flex-col gap-6"
          variants={container}
        >
          {/* CARD 1 */}
          <motion.div
            variants={fadeUp}
            {...cardHover}
            className={`rounded-2xl p-6 ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
          >
            <span className="text-sm opacity-60">2021 – 2024</span>
            <h3 className="mt-2 text-xl font-semibold">
              B.Sc Computer Science
            </h3>
            <p className="mt-1 text-sm opacity-80">
              University Post-Graduate College
            </p>
            <div className="mt-4 text-sm font-medium text-sky-400">
              69.45%
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeUp}
            {...cardHover}
            className={`rounded-2xl p-6 ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
          >
            <span className="text-sm opacity-60">2019 – 2021</span>
            <h3 className="mt-2 text-xl font-semibold">
              MPC (Intermediate)
            </h3>
            <p className="mt-1 text-sm opacity-80">
              Trinity Junior College
            </p>
            <div className="mt-4 text-sm font-medium text-violet-400">
              95%
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeUp}
            {...cardHover}
            className={`rounded-2xl p-6 ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
          >
            <span className="text-sm opacity-60">2019</span>
            <h3 className="mt-2 text-xl font-semibold">
              SSC
            </h3>
            <p className="mt-1 text-sm opacity-80">
              Mary Mediatrix High School
            </p>
            <div className="mt-4 text-sm font-medium text-emerald-400">
              95%
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
