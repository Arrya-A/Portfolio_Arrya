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
      period: "Nov 2024 - Dec 2024",
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
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Experience
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto text-base sm:text-lg">
            My career journey in chronological order
          </p>
        </div>

        {/* Chronological Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-emerald-300/60 space-y-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[45px] md:-left-[61px] top-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md ring-4 ring-white ${
                  item.color === "emerald"
                    ? "bg-emerald-600 text-white"
                    : "bg-sky-600 text-white"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-sm" />
              </div>

              {/* Milestone Card */}
              <div className="bg-white/80 backdrop-blur-xl border border-stone-200/80 rounded-[2rem] p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg sm:text-xl font-bold text-stone-900">
                      {item.role}
                    </h4>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${
                        item.color === "emerald"
                          ? "bg-emerald-100/80 text-emerald-800 border-emerald-200"
                          : "bg-sky-100/80 text-sky-800 border-sky-200"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-stone-700">
                    {item.company}
                  </p>
                  {item.location && (
                    <p className="text-xs font-medium text-stone-500 flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-stone-400"
                      />
                      <span>{item.location}</span>
                    </p>
                  )}
                </div>

                <div className="self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 shadow-sm whitespace-nowrap">
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
