import React from "react";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="min-h-[89vh]">
          <h2 className="mt-5">Hi,</h2>
          <h1 className="text-2xl">I'm Arrya A</h1>
          <h2>MERN Developer</h2>

          <a
            className="bg-stone-200 rounded shadow p-2"
            href="../assets/images/Arrya_Resume.pdf"
            download
          >
            DOWNLOAD CV <i class="fa-solid fa-download ps-2"></i>
          </a>
        </div>
        <div>{/* grid 2 */}</div>
      </div>
    </>
  );
};

export default Home;
