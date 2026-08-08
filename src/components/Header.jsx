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
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 w-full flex justify-center">
      <nav className="bg-white/85 backdrop-blur-xl border border-stone-200/80 shadow-lg shadow-stone-900/5 rounded-full px-4 sm:px-6 py-2 flex items-center justify-between gap-4 md:gap-8 transition-all">
        <div
          id="brand"
          className="text-lg font-bold text-stone-900 px-2 cursor-pointer"
          onClick={(e) => scrollToSection(e, "home")}
        >
          Portfolio
        </div>

        <ul className="hidden md:flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`inline-block px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-stone-200/90 font-semibold text-stone-900 shadow-sm"
                    : "text-stone-600 font-medium hover:text-stone-900 hover:bg-stone-100/60"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition"
          >
            <FontAwesomeIcon icon={isOpen ? faX : faBars} className="text-sm" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-14 left-4 right-4 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl border border-stone-200/80 p-4 shadow-xl flex flex-col space-y-2 text-center"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-2 px-4 rounded-full text-sm font-medium transition ${
                  activeSection === item.id
                    ? "bg-stone-200/90 text-stone-900 font-semibold"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
                onClick={(e) => {
                  scrollToSection(e, item.id);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
