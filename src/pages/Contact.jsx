import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from "../assets/images/moviesearch.png";

const Contact = () => {
  const projects = [
    {
      name: "sample 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
    },
    {
      name: "sample 2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
    },
    {
      name: "sample 3",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
    },
    {
      name: "sample 4",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      live_link: "https://www.google.com/",
      github_link: "https://github.com/",
    },
  ];

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 max-w-7xl mx-auto bg-transparent">
      <h2 className="text-4xl sm:text-5xl font-bold text-center tracking-tight text-stone-900 mb-8">
        Contact Me
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-xl border border-stone-200/80 p-5 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="pb-2">
                  <img
                    className="rounded-xl w-full h-36 object-cover"
                    src={Img1}
                    alt=""
                  />
                </div>
                <h5 className="font-semibold text-stone-900 text-base mb-1">
                  {item.name}
                </h5>
                <p className="text-sm text-stone-600 mb-3">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <a
                  href={item.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 shadow-sm rounded-lg bg-stone-100 hover:bg-white text-stone-700 inline-block text-xs"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
                <a
                  href={item.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 shadow-sm rounded-lg bg-stone-100 hover:bg-white text-stone-700 text-xs"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
