import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-stone-200/90 backdrop-blur-md px-6">
      <div className="flex justify-between py-4">
        <div id="brand" className="text-2xl font-bold">
          Portfolio
        </div>

        <ul className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
          <li>
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className={`relative ${
                activeSection === "home" ? "text-emerald-500" : ""
              }`}
            >
              Home
              {activeSection === "home" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className={`relative ${
                activeSection === "about" ? "text-emerald-500" : ""
              }`}
            >
              About Me
              {activeSection === "about" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className={`relative ${
                activeSection === "skills" ? "text-emerald-500" : ""
              }`}
            >
              Skills
              {activeSection === "skills" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className={`relative ${
                activeSection === "projects" ? "text-emerald-500" : ""
              }`}
            >
              Projects
              {activeSection === "projects" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`relative ${
                activeSection === "contact" ? "text-emerald-500" : ""
              }`}
            >
              Contact Me
              {activeSection === "contact" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </a>
          </li>
        </ul>

        {/* Mobile  */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faX : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="md:hidden flex flex-col items-center bg-stone-200 py-4 space-y-4 text-sm font-medium">
              <>
                <a
                  href="#home"
                  className={`relative ${
                    activeSection === "home" ? "text-emerald-500" : ""
                  }`}
                  onClick={(e) => {
                    scrollToSection(e, "home");
                    toggleMenu();
                  }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className={`relative ${
                    activeSection === "about" ? "text-emerald-500" : ""
                  }`}
                  onClick={(e) => {
                    scrollToSection(e, "about");
                    toggleMenu();
                  }}
                >
                  About Me
                </a>
                <a
                  href="#skills"
                  className={`relative ${
                    activeSection === "skills" ? "text-emerald-500" : ""
                  }`}
                  onClick={(e) => {
                    scrollToSection(e, "skills");
                    toggleMenu();
                  }}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className={`relative ${
                    activeSection === "projects" ? "text-emerald-500" : ""
                  }`}
                  onClick={(e) => {
                    scrollToSection(e, "projects");
                    toggleMenu();
                  }}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`relative ${
                    activeSection === "contact" ? "text-emerald-500" : ""
                  }`}
                  onClick={(e) => {
                    scrollToSection(e, "contact");
                    toggleMenu();
                  }}
                >
                  Contact
                </a>
              </>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Header;
