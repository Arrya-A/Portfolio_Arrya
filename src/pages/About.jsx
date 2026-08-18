import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-transparent px-6 py-12 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-4xl space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center tracking-tight text-stone-900 dark:text-stone-100">
          About Me
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-3 text-xs font-semibold uppercase tracking-widest">
              <FontAwesomeIcon icon={faBriefcase} className="text-sm" />
              <span>EXPERIENCE</span>
            </div>
            <p className="text-3xl font-bold text-stone-900 dark:text-stone-100">
              2+
            </p>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Years crafting frontend apps
            </p>
          </div>

          <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-3 text-xs font-semibold uppercase tracking-widest">
              <FontAwesomeIcon icon={faGraduationCap} className="text-sm" />
              <span>DEGREE</span>
            </div>
            <p className="text-3xl font-bold text-stone-900 dark:text-stone-100">
              B.Tech
            </p>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Computer Science & Engineering
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200/80 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 p-8 md:p-12 shadow-sm backdrop-blur-xl space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-stone-900 dark:text-stone-100">
            Crafting polished web experiences with design-led React development.
          </h1>
          <div className="border-t border-stone-200/60 dark:border-stone-800 pt-6">
            <p className="text-base sm:text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              I am a frontend developer with 1.5+ years of experience building
              modern, responsive applications using React, Tailwind CSS, and the
              MERN stack. My focus is on clean UI, fast interactions, and
              delivering thoughtful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
