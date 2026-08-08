import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-[90vh] items-center justify-center px-6 py-10 md:px-16 lg:px-24">
      <div className="w-full max-w-5xl text-center">
        <div className="space-y-4 mx-auto max-w-3xl">
          <h2 className="text-xl text-stone-700">Hi, I am</h2>
          <h1 className="text-4xl font-semibold text-stone-900 md:text-5xl">
            Arrya A
          </h1>
          <h2 className="text-2xl text-stone-700">Frontend Developer</h2>
          <p className="mx-auto max-w-xl text-base leading-7 text-stone-600">
            I build responsive, scalable web applications with React.js and
            modern frontend technologies, turning ideas into polished digital
            experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              className="rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700"
              href="../assets/images/Arrya_Resume.pdf"
              download
            >
              Download CV
            </a>
            <a
              className="rounded border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
