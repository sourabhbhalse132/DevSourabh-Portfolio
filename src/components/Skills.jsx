import {
  Blocks,
  Code2,
  Server,
  Cpu,
  Webhook,
  Database,
  Layers,
  GitFork,
  Terminal,
  CloudUpload,
  Shield,
  Gauge,
  Workflow,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      description: "High-performance UI development with modern architecture, state management, and optimized API integration.",
      className: "md:col-span-2",
      skills: [
        { name: "React.js", icon: <Blocks size={18} className="text-cyan-400" /> },
        { name: "JavaScript (ES6+)", icon: <Code2 size={18} className="text-amber-400" /> },
        { name: "Tailwind CSS", icon: <Globe size={18} className="text-sky-400" /> },
        { name: "Bootstrap", icon: <Layers size={18} className="text-purple-500" /> },
        { name: "Material UI", icon: <Layers size={18} className="text-blue-500" /> },
        { name: "Redux Toolkit", icon: <Workflow size={18} className="text-purple-400" /> },
      ],
    },
    {
      title: "Backend & APIs",
      description: "Secure, scalable backend systems with clean API design and production-grade architecture.",
      className: "md:col-span-1",
      skills: [
        { name: "Node.js", icon: <Server size={18} className="text-emerald-400" /> },
        { name: "Express.js", icon: <Terminal size={18} className="text-slate-300" /> },
        { name: "REST APIs", icon: <Webhook size={18} className="text-indigo-400" /> },
        { name: "JWT Auth", icon: <Shield size={18} className="text-red-400" /> },
        { name: "Middleware Design", icon: <Cpu size={18} className="text-orange-400" /> },
      ],
    },
    {
      title: "Database Management",
      description: "Efficient NoSQL data modeling with scalable schema design and performance optimization.",
      className: "md:col-span-1",
      skills: [
        { name: "MongoDB", icon: <Database size={18} className="text-green-400" /> },
        { name: "MongoDB Atlas", icon: <CloudUpload size={18} className="text-blue-400" /> },
        { name: "Mongoose ODM", icon: <Layers size={18} className="text-purple-400" /> },
        { name: "Schema Design", icon: <Code2 size={18} className="text-yellow-400" /> },
        { name: "Indexing", icon: <Gauge size={18} className="text-pink-400" /> },
      ],
    },
    {
      title: "Development Workflow & DevOps Tools",
      description: "Modern development workflow with version control, deployment, and build tooling.",
      className: "md:col-span-2",
      skills: [
        { name: "Git & GitHub", icon: <GitFork size={18} className="text-orange-400" /> },
        { name: "Postman", icon: <Cpu size={18} className="text-orange-500" /> },
        { name: "Thunder Client", icon: <Cpu size={18} className="text-yellow-500" /> },
        { name: "Vite", icon: <Layers size={18} className="text-yellow-400" /> },
        { name: "Vercel", icon: <CloudUpload size={18} className="text-white" /> },
        { name: "Render / Railway", icon: <Server size={18} className="text-indigo-300" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full py-16 sm:py-20 md:py-28 bg-[#050414] text-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Core Technical{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A production-oriented MERN stack skill set focused on scalable architecture, performance optimization, and maintainable system design.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-indigo-400/40 hover:-translate-y-1 ${category.className}`}
            >
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                  {category.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {category.description}
                </p>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 mt-5 sm:mt-6 md:mt-7">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-default shadow-sm"
                    >
                      {skill.icon}
                      <span className="text-[11px] sm:text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;