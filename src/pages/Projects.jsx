import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="mx-36">
        <div className="grid grid-cols-3">
          <div className="bg-stone-200 p-4 rounded shadow m-4 ">
            <div className="pb-2">
              <img
                className="rounded"
                src="https://cdn.explorecams.com/storage/photos/LEFEikw0MR_1600.jpg"
                alt=""
              />
            </div>
            <div>
              <h5>Title</h5>
              <h3>Description</h3>
              <button
                type="button"
                className="bg-transparent shadow-xl p-2 rounded hover:bg-stone-100 transition"
              >
                <FontAwesomeIcon
                  className="text-2xl"
                  icon={faLink}
                />
              </button>
              <button type="button" className="ms-4 bg-transparent shadow-xl p-2 rounded hover:bg-stone-100 transition">
                <FontAwesomeIcon className="text-2xl" icon={faGithubSquare} />
              </button>
            </div>
          </div>
          <div className="bg-stone-200 p-4 rounded shadow m-4 ">
            <div className="">
              <img src="" alt="" />
            </div>
            <div className="text-center">
              <h5></h5>
              <h3></h3>
              <FontAwesomeIcon icon={faLink} />
              <FontAwesomeIcon icon={faGithubSquare} />
            </div>
          </div>
          <div className="bg-stone-200 p-4 rounded shadow m-4 ">
            <div className="">
              <img src="" alt="" />
            </div>
            <div className="text-center">
              <h5></h5>
              <h3></h3>
              <FontAwesomeIcon icon={faLink} />
              <FontAwesomeIcon icon={faGithubSquare} />
            </div>
          </div>
          <div className="bg-stone-200 p-4 rounded shadow m-4 ">
            <div className="">
              <img src="" alt="" />
            </div>
            <div className="text-center">
              <h5></h5>
              <h3></h3>
              <button type="button">
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button type="button">
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
