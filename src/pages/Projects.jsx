import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import portfolio from "../assets/images/Portfolio.png";
import Img2 from "../assets/images/clone.png";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      description:
        "Lorem ipsum dolor sit amet ffsd consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/portfolio/",
      github_link: "https://github.com/Arrya-A/portfolio",
      image: portfolio,
      tech_stack: ["HTML", "CSS"],
    },
    {
      name: "Restaurant App",
      description:
        "Lorem ipsum dolor sit amet ffsd consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/portfolio/",
      github_link: "https://github.com/Arrya-A/portfolio",
      image: portfolio,
      tech_stack: ["HTML", "CSS"],
    },
    {
      name: "Adventour",
      description:
        "Lorem ipsum dolor sit ametdsf consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Travel_Website/",
      github_link: "https://github.com/Arrya-A/Travel_Website",
      image: Img2,
      tech_stack: ["HTML", "CSS"],
    },
    {
      name: "Clock",
      description:
        "Lorem ipsum dolor sit ametsf dfsd csdfonsectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Clock/",
      github_link: "https://github.com/Arrya-A/Clock",
      image: Img2,
      tech_stack: ["HTML", "CSS"],
    },
    {
      name: "Calculator",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/Calculator",
      image: Img2,
      tech_stack: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Simple Interest Calculator",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://simple-interest-calculator-six-alpha.vercel.app/",
      github_link: "https://github.com/Arrya-A/Simple-_Interest_Calculator",
      image: Img2,
      tech_stack: ["HTML", "CSS", "Javascript"],
    },

    {
      name: "BMI Calculator",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Google Meet Clone",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://react-google-meet-clone.vercel.app/",
      github_link: "https://github.com/Arrya-A/React_Google_Meet_Clone",
      image: Img2,
      tech_stack: ["React"],
    },
    {
      name: "Calculator - React",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://calculator-react-eta-seven.vercel.app/",
      github_link: "https://github.com/Arrya-A/Calculator-React",
      image: Img2,
      tech_stack: ["React"],
    },

    //////////////////////////////////////////////////////////////////////////////////
    {
      name: "Media Player",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["React"],
    },
    {
      name: "Counter Application",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "E-Cart",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["Redux"],
    },
    {
      name: "Project Fair",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["MERN"],
    },
    {
      name: "Country Search",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["HTML", "CSS", "Javascript", "API"],
    },
    {
      name: "Weather Application",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["HTML", "CSS", "Javascript", "API"],
    },
    {
      name: "Movie Search Application",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["HTML", "CSS", "Javascript", "API"],
    },
    {
      name: "Employee Management System",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: [""],
    },
    {
      name: "To-Do",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["Redux"],
    },
    {
      name: "Plant Sphere",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: [" "],
    },
    {
      name: "Quiz App",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["React"],
    },
    {
      name: "GadgetHub",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["React"],
    },
    {
      name: "Recipe Book",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["Redux"],
    },
    {
      name: "User Management App",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: [" "],
    },
    {
      name: "Student Management App",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: [" "],
    },
    {
      name: "Webpage",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://arrya-a.github.io/Calculator/",
      github_link: "https://github.com/Arrya-A/bmi_calculator",
      image: Img2,
      tech_stack: ["Tailwind"],
    },
  ];
  return (
    <>
      <h3 className="text-center text-xl text-emerald-500 pt-4">Projects</h3>
      <div className="md:mx-36">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project) => (
            <div className="bg-stone-200 p-4 rounded shadow m-4 hover:scale-105 transition ">
              <div className="pb-2">
                <img className="rounded" src={project?.image} alt="" />
              </div>
              <div>
                <h5 className="text-sm mb-1">{project?.name}</h5>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h5 className="text-sm mb-2">{project?.description}</h5>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 shadow-xl p-1 rounded bg-stone-100 inline-block"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2 px-2 shadow-xl p-1 rounded bg-stone-100 "
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
