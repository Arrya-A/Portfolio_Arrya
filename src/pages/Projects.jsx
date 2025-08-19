import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from "../assets/images/moviesearch.png";
import Img2 from "../assets/images/clone.png";

const Projects = () => {
  const projects = [
    {
      name: "sample 1",
      description:
        "Lorem ipsum dolor sit amet ffsd consectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
      image: Img1,
      tech_stack: ["React", "Redux"],
    },
    {
      name: "sample 2",
      description:
        "Lorem ipsum dolor sit ametdsf consectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
      image: Img2,
      tech_stack: ["React"],
    },
    {
      name: "sample 3",
      description:
        "Lorem ipsum dolor sit ametsf dfsd csdfonsectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
      image: Img2,
      tech_stack: ["React", "Tailwind"],
    },
    {
      name: "sample 4",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
      image: Img2,
      tech_stack: ["React"],
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
