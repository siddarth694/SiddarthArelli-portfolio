import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(MyContext);

  // 🔁 UPDATE THESE IF NEEDED
  const EMAIL = "siddudev19@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/siddartha-arelli-169a922b8?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const GITHUB = "https://github.com/siddarth694";

  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: theme ? "#0A0E12" : "#ffffff",
        borderColor: theme ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        color: theme ? "#ffffff" : "#0f172a",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-[18px] font-semibold">
            Siddarth Arelli
          </h3>
          <p className={`text-[14px] ${theme ? "text-white/60" : "text-slate-500"}`}>
            Full Stack Developer
          </p>
        </div>

        {/* CENTER — ICONS */}
        <div className="flex gap-6">
          <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
  target="_blank"
  rel="noopener noreferrer"
     className="text-[18px] hover:text-sky-400 transition"
>
  <FaEnvelope size={20} />
  
</a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="text-[18px] hover:text-sky-400 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-[18px] hover:text-sky-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* RIGHT */}
        <div className="text-[14px] text-center md:text-right opacity-70">
          © {new Date().getFullYear()} Siddarth Arelli. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
