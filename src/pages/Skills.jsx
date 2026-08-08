import React from "react";

const Skills = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "MUI",
    "VS Code",
    "Github",
    "React Router",
    "Redux",
    "Axios",
    "REST APIs",
    "React Hook Form",
    "Yup",
  ];

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-transparent px-6 py-12 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-4xl space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center tracking-tight text-stone-900 dark:text-stone-100">
          Skills
        </h2>

        {/* Main Card Container */}
        <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 rounded-[2rem] p-8 sm:p-12 shadow-sm text-center">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl bg-stone-100/80 dark:bg-stone-800/80 border border-stone-200/70 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-sm sm:text-base shadow-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:hover:text-white hover:border-emerald-600 dark:hover:border-emerald-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
