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
import tailwindb from "../../src/assets/images/tailwind-b.png";
import express from "../../src/assets/images/expressjs.png";
import mongodb from "../../src/assets/images/mongodb.png";
import mySql from "../../src/assets/images/mysql.png";
import mui from "../../src/assets/images/mui.png";
import vscode from "../../src/assets/images/vscode.png";

const Skills = () => {
  return (
    <>
      <div className="min-h-[89vh] w-[100vw] bg-white">
        <div className="p-4 m-8 md:p-20 md:m-20 rounded bg-stone-200">
          <div className="flex flex-wrap justify-center">
            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faHtml5}
                className="text-black group-hover:scale-125 group-hover:text-[#E54C21] transition-colors duration-300"
              />
              <p className="transition-transform duration-100 group-hover:translate-y-1">
                HTML
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faCss}
                className="text-black group-hover:scale-125 group-hover:text-[#254BDD] transition-colors duration-300"
              />
              <p className="transition-transform duration-100 group-hover:translate-y-1 text-sm">
                CSS
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faSquareJs}
                className="text-black group-hover:scale-125 group-hover:text-[#ECD320] transition-colors duration-300"
              />
              <p className="transition-transform duration-100 group-hover:translate-y-1 text-sm">
                JavaScript
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faBootstrap}
                className="text-black group-hover:scale-125 group-hover:text-[#7910F2] transition-colors duration-300"
              />
              <p className="transition-transform duration-100 group-hover:translate-y-1 text-sm">
                Bootstrap
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <img
                src={tailwindb}
                alt=""
                className="translate-x-7 translate-y-1 group-hover:scale-125"
                height={"40px"}
                width={"40px"}
              />
              <p className="transition-transform duration-100 translate-y-2 group-hover:translate-y-3 text-sm">
                Tailwind
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faReact}
                className="text-black group-hover:scale-125 group-hover:text-[#00D1F7] transition-colors duration-300"
              />
              <p className="transition-transform duration-100 group-hover:translate-y-1 text-sm">
                ReactJS
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faNodeJs}
                className="text-black group-hover:scale-125 group-hover:text-[#7CB700] transition-colors duration-300"
              />
              <p className="transition-transform duration-100 group-hover:translate-y-1 text-sm">
                NodeJS
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <img
                src={express}
                alt=""
                className="translate-x-7 translate-y-1 group-hover:scale-125"
                height={"35px"}
                width={"35px"}
              />
              <p className="transition-transform duration-100 translate-y-2 group-hover:translate-y-3 text-sm">
                ExpressJS
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <img
                src={mongodb}
                alt=""
                className="translate-x-10 group-hover:scale-125"
                height={"15px"}
                width={"15px"}
              />
              <p className="transition-transform duration-100 translate-y-1 group-hover:translate-y-3 text-sm">
                MongoDB
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <img
                src={mySql}
                alt=""
                className="translate-x-8 group-hover:scale-125"
                height={"30px"}
                width={"30px"}
              />
              <p className="transition-transform duration-100 translate-y-1 group-hover:translate-y-3 text-sm">
                MySQL
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <img
                src={mui}
                alt=""
                className="translate-x-8 translate-y-1 group-hover:scale-125"
                height={"30px"}
                width={"30px"}
              />
              <p className="transition-transform duration-100 translate-y-2 group-hover:translate-y-3 text-sm">
                MUI
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <img
                src={vscode}
                alt=""
                className="translate-x-8 translate-y-1 group-hover:scale-125"
                height={"30px"}
                width={"30px"}
              />
              <p className="transition-transform duration-100 translate-y-2 group-hover:translate-y-3 text-sm">
                VS Code
              </p>
            </div>

            <div className="group bg-stone-100 rounded-2xl p-4 m-4 text-center w-32 h-24">
              <FontAwesomeIcon
                fontSize={"30px"}
                icon={faGithub}
                className="text-black group-hover:scale-125 group-hover:text-black transition-colors duration-300"
              />
              <p className="transition-transform duration-100 group-hover:translate-y-1 text-sm">
                Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
