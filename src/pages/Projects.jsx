import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from "../assets/images/moviesearch.png";
const Projects = () => {
  const projects = [
    {
      name: "",
      description: "",
      live_link: "",
      github_link: "",
    },
  ];
  return (
    <>
      <h3 className="text-center text-xl text-emerald-500 pt-4">Projects</h3>
      <div className="md:mx-36">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-stone-200 p-4 rounded shadow m-4 hover:scale-105 transition ">
            <div className="pb-2">
              <img className="rounded" src={Img1} alt="" />
            </div>
            <div>
              <h5>Title</h5>
              <h3>Description</h3>
              <button
                type="button"
                className="px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button
                type="button"
                className="ms-2 px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </button>
            </div>
          </div>
          <div className="bg-stone-200 p-4 rounded shadow m-4 hover:scale-105 transition ">
            <div className="pb-2">
              <img className="rounded" src={Img1} alt="" />
            </div>
            <div>
              <h5>Title</h5>
              <h3>Description</h3>
              <button
                type="button"
                className="px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button
                type="button"
                className="ms-2 px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </button>
            </div>
          </div>
          <div className="bg-stone-200 p-4 rounded shadow m-4 hover:scale-105 transition ">
            <div className="pb-2">
              <img className="rounded" src={Img1} alt="" />
            </div>
            <div>
              <h5>Title</h5>
              <h3>Description</h3>
              <button
                type="button"
                className="px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button
                type="button"
                className="ms-2 px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </button>
            </div>
          </div>
          <div className="bg-stone-200 p-4 rounded shadow m-4 hover:scale-105 transition ">
            <div className="pb-2">
              <img className="rounded" src={Img1} alt="" />
            </div>
            <div>
              <h5>Title</h5>
              <h3>Description</h3>
              <button
                type="button"
                className="px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button
                type="button"
                className="ms-2 px-2 shadow-xl p-1 rounded bg-stone-100 "
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
