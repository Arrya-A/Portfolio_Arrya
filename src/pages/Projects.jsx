import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import portfolio from "../assets/images/Portfolio.png";
import clone from "../assets/images/clone.png";
import adventour from "../assets/images/Adventour.png";
import ekart from "../assets/images/e-kart.png";
import mp from "../assets/images/Media_Player.png";
import pf from "../assets/images/project_fair.png";
import recipebook from "../assets/images/recipebook.png";
import weather from "../assets/images/weather_app.png";
import gadgethub from "../assets/images/gadgethub.png";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      description:
        "Personal developer portfolio website showcasing projects, skills, and experience.",
      live_link: "https://arrya-a.github.io/portfolio/",
      github_link: "https://github.com/Arrya-A/portfolio",
      image: portfolio,
      tech_stack: ["HTML", "CSS"],
    },
    // {
    //   name: "Restaurant App",
    //   description:
    //     "Lorem ipsum dolor sit amet ffsd consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/portfolio/",
    //   github_link: "https://github.com/Arrya-A/portfolio",
    //   image: portfolio,
    //   tech_stack: ["HTML", "CSS"],
    // },
    {
      name: "Adventour",
      description:
        "A modern travel and adventure tour website.",
      live_link: "https://arrya-a.github.io/Travel_Website/",
      github_link: "https://github.com/Arrya-A/Travel_Website",
      image: adventour,
      tech_stack: ["HTML", "CSS"],
    },
    // {
    //   name: "Clock",
    //   description:
    //     "Lorem ipsum dolor sit ametsf dfsd csdfonsectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Clock/",
    //   github_link: "https://github.com/Arrya-A/Clock",
    //   image: clone,
    //   tech_stack: ["HTML", "CSS"],
    // },
    // {
    //   name: "Calculator",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/Calculator",
    //   image: clone,
    //   tech_stack: ["HTML", "CSS", "Javascript"],
    // },
    // {
    //   name: "Simple Interest Calculator",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://simple-interest-calculator-six-alpha.vercel.app/",
    //   github_link: "https://github.com/Arrya-A/Simple-_Interest_Calculator",
    //   image: clone,
    //   tech_stack: ["HTML", "CSS", "Javascript"],
    // },

    // {
    //   name: "BMI Calculator",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: clone,
    //   tech_stack: ["HTML", "CSS", "Javascript"],
    // },
    {
      name: "Google Meet Clone",
      description: "A responsive UI clone of Google Meet built with React and Bootstrap.",
      live_link: "https://react-google-meet-clone.vercel.app/",
      github_link: "https://github.com/Arrya-A/React_Google_Meet_Clone",
      image: clone,
      tech_stack: ["React"],
    },
    // {
    //   name: "Calculator - React",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://calculator-react-eta-seven.vercel.app/",
    //   github_link: "https://github.com/Arrya-A/Calculator-React",
    //   image: clone,
    //   tech_stack: ["React"],
    // },

    //////////////////////////////////////////////////////////////////////////////////
    {
      name: "Media Player",
      description: "A web application for uploading, managing, and playing video media content.",
      live_link: "https://media-player-frontend-pink-five.vercel.app/",
      github_link: "https://github.com/Arrya-A/MediaPlayer_Frontend",
      image: mp,
      tech_stack: ["React"],
    },
    // {
    //   name: "Counter Application",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: ["HTML", "CSS", "Javascript"],
    // },
    {
      name: "E-Cart",
      description: "An e-commerce shopping cart web application built with React and Redux Toolkit.",
      live_link: "https://e-cart-redux-six-lime.vercel.app/",
      github_link: "https://github.com/Arrya-A/e-cart_Redux",
      image: ekart,
      tech_stack: ["Redux"],
    },
    {
      name: "Project Fair",
      description: "A full-stack MERN platform to showcase, upload, and discover web projects.",
      live_link: "https://project-fair-frontend-two-alpha.vercel.app/",
      github_link: "https://github.com/Arrya-A/Project_Fair_Frontend",
      image: pf,
      tech_stack: ["MERN"],
    },
    // {
    //   name: "Country Search",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: ["HTML", "CSS", "Javascript", "API"],
    // },
    {
      name: "Weather Application",
      description: "Real-time weather forecast application retrieving dynamic weather data via APIs.",
      live_link: "https://arrya-a.github.io/Weather_App/",
      github_link: "https://github.com/Arrya-A/Weather_App",
      image: weather,
      tech_stack: ["HTML", "CSS", "Javascript", "API"],
    },
    // {
    //   name: "Movie Search Application",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: ["HTML", "CSS", "Javascript", "API"],
    // },
    // {
    //   name: "Employee Management System",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: [""],
    // },
    // {
    //   name: "To-Do",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: ["Redux"],
    // },
    // {
    //   name: "Plant Sphere",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: [" "],
    // },
    // {
    //   name: "Quiz App",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: ["React"],
    // },
    {
      name: "GadgetHub",
      description: "An online gadget store web app built with React and external product APIs demostrating CRUD.",
      live_link: "https://gadget-hub-frontend-react-api.vercel.app/",
      github_link: "https://github.com/Arrya-A/GadgetHub_Frontend-ReactAPI",
      image: gadgethub,
      tech_stack: ["React"],
    },
    {
      name: "Recipe Book",
      description: "Interactive recipe search and bookmarking application.",
      live_link: "https://recipe-search-redux.vercel.app/",
      github_link: "https://github.com/Arrya-A/RecipeSearch-Redux",
      image: recipebook,
      tech_stack: ["Redux"],
    },
    // {
    //   name: "User Management App",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: [" "],
    // },
    // {
    //   name: "Student Management App",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: [" "],
    // },
    // {
    //   name: "Webpage",
    //   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    //   live_link: "https://arrya-a.github.io/Calculator/",
    //   github_link: "https://github.com/Arrya-A/bmi_calculator",
    //   image: Img2,
    //   tech_stack: ["Tailwind"],
    // },
  ];
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 max-w-7xl mx-auto bg-transparent">
      <h2 className="text-4xl sm:text-5xl font-bold text-center tracking-tight text-stone-900 dark:text-stone-100 mb-8">
        Projects
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white/95 via-white/85 to-stone-50/90 dark:from-stone-900/95 dark:via-stone-900/85 dark:to-stone-950/90 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 p-5 rounded-[1rem] shadow-sm hover:shadow-xl dark:hover:shadow-stone-950/50 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="pb-2">
                <img className="rounded" src={project?.image} alt="" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">
                  {project?.name}
                </h5>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech_stack.map(
                    (tech, tIdx) =>
                      tech.trim() !== "" && (
                        <span
                          key={tIdx}
                          className="inline-flex items-center rounded-md bg-green-50 dark:bg-emerald-950/60 px-2 py-1 text-xs font-medium text-green-700 dark:text-emerald-300 border border-green-200/50 dark:border-emerald-800/60"
                        >
                          {tech}
                        </span>
                      ),
                  )}
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
                  {project?.description}
                </p>
                <div className="flex items-center">
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 shadow-md p-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-emerald-600 dark:hover:text-emerald-400 inline-block transition"
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-2 px-2 shadow-md p-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-emerald-600 dark:hover:text-emerald-400 inline-block transition"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
