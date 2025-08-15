import React from "react";

const Home = () => {
  return (
    <>
      {/* <div class="pb-5" id="home" style="background-color: whitesmoke;">
        <div class="row pt-5 pb-5">
          <div class="col-md-1"></div>
          <div class="col-md-6">
            <h2 class="mt-5">Hi,</h2>
            <h1>
              I'm <span style="color: var(--purple);">Arrya A</span>
            </h1>
            <h2>
              <span style="color: var(--purple);">MERN </span> Developer
            </h2>
            <h2 class="mt-3 mb-4">I love to build amazing Websites.</h2>
            <a
              class="btn btn-success mb-5 "
              href="./images/Arrya_Resume.pdf"
              download
            >
              DOWNLOAD CV <i class="fa-solid fa-download ps-2"></i>
            </a>
          </div>
          <div class="col-md-4 pt-5 picture_container ms-5">
            <img
              class="profile_picture"
              src="./images/profile_pic.png"
              alt=""
              height="70%"
              width="50%"
            />
            <img
              class="white_bg"
              src="./images/white.jpg"
              alt=""
              height="80%"
              width="62%"
            />
          </div>
          <div class="col-md-1"></div>
        </div>
      </div> */}
      {/* ------------------------------------------------------------------------- */}
      <div className="grid grid-cols-2">
        <div>
          <h2 className="mt-5">Hi,</h2>
          <h1 className="text-2xl">I'm Arrya A</h1>
          <h2>MERN Developer</h2>

          <a
            className="btn btn-success mb-5 "
            href="./images/Arrya_Resume.pdf"
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
