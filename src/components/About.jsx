const About = () => {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-16 bg-[#020617] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-indigo-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-purple-600/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE (compact) */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Passionate Full Stack Developer focused on scalable systems and modern UI/UX.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT COLUMN: DESCRIPTION & TAGS */}
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              I am a <span className="text-indigo-400 font-medium">B.Tech CSE graduate</span> and a{" "}
              <span className="text-indigo-300 font-medium">Full Stack Developer</span> specializing
              in the MERN stack ecosystem.
            </p>

            <p>
              I design and develop{" "}
              <span className="text-white">scalable, production-ready web applications</span> with a
              strong focus on performance, clean architecture, and modern user experiences.
            </p>

            <p>
              My core expertise lies in{" "}
              <span className="text-indigo-300">
                React, Node.js, MongoDB, and RESTful API development
              </span>
              , along with building optimized and maintainable backend systems.
            </p>

            <p>
              I am passionate about turning complex problems into efficient, real-world digital
              solutions.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "MERN Stack",
                "React",
                "Node.js",
                "MongoDB",
                "REST APIs",
                "Clean Code",
                "Scalable Systems",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-indigo-400/40 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PROFILE CARD */}
          <div className="relative">
            {/* Glow Card Backing */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl rounded-2xl" />

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md">
              <h3 className="text-indigo-300 font-semibold text-base sm:text-lg mb-4">
                Profile Summary
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Item: Education */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                  <span className="text-slate-400 text-xs sm:text-sm">Education</span>
                  <span className="text-sm sm:text-base text-slate-200">
                    B.Tech in Computer Science and Engineering
                  </span>
                </div>

                {/* Item: Stack */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                  <span className="text-slate-400 text-xs sm:text-sm">Stack</span>
                  <span className="text-sm sm:text-base text-slate-200">
                    React, Node.js, Express, MongoDB
                  </span>
                </div>

                {/* Item: Focus */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                  <span className="text-slate-400 text-xs sm:text-sm">Focus</span>
                  <span className="text-sm sm:text-base text-slate-200">
                    Full Stack Developer
                  </span>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-white/10">
                  <p className="text-green-400 font-medium text-xs sm:text-sm leading-relaxed">
                    ✔ Open to Full-Time Opportunities • Freelance Projects • Technical Collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;