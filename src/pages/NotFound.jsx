// src/pages/NotFound.jsx

import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-indigo-400/10 blur-3xl rounded-full bottom-[-80px] right-[-80px]" />

      <div className="relative z-10 text-center max-w-xl">
        
        {/* 404 */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-[#818cf8] drop-shadow-[0_0_25px_rgba(129,140,248,0.45)] animate-pulse">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-wide">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          The page you are trying to access doesn&apos;t exist or may
          have been moved to another route.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            mt-8 px-6 py-3
            rounded-xl
            border border-[#6366f1]
            text-[#a5b4fc]
            bg-white/5
            backdrop-blur-md
            hover:bg-[#6366f1]
            hover:text-white
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)]
          "
        >
          <FiArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;