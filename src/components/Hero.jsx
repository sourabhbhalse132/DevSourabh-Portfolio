import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
  ];

  const topBadges = [
    "Open to Junior Dev Roles",
    "Available for Freelance Projects",
    "Open for Collaborations",
  ];

  const techBadges = ["React", "Node.js", "Express", "MongoDB"];

  const bottomBadges = [
    "Available Immediately",
    "Remote Friendly",
    "Open Source Contributor",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((p) => (p + 1) % roles.length);
      }
    }, isDeleting ? 40 : 70);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side (Content) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Top Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {topBadges.map((item) => (
              <motion.span
                key={item}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(99,102,241,0.2)",
                    "0 0 18px rgba(99,102,241,0.5)",
                    "0 0 0px rgba(99,102,241,0.2)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-[11px] px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-medium"
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Name & Greeting */}
          <p className="text-slate-400 text-sm flex items-center gap-2 font-medium">
            Hello, I'm
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold mt-2 tracking-tight">
            <span className="bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
              Sourabh Bhalse
            </span>
          </h1>

          {/* Typewriter Effect */}
          <p className="text-slate-300 mt-3 h-6 text-lg font-medium">
            {text}
            <span className="text-indigo-400 animate-pulse ml-0.5">|</span>
          </p>

          <p className="text-slate-400 mt-4 max-w-md leading-relaxed">
            Full Stack Developer specializing in scalable MERN applications and AI-powered web solutions.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {techBadges.map((b) => (
              <span
                key={b}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition cursor-default"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Call To Action Buttons */}
          <div className="flex gap-3 mt-6">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white flex items-center gap-2 transition transform hover:scale-105 shadow-lg shadow-indigo-600/20"
            >
              Get In Touch <ArrowRight size={16} />
            </a>

            <a
              href="/SourabhResume.pdf"
              download
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-200 flex items-center gap-2 hover:bg-white/10 transition"
            >
              Resume <Download size={16} />
            </a>
          </div>

          {/* Bottom Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {bottomBadges.map((item) => (
              <motion.span
                key={item}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  y: [0, -2, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[11px] px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-slate-400"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Side (Profile Image Showcase) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Outer Animated Glow Ring */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"
            />

            {/* Image Frame Container */}
            <div className="relative p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-500 group-hover:scale-102 group-hover:border-indigo-400/30">
              <img
                src="/profile.jpg"
                alt="Sourabh Bhalse Profile"
                className="w-[280px] sm:w-[320px] rounded-xl transition duration-500 group-hover:brightness-110"
              />

              {/* Decorative floating tags */}
              <div className="absolute -top-3 -right-3 px-3 py-1 text-[10px] font-medium bg-slate-900/80 border border-white/10 rounded-full text-indigo-300 backdrop-blur-sm shadow-md">
                MERN Dev
              </div>

              <div className="absolute -bottom-3 -left-3 px-3 py-1 text-[10px] font-medium bg-slate-900/80 border border-white/10 rounded-full text-purple-300 backdrop-blur-sm shadow-md">
                React Dev
              </div>
            </div>

            {/* Backing structural ambient glow fields */}
            <div className="absolute -z-10 top-10 left-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -z-10 bottom-10 right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;