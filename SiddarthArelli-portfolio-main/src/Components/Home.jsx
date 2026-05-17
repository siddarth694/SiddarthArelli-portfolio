import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";

// backgrounds
import darkBg from "../assets/dark.png";
import lightBg from "../assets/light.png";

// profile image
import dev from "../assets/dev.jpeg";

// icons
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const { theme } = useContext(MyContext);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "calc(100vh - 70px)",
        backgroundColor: theme ? "#0A0E12" : "#ffffff",
        backgroundImage: `url(${theme ? darkBg : lightBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* HERO CONTENT */}
      <div
        className="absolute flex items-center"
        style={{
          left: "245px",
          top: "45%",
          transform: "translate(-15px, calc(-50% + 40px))",
          gap: "36px",
        }}
      >
        {/* PROFILE IMAGE */}
        <div
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            padding: "4px",
            background: theme
              ? "linear-gradient(135deg, #38bdf8, #8b5cf6)"
              : "linear-gradient(135deg, #0ea5e9, #7c3aed)",
            boxShadow: theme
              ? "0 10px 40px rgba(56,189,248,0.25)"
              : "0 10px 35px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={dev}
            alt="profile"
            className="object-cover object-center"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "50% 20%",
              border: theme
                ? "3px solid #0A0E12"
                : "3px solid white",
            }}
          />
        </div>

        {/* TEXT CONTENT */}
        <div>
          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={`text-[31.68px] transition-all duration-300 hover:scale-110 ${
                theme
                  ? "text-white hover:text-sky-400"
                  : "text-black hover:text-sky-600"
              }`}
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={`text-[31.68px] transition-all duration-300 hover:scale-110 ${
                theme
                  ? "text-white hover:text-sky-400"
                  : "text-black hover:text-sky-600"
              }`}
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* NAME */}
          <h1
            className={`text-[88px] font-bold leading-none tracking-tight ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Siddarth Arelli
          </h1>

          {/* TITLE */}
          <p
            className={`mt-5 text-[26px] font-medium tracking-wide ${
              theme ? "text-white/70" : "text-black/70"
            }`}
          >
            Full Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;