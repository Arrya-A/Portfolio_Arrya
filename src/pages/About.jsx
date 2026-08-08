import React from "react";

const About = () => {
  return (
    <section className="min-h-[89vh] bg-[#f7f4ee] px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-stone-300 pb-8">
          <div className="mb-4 inline-flex rounded bg-white px-3 py-1 text-xs font-semibold uppercase text-emerald-700 shadow-sm">
            About Me
          </div>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-stone-950 sm:text-5xl">
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
          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase text-emerald-700">
              Experience
            </p>
            <p className="mt-3 text-4xl font-semibold text-stone-950">1.5+</p>
            <p className="mt-2 text-sm text-stone-600">
              Years crafting frontend apps
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase text-sky-700">
              Degree
            </p>
            <p className="mt-3 text-4xl font-semibold text-stone-950">B.Tech</p>
            <p className="mt-2 text-sm text-stone-600">
              Computer Science & Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
