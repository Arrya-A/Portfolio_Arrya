import React from "react";

const About = () => {
  return (
    <section className="relative min-h-[89vh] overflow-hidden bg-[#f7f4ee] px-6 py-12 md:px-16 lg:px-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-stone-200/80 bg-white/80 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur md:p-10 lg:p-12">
          <div className="border-b border-stone-200 pb-8">
            <div className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm">
              About Me
            </div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-stone-950 transition-all duration-300 sm:text-4xl lg:text-5xl">
              Crafting polished web experiences with design-led React development.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
              I am a frontend developer with 1.5+ years of experience building
              modern, responsive applications using React, Tailwind CSS, and the
              MERN stack. My focus is on clean UI, fast interactions, and
              delivering thoughtful digital products.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Experience
              </p>
              <p className="mt-3 text-4xl font-semibold text-stone-950 transition duration-300 group-hover:scale-[1.03]">
                1.5+
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Years crafting frontend apps
              </p>
            </div>
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                Degree
              </p>
              <p className="mt-3 text-4xl font-semibold text-stone-950 transition duration-300 group-hover:scale-[1.03]">
                B.Tech
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
