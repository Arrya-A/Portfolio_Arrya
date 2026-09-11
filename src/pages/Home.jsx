import resumePdf from "../assets/images/Arrya_Resume.pdf";

const Home = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-transparent px-6 py-16 md:px-16 lg:px-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-emerald-200/50 dark:bg-emerald-900/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-200/40 dark:bg-sky-900/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-4xl text-center">
        <div className="flex flex-col items-center space-y-6">
          <span className="inline-flex items-center rounded-full bg-emerald-100/80 dark:bg-emerald-950/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/80 shadow-sm">
            Hi, I am
          </span>

          <h1 className="text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-6xl lg:text-7xl">
            Arrya A
          </h1>

          <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 sm:text-3xl lg:text-4xl">
            Frontend Developer
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl">
            I build responsive, scalable web applications with React.js and
            modern frontend technologies, turning ideas into polished digital
            experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              className="rounded-full bg-emerald-600 dark:bg-emerald-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 dark:hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-600/30"
              href={resumePdf}
              download="Arrya_Resume.pdf"
            >
              Download CV
            </a>
            <a
              className="rounded-full border border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-900/70 px-7 py-3 text-base font-semibold text-stone-700 dark:text-stone-200 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-white dark:hover:bg-stone-800 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-md"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
