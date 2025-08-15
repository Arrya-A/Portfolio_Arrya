import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentTab = location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-stone-200 px-6">
      <div className="flex justify-between py-4">
        <div id="brand" className="text-2xl font-bold">
          Portfolio
        </div>

        <ul className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
          <li>
            <Link
              to="/home"
              className={`relative ${
                currentTab === "/home" ? "text-emerald-500" : ""
              }`}
            >
              Home
              {currentTab === "/home" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`relative ${
                currentTab === "/about" ? "text-emerald-500" : ""
              }`}
            >
              About Me
              {currentTab === "/about" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`relative ${
                currentTab === "/skills" ? "text-emerald-500" : ""
              }`}
            >
              Skills
              {currentTab === "/skills" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`relative ${
                currentTab === "/projects" ? "text-emerald-500" : ""
              }`}
            >
              Projects
              {currentTab === "/projects" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`relative ${
                currentTab === "/contact" ? "text-emerald-500" : ""
              }`}
            >
              Contact Me
              {currentTab === "/contact" && (
                <span className="absolute left-0 bottom-0 w-6 border-b-2 border-emerald-500"></span>
              )}
            </Link>
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
                <Link
                  to="/home"
                  className={`relative ${
                    currentTab === "/home" ? "text-emerald-500" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`relative ${
                    currentTab === "/about" ? "text-emerald-500" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  About Me
                </Link>
                <Link
                  to="/skills"
                  className={`relative ${
                    currentTab === "/skills" ? "text-emerald-500" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Skills
                </Link>
                <Link
                  to="/projects"
                  className={`relative ${
                    currentTab === "/projects" ? "text-emerald-500" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className={`relative ${
                    currentTab === "/contact" ? "text-emerald-500" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Header;
