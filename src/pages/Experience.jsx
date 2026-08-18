import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const experiences = [
    {
      role: "React Developer",
      company: "Bpract Software Solutions",
      location: "Calicut",
      period: "May 2025 - Present",
      type: "Professional",
      icon: faBriefcase,
      color: "emerald",
    },
    {
      role: "MERN Stack Developer",
      company: "Luminar Technolab",
      location: "Kochi",
      period: "Oct 2024 - Apr 2025",
      type: "Internship",
      icon: faGraduationCap,
      color: "sky",
    },
    {
      role: "ReactJS Developer",
      company: "Freelance, White Matrix Software Solutions",
      location: "Remote",
      period: "Nov 2024 - Jan 2025",
      type: "Freelance",
      icon: faBriefcase,
      color: "emerald",
    },
    {
      role: ".NET Developer",
      company: "Cognizant Technology Solutions",
      location: "Coimbatore",
      period: "Dec 2020 - Apr 2021",
      type: "Internship",
      icon: faGraduationCap,
      color: "sky",
    },
  ];

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-transparent px-6 py-12 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-4xl space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Experience
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto text-base sm:text-lg">
            My career journey in chronological order
          </p>
        </div>

        <div className="relative pl-6 md:pl-10 border-l-2 border-emerald-300/60 dark:border-emerald-800/80 space-y-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute -left-[45px] md:-left-[61px] top-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md ring-4 ring-white dark:ring-stone-950 ${item.color === "emerald"
                    ? "bg-emerald-600 text-white"
                    : "bg-sky-600 text-white"
                  }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-sm" />
              </div>

              <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 rounded-[2rem] p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                      {item.role}
                    </h4>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${item.color === "emerald"
                          ? "bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80"
                          : "bg-sky-100/80 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/80"
                        }`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    {item.company}
                  </p>
                  {item.location && (
                    <p className="text-xs font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-stone-400 dark:text-stone-500"
                      />
                      <span>{item.location}</span>
                    </p>
                  )}
                </div>

                <div className="self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/80 shadow-sm whitespace-nowrap">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-xs" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
