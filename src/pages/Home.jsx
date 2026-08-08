import React from "react";

const Home = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,_#f8f5ee_0%,_#f3efe7_45%,_#eef7f1_100%)] px-6 py-10 md:px-16 lg:px-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="relative w-full max-w-5xl text-center">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="space-y-4">
            <h2 className="text-xl text-stone-700">Hi, I am</h2>
            <h1 className="text-4xl font-semibold text-stone-900 transition duration-300 sm:text-5xl">
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
                className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
                href="../assets/images/Arrya_Resume.pdf"
                download
              >
                Download CV
              </a>
              <a
                className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-100"
                href="#projects"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
