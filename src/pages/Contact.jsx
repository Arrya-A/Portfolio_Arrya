import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center">
        <div className="grid grid-cols-2">
          <div className="p-4">
            <p className="text-2xl">Hi,</p>
            <p className="text-2xl">I'm Arrya A</p>
            <p className="text-2xl">MERN Developer</p>
            <a
              href="./images/Arrya_Resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-stone-200 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-5"
            >
              DOWNLOAD CV{" "}
              <FontAwesomeIcon icon={faFileArrowDown} className="ml-2" />
            </a>
          </div>
          <div className="p-4">
            <p className="text-2xl">Hi,</p>
            <p className="text-2xl">I'm Arrya A</p>
            <p className="text-2xl">MERN Developer</p>
            <a
              href="./images/Arrya_Resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-stone-200 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-5"
            >
              DOWNLOAD CV{" "}
              <FontAwesomeIcon icon={faFileArrowDown} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
