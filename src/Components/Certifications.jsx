import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { motion } from "framer-motion";

const Certifications = () => {
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

  const cardHover = {
    whileHover: {
      y: -6,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section
      id="certifications"
      className="relative w-full overflow-hidden py-20"
      style={{
        backgroundColor: theme ? "#0A0E12" : "#f8fafc",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-14 text-center">
          <h2 className="text-[64px] font-extrabold leading-tight">
            Certifications
          </h2>

          <p
            className={`mt-4 text-[18px] max-w-2xl mx-auto ${
              theme ? "text-white/70" : "text-slate-600"
            }`}
          >
            Certifications and internship experiences that strengthened my
            full-stack development skills and practical knowledge.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
        >
          {/* Certification Card */}
          <motion.div
            variants={fadeUp}
            {...cardHover}
            className={`rounded-2xl p-8 ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
          >
            <span className="text-sm opacity-60">Certification</span>

            <h3 className="mt-3 text-2xl font-semibold">
              Java Full Stack Development
            </h3>

            <p className="mt-2 text-sm opacity-80">
              JSpiders, Punjagutta
            </p>

            <div className="mt-5 inline-block px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium">
              Completed Successfully
            </div>
          </motion.div>

          {/* Internship Card */}
          <motion.div
            variants={fadeUp}
            {...cardHover}
            className={`rounded-2xl p-8 ${
              theme
                ? "bg-white/5 border border-white/10 backdrop-blur-md"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
          >
            <span className="text-sm opacity-60">Internship</span>

            <h3 className="mt-3 text-2xl font-semibold">
              Full Stack Development Internship
            </h3>

            <p className="mt-2 text-sm opacity-80">
              Neurogaint Systems Hyderabad
            </p>

            <div className="mt-5 inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium">
              Internship Certified
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;