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
      className="relative w-full overflow-hidden"   // ✅ overflow hidden
      style={{
        minHeight: "calc(100vh - 70px)",
        backgroundColor: theme ? "#0A0E12" : "#ffffff",
        backgroundImage: `url(${theme ? darkBg : lightBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",              // ✅ bg fixed
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
        {/* IMAGE */}
        <img
          src={dev}
          alt="profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          }}
        />

        {/* TEXT */}
        <div>
          {/* ICON LINKS */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={`text-[31.68px] transition-colors duration-200 ${
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
              className={`text-[31.68px] transition-colors duration-200 ${
                theme
                  ? "text-white hover:text-sky-400"
                  : "text-black hover:text-sky-600"
              }`}
            >
              <FaLinkedinIn />
            </a>
          </div>

          <br />

          {/* NAME */}
          <h1
            className={`text-[88px] font-bold leading-none ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Siddarth Arelli
          </h1>

          <br />

          {/* TITLE */}
          <p
            className={`mt-3 text-[26.4px] ${
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
