import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss,
  faGithub,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <div className="min-h-[89vh] w-[100vw] bg-white">
        <div className="p-4 m-8 md:p-20 md:m-20 rounded bg-stone-200">
          <div className="flex flex-wrap justify-center">
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faHtml5}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faCss}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faSquareJs}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            {/* tailwind */}
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>

            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faReact}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faNodeJs}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>

            {/* express */}

            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            {/* mongodb */}
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            {/* mysql */}
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            {/* mui */}
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
            {/* vscode */}
            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>

            <div className="bg-stone-100 rounded-2xl p-4 m-4">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faGithub}
                className="text-black hover:text-[#7A52B3] transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
