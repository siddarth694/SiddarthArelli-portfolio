import { useContext, useRef, useState } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { theme } = useContext(MyContext);
  const formRef = useRef();
  const [status, setStatus] = useState("");

  // 🔁 UPDATE THESE
  const EMAIL = "siddudev19@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/siddarthagoud-arelli-169a922b8";
  const GITHUB = "https://share.google/ZsjH6tzVR4xplPc6J";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x78m85j",
        "template_3wp6arm",
        formRef.current,
        "s7ahZz87PpkSpW2Ab"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full flex items-center overflow-hidden"
      style={{
        height: "700px",
        backgroundColor: theme ? "#0A0E12" : "#f8fafc",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* LEFT — INFO */}
        <div>
          <h2 className="text-[64px] font-extrabold leading-tight">
            Contact
          </h2>

          <p
            className={`mt-4 text-[18px] max-w-md ${
              theme ? "text-white/70" : "text-slate-600"
            }`}
          >
            Let’s connect. You can reach me directly or send a message using the form.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-8 flex flex-col gap-5">

            {/* EMAIL */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 text-[16px] hover:text-sky-400 transition"
            >
              <FaEnvelope size={20} />
              {EMAIL}
            </a>

            {/* LINKEDIN */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-[16px] hover:text-sky-400 transition"
            >
              <FaLinkedin size={20} />
              LinkedIn Profile
            </a>

            {/* GITHUB */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-[16px] hover:text-sky-400 transition"
            >
              <FaGithub size={20} />
              GitHub Profile
            </a>

          </div>
        </div>

        {/* RIGHT — FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className={`rounded-2xl p-8 transition-all ${
            theme
              ? "bg-white/5 border border-white/10 backdrop-blur-md"
              : "bg-white border border-slate-200 shadow-lg"
          }`}
        >
          {/* NAME */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              className={`w-full px-4 py-3 rounded-lg outline-none ${
                theme
                  ? "bg-black/40 text-white border border-white/10"
                  : "bg-slate-50 border border-slate-300"
              }`}
            />
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              className={`w-full px-4 py-3 rounded-lg outline-none ${
                theme
                  ? "bg-black/40 text-white border border-white/10"
                  : "bg-slate-50 border border-slate-300"
              }`}
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className={`w-full px-4 py-3 rounded-lg outline-none resize-none ${
                theme
                  ? "bg-black/40 text-white border border-white/10"
                  : "bg-slate-50 border border-slate-300"
              }`}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold transition ${
              theme
                ? "bg-sky-500 hover:bg-sky-400 text-black"
                : "bg-sky-600 hover:bg-sky-500 text-white"
            }`}
          >
            Send Message
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="mt-4 text-green-500 text-sm">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-red-500 text-sm">
              Failed to send message. Try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
