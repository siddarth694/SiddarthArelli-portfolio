import { useContext } from "react";
import { MyContext } from "../GlobalContext/Mycontext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, handleTheme } = useContext(MyContext);

  return (
    <nav
      className="sticky top-0 z-50 w-full h-[70px]"
      style={{
        backgroundColor: theme ? "#0D1116" : "#ffffff",
        color: theme ? "#ffffff" : "#000000",
      }}
    >
      <div className="h-full w-full flex items-center">
        
        {/* LEFT SVG (20px from left edge) */}
        <button
          onClick={handleTheme}
          style={{ marginLeft: "20px" }}
        >
          {theme ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* NAV LINKS (EXTREME RIGHT) */}
        <ul
          className="flex gap-8 text-sm font-medium"
          style={{ marginLeft: "auto", marginRight: "20px" }}
        >
          <li><a href="#home">HOME</a></li>
          <li><a href="#education">EDUCATION</a></li>
           <li><a href="#certifications">CERTIFICATIONS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
